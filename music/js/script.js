var songsData;
var songUrl;
var songStart;
var songEnd;
var aPlayer;
var yPlayer;
var currentSong;
var isLoop = 1;
var isYoutube;
var timeUpdater;
var ctrlKeyPressed = 0;

$(function(){
	$aPlayer = $("#audio-player");
	aPlayer = $aPlayer[0];

	/* get songs list from json file */
	$.getJSON("songs.json", function(data){
		var html = '';
		songsData = data;
		$.each(songsData, function(k, v){
			var faClass = "fa-music";
			if (v.youtube) {
				faClass = "fa-video-camera";
			}
			html += '<li data-index="'+k+'"><i class="fa '+ faClass +'"></i>'+v.name+'</li>';
		});
		$("#playlist").html(html);
	});

	/* play song on clicking on list */
	$("#playlist").on("click", "li", function(){
		$("#playlist li").removeClass("active");
		$(this).addClass("active");
		currentSong = $(this).data("index");

		songUrl = songsData[currentSong]["url"];
		songStart = songsData[currentSong]["start"];
		songEnd = songsData[currentSong]["end"];
		isYoutube = songsData[currentSong]["youtube"] | 0;

		$("#url").val(songUrl);
		$("#start").val(songStart);
		$("#end").val(songEnd);

		setPlayer();
	});

	$aPlayer.bind("timeupdate", function(){
		if (aPlayer.currentTime > songEnd && songEnd != "") {
			playNext();
		}
		updateProgress();
	});

	$aPlayer.bind("canplay", function(){
		$(".pause-play i").removeClass("fa-play").addClass("fa-pause");
		$(".player-action-btn").removeClass("hide");	
	});

	$aPlayer.bind("error", function(){
		playNext(1);
	});

	$aPlayer.bind("ended", function(){
		playNext();
	});

	$("#loop").click(function(){
		isLoop = !isLoop;
		$(this).find("i").toggleClass("fa-repeat").toggleClass("fa-refresh");
	});

	$(".pause-play").click(function(){
		$(this).toggleClass("pause");
		
		if ($(this).hasClass("pause")) {
			if (isYoutube) {
				yPlayer.pauseVideo();
			} else {
				aPlayer.pause();
			}			
		} else {
			if (isYoutube) {
				yPlayer.playVideo();
			} else {
				aPlayer.play();
			}
		}
		$(".pause-play i").toggleClass("fa-play").toggleClass("fa-pause");
	});

	$(".show-form").click(function(){
		$(this).find("i").toggleClass("fa-plus").toggleClass("fa-times");
		$(".new-song").slideToggle();

		if ($(this).find("i").hasClass("fa-times")) {
			$("html, body").animate({
				scrollTop: $(".new-song").offset().top - 20
			});
			$("#url").focus();
		}
	});

	$("#show-video").click(function(){
		$("#yplayer-container").toggleClass("fade-out");
		$(this).find("i").toggleClass("fa-eye").toggleClass("fa-eye-slash");
	});

	$(".new-song").submit(function(e){
		e.preventDefault();

		songUrl = $("#url").val();
		songStart = $("#start").val();
		songEnd = $("#end").val();

		if (songUrl) {
			if (songUrl.toLowerCase().indexOf("youtube") > -1) {
				isYoutube = 1;
			} else {
				isYoutube = 0;
			}
			setPlayer();
		} else {
			$("#url").focus();
		}
	});

	$(".progress-wrapper").click(function(e){
		seeking(e.offsetX);
	});

	$(".progress-wrapper").mousemove(function(e){		
		if (e.which == 1) {
			seeking(e.offsetX);
		}
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
				if ($("#playlist li.active").prev().length) {
					$("#playlist li.active").prev().click();
				} else {
					$("#playlist li:last").click();
				}
			} else if(e.keyCode == 39 || e.keyCode == 40) {
				if ($("#playlist li.active").next().length) {
					$("#playlist li.active").next().click();
				} else {
					$("#playlist li:first").click();
				}
			} else {
				ctrlKeyPressed = 0;
			}
		}
	});
});

/* play song */
function setPlayer() {	
	if (songStart) {
		songStart = parseInt(songStart.split(":")[0] * 60) + parseInt(songStart.split(":")[1]);
	}

	if (songEnd) {
		songEnd = parseInt(songEnd.split(":")[0] * 60) + parseInt(songEnd.split(":")[1]);		
	}

	if (isYoutube) {
		var videoId = songUrl.split("v=")[1];
		yPlayer.loadVideoById({
			'videoId': videoId,
			'startSeconds': songStart,
			'endSeconds': songEnd,
			'suggestedQuality': 'small'
		});
	} else {
		$aPlayer.attr("src", songUrl);
	}
	play(songStart);	
}

function play(sTime = 0) {	
	$(".progress-wrapper").removeClass("hide");

	$(".progress-wrapper .played-time").text("0:00");
	$(".progress-wrapper .full-time").text("0:00");

	$(".progress-wrapper .buffered").width(0);
	$(".progress-wrapper .played").width(0);
	
	if (isYoutube) {
		aPlayer.pause();
		yPlayer.seekTo(sTime);
		$("#show-video").removeClass("hide");
		$(".player-action-btn").removeClass("hide");
	} else {
		yPlayer.pauseVideo();
		$("#show-video").addClass("hide").find("i").addClass("fa-eye").removeClass("fa-eye-slash");
		$("#yplayer-container").addClass("fade-out");
		aPlayer.currentTime = sTime;
		aPlayer.play();
	}
}

function playNext(next = 0) {
	if (isLoop && !next) {		
		play(songStart);
	} else {
		var newIndex = currentSong + 1;
		if (newIndex >= songsData.length) {
			newIndex = 0;
		}
		$("#playlist li[data-index='"+ newIndex +"']").click();
	}
}

function updateProgress() {
	var bufferedEnd = 0;

	if (isYoutube) {
		var currentTime = yPlayer.getCurrentTime();
		var duration = yPlayer.getDuration();
	} else {
		var currentTime = aPlayer.currentTime;
		var duration = aPlayer.duration;
	}

	if (isYoutube) {
		bufferedEnd = yPlayer.getVideoLoadedFraction();
		var buffered = bufferedEnd * 100;
	} else {
		if (aPlayer.buffered.length > 0) {
			bufferedEnd = aPlayer.buffered.end(0);
		}		
		var buffered = bufferedEnd / duration * 100;
	}

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

	if (isYoutube) {
		var duration = yPlayer.getDuration();
		yPlayer.seekTo(duration * width / 100);
	} else {
		var duration = aPlayer.duration;
		aPlayer.currentTime = duration * width / 100;
	}
	
	updateProgress();
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