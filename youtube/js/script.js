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

$(function(){
	$playlist = $("#playlist");
	$songsList = $("#songslist");

	getPlaylists();

	$playlist.on("click", "li", function(){
		$playlist.find("li").removeClass("active");
		$(this).addClass("active");	

		createSongsLlist($(this).data("i"));
		$(".player-action").slideDown();
		$playlist.hide();
		$songsList.show();
		$("#close").show();
		$("#navigate").find("i").addClass("fa-arrow-left").removeClass("fa-arrow-right");
	});

	$("#navigate").click(function(){
		$songsList.toggle();
		$playlist.toggle();
		$(this).find("i").toggleClass("fa-arrow-left").toggleClass("fa-arrow-right");
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
	});

	$(".progress-wrapper").click(function(e){
		seeking(e.offsetX);
	});

	$(".progress-wrapper").mousemove(function(e){		
		if (e.which == 1) {
			seeking(e.offsetX);
		}
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
		$("#yplayer-container").toggleClass("fade-out");
		$(this).find("i").toggleClass("fa-eye").toggleClass("fa-eye-slash");
	});

	$("body").keydown(function(e){
		if (e.keyCode == 32 && !$(".pause-play").hasClass("hide")) {
			e.preventDefault();
		}
	});

	$("body").keyup(function(e){
		if (e.keyCode == 32 && !$(".pause-play").hasClass("hide")) {
			$(".pause-play").click();
		}
	});

	$("body").keydown(function(e){
		if (e.keyCode == 17) {
			ctrlKeyPressed = 1;
		}
	}).keyup(function(e){
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

	if (i == "all") {
		$.each(playlistsData, function(k1, v1){
			$.each(v1.songs, function(k, v){
				html += '<li data-id="'+ v.videoId +'">'+ v.title +'</li>';
			});
		});
	} else {
		$.each(playlistsData[i].songs, function(k, v){
			html += '<li data-id="'+ v.videoId +'">'+ v.title +'</li>';
		});
	}
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

	if (event.data == YT.PlayerState.PLAYING) {
		$(".pause-play").removeClass("pause").find("i").addClass("fa-pause").removeClass("fa-play");
		updateProgress();	
		timeUpdater = setInterval(updateProgress, 1000);
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

function playNext() {
	if (isLoop) {		
		yPlayer.seekTo(0);
	} else {
		if ($songsList.find("li.active").next().length) {
			$songsList.find("li.active").next().click();
		} else {
			$songsList.find("li:first").click();
		}
	}
}