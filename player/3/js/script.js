var apiKey = "AIzaSyAnNBUSD8iYHsAaNbjZO8vsFJdC4SD4wAM";
var channelId = "UCiFxv0_LJ855UTr6w-Hw4-g";
var apiUrl = "https://www.googleapis.com/youtube/v3/";
var playlistUrl = apiUrl + "playlists?key=" + apiKey + "&part=snippet&channelId=" + channelId;
var playlistItemUrl = apiUrl + "playlistItems?key=" + apiKey + "&part=snippet&maxResults=50&playlistId=";

var playlistsData = {};

var $playlist;
var $songsList;
var yPlayer;
var timeUpdater;
var isLoop = 0;
var ctrlKeyPressed = 0;
var errorTimeout;

$(function(){
	$playlist = $("#playlist");
	$songsList = $("#songslist");
	$progressTooltip = $(".progress-wrapper .tooltip");

	getPlaylists();

	$playlist.on("click", "li", function(){
		$playlist.find("li").removeClass("active");
		$(this).addClass("active");	

		createSongsLlist($(this).data("i"));
		$(".player-action").slideDown(function(){
			setFixedHeaderPadding();
		});
		$playlist.hide();
		$songsList.show();
		$("#close").show();
		$("#navigate").find("i").addClass("fa-arrow-left").removeClass("fa-arrow-right");
		$(document).scrollTop(0);
	});

	$("#navigate").click(function(){
		$songsList.toggle();
		$playlist.toggle();
		$(this).find("i").toggleClass("fa-arrow-left").toggleClass("fa-arrow-right");
		$(document).scrollTop(0);
	});

	$songsList.on("click", "li", function(){
		$songsList.find("li").removeClass("active");
		$(this).addClass("active");		

		yPlayer.loadVideoById({
			'videoId': $(this).data("id"),
			'startSeconds': 0,
			'suggestedQuality': 'small'
		});

		$(".progress-wrapper").removeClass("hide");

		$(".progress-wrapper .played-time").text("0:00");
		$(".progress-wrapper .full-time").text("0:00");

		$(".progress-wrapper .buffered").width(0);
		$(".progress-wrapper .played").width(0);

		$(".player-action-btn").removeClass("hide");
		setFixedHeaderPadding();
	});

	$(".progress-wrapper").click(function(e){
		seeking(e.offsetX);
	});

	$(".progress-wrapper").mousemove(function(e){		
		if (e.which == 1) {
			seeking(e.offsetX);
		}

		var width = Math.round(e.offsetX / $(".progress-wrapper").width() * 100);
		var toolTime = yPlayer.getDuration() * width / 100;
		var toolTimeMinutes = Math.floor(toolTime / 60);	
		var toolTimeSeconds = Math.floor(toolTime % 60);

		if (toolTimeSeconds < 10) {
			toolTimeSeconds = "0" + toolTimeSeconds;
		}

		$progressTooltip.text(toolTimeMinutes + ":" + toolTimeSeconds).css({left: e.offsetX});
	});

	$("#loop").click(function(){
		isLoop = !isLoop;
		$(this).find("i").toggleClass("fa-refresh").toggleClass("fa-repeat");
	});

	$(".pause-play").click(function(){
		$(this).toggleClass("pause");
		
		if ($(this).hasClass("pause")) {
			yPlayer.pauseVideo();						
		} else {
			yPlayer.playVideo();			
		}
		$(".pause-play i").toggleClass("fa-play").toggleClass("fa-pause");
	});

	$("#show-video").click(function(){
		var vContainer = $("#yplayer-container");		
		if (vContainer.hasClass("active")) {
			$(this).find("i").addClass("fa-eye").removeClass("fa-eye-slash");		
			vContainer.removeClass("active");
			setTimeout(function(){
				vContainer.addClass("hide");
			}, 500);
		} else {
			$(this).find("i").removeClass("fa-eye").addClass("fa-eye-slash");
			vContainer.removeClass("hide");
			$("html, body").animate({
				scrollTop: vContainer.offset().top
			}, 500);
			setTimeout(function(){
				vContainer.addClass("active");
			}, 500);
		}
	});

	$("body").keydown(function(e){
		/* prevent spacebar to scroll down*/
		if (e.keyCode == 32 && !$(".pause-play").hasClass("hide")) {
			e.preventDefault();
		}

		/* set ctrl key pressed flag */
		if (e.keyCode == 17) {
			ctrlKeyPressed = 1;
		}
	});

	$("body").keyup(function(e){
		/* spacebar press - play/pause */
		if (e.keyCode == 32 && !$(".pause-play").hasClass("hide")) {
			$(".pause-play").click();
		}

		/* escape press - hide video */
		if (e.keyCode == 27) {
			var vContainer = $("#yplayer-container");		
			if (vContainer.hasClass("active")) {
				$("#show-video i").addClass("fa-eye").removeClass("fa-eye-slash");		
				vContainer.removeClass("active");
				setTimeout(function(){
					vContainer.addClass("inactive");
				}, 500);
			}
		}
	
		/* arrow keys - Play prev/next song */
		if (ctrlKeyPressed) {
			if (e.keyCode == 37 || e.keyCode == 38) {
				if ($songsList.find("li.active").prev().length) {
					$songsList.find("li.active").prev().click();
				} else {
					$songsList.find("li:last").click();
				}
			} else if(e.keyCode == 39 || e.keyCode == 40) {
				if ($songsList.find("li.active").next().length) {
					$songsList.find("li.active").next().click();
				} else {
					$songsList.find("li:first").click();
				}
			} else {
				ctrlKeyPressed = 0;
			}
		}
	});

	setFixedHeaderPadding(1);
});

/* get all playlists */
function getPlaylists() {
	$.ajax({
		url: playlistUrl,
		dataType: "json",
		success: function(data) {
			var i = 0;
			$.each(data.items, function(k, v){
				if (v.snippet.title.toLowerCase().indexOf("songs -") > -1) {
					playlistsData[i] = {"id": v.id, "title": v.snippet.title.replace(/songs - /i, '')};
					getPlaylistData(i, v.id);
					i++;
				}	

				if (k + 1 == data.items.length) {
					createPlaylist();
				}
			});			
		},
		error: function() {
			alert("Some error has occured");
		}
	});
}

/* get playlist data */
function getPlaylistData(i, id) {
	$.ajax({
		url: playlistItemUrl + id,
		dataType: "json",
		success: function(data) {
			var j = 0;
			playlistsData[i]["songs"] = {};
			$.each(data.items, function(k, v){
				if (v.snippet.title.toLowerCase().indexOf("deleted video") == -1) {
					playlistsData[i]["songs"][j] = {"title": v.snippet.title, "videoId": v.snippet.resourceId.videoId};	
					j++;
				}
			});
		},
		error: function() {
			alert("Some error has occured");
		}
	});
}

function createPlaylist() {
	var html = '<li data-i="all">All</li>';
	$.each(playlistsData, function(k, v){
		html += '<li data-i="'+ k +'">'+ v.title +'</li>';
	});
	$playlist.html(html);
}

function createSongsLlist(i) {
	var html = "";
	var songsData = [];

	if (i == "all") {
		$.each(playlistsData, function(k, v){
			$.each(v.songs, function(k2, v2){
				songsData.push(v2);
			});			
		});
	} else {
		songsData = playlistsData[i].songs;
	}

	songsData = shuffleObj(songsData);

	$.each(songsData, function(k, v){
		html += '<li data-id="'+ v.videoId +'">'+ v.title +'</li>';
	});
	$songsList.html(html);	
}

var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
	yPlayer = new YT.Player('yplayer', {
		events: {
			'onStateChange': onPlayerStateChange
		}
	});            
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.ENDED) {
		playNext();		
	}

	if (event.data == YT.PlayerState.UNSTARTED) {
		clearTimeout(errorTimeout);
		errorTimeout = setTimeout(function(){
			playNext(1);
			console.log("Video not found or blocked");
		}, 5000);
	}

	if (event.data == YT.PlayerState.BUFFERING) {
		clearTimeout(errorTimeout);
	} 

	if (event.data == YT.PlayerState.PLAYING) {
		$(".pause-play").removeClass("pause").find("i").addClass("fa-pause").removeClass("fa-play");
		updateProgress();	
		timeUpdater = setInterval(updateProgress, 1000);
		clearTimeout(errorTimeout);
	} else {
		$(".pause-play").addClass("pause").find("i").addClass("fa-play").removeClass("fa-pause");
		clearInterval(timeUpdater);
	}
}

function play() {	
	$(".progress-wrapper").removeClass("hide");

	$(".progress-wrapper .played-time").text("0:00");
	$(".progress-wrapper .full-time").text("0:00");

	$(".progress-wrapper .buffered").width(0);
	$(".progress-wrapper .played").width(0);
	
	$("#show-video").removeClass("hide");
	$(".player-action-btn").removeClass("hide");	
}

function updateProgress() {
	var bufferedEnd = 0;

	var currentTime = yPlayer.getCurrentTime();
	var duration = yPlayer.getDuration();

	bufferedEnd = yPlayer.getVideoLoadedFraction();
	var buffered = bufferedEnd * 100;

	var played = currentTime / duration * 100;
	var startTime = "0:00";

	var playedTimeMinutes = Math.floor(currentTime / 60);	
	var playedTimeSeconds = Math.floor(currentTime % 60);
	var fullTimeMinutes = Math.floor(duration / 60);	
	var fullTimeSeconds = Math.floor(duration % 60);

	if (playedTimeSeconds < 10) {
		playedTimeSeconds = "0" + playedTimeSeconds;
	}

	if (fullTimeSeconds < 10) {
		fullTimeSeconds = "0" + fullTimeSeconds;
	}

	$(".progress-wrapper .buffered").width(buffered + "%");
	$(".progress-wrapper .played").width(played + "%");

	if (!isNaN(playedTimeMinutes)) {
		$(".progress-wrapper .played-time").text(playedTimeMinutes + ":" + playedTimeSeconds);
	}
	
	if (!isNaN(fullTimeMinutes)) {
		$(".progress-wrapper .full-time").text(fullTimeMinutes + ":" + fullTimeSeconds);
	}
}

function seeking(offsetX) {
	var width = Math.round(offsetX / $(".progress-wrapper").width() * 100);

	var duration = yPlayer.getDuration();
	yPlayer.seekTo(duration * width / 100);	
	
	updateProgress();
}

function playNext(isNext = 0) {
	if (isLoop && isNext == 0) {		
		yPlayer.seekTo(0);
	} else {
		if ($songsList.find("li.active").next().length) {
			$songsList.find("li.active").next().click();
		} else {
			$songsList.find("li:first").click();
		}
	}
}

function shuffleObj(obj) {
	var array = [];
	var i = 0, j = 0, temp = null;

	for (var k in obj) {
		array[k] = obj[k];
	}

	for (i = array.length - 1; i > 0; i -= 1) {
		j = Math.floor(Math.random() * (i + 1));
		temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	return array;
}

function setFixedHeaderPadding(onLoad = 0) {
	var fixedHeight = $("#fixed-bar").height() + 20;
	if (onLoad) {
		$(".container").css({paddingTop: fixedHeight + "px"});
	} else {
		$(".container").animate({paddingTop: fixedHeight + "px"});
	}
}