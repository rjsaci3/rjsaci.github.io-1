var player;
var id;
var start;
var end;

$(function() {
	var playlist = $(".playlist");

	var html = '';
	$.getJSON("songs.json", function(songs){
		$.each(songs, function(k, song){
			html += '<li data-name="'+song.name+'" data-url="'+song.url+'" data-start="'+song.start+'" data-end="'+song.end+'">'+song.name+'</li>';
		});
		playlist.append(html);
	});

	$(".playlist").on("click", "li", function(){
		$(".playlist li").removeClass("active");
		$(this).addClass("active");
		$(".player-btn").removeClass("pause");

		$(".new-song").slideUp();		

		id = $(this).data("url").split("v=")[1];
		start = $(this).data("start");
		end = $(this).data("end");
		
		$("#url").val($(this).data("url"));
		$("#start").val(start);
		$("#end").val(end);

		play();
	});

	$(".new-song-btn").click(function(){
		id = $("#url").val().split("v=")[1];
		start = $("#start").val();
		end = $("#end").val();

		if (id == undefined) {
			$("#url").focus();
			return false;
		}

		play();
	});
	
	$(".player-btn").click(function(){
		$(this).toggleClass("pause");
		if ($(this).hasClass("pause")) {
			player.pauseVideo();
		} else {
			player.playVideo();
		}
	});

	$("#show-video-check").click(function(){
		if ($(this).is(":checked")) {
			$("#player-container").removeClass("fade-out");
		} else {
			$("#player-container").addClass("fade-out");
		}
	});

	$(".add-btn").click(function(){
		$(".new-song").slideToggle();
	});
});


var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
	player = new YT.Player('player', {
		events: {
			'onStateChange': onPlayerStateChange
		}
	});            
}

function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.ENDED) {
		replay();
	}
}

function replay() {            
	player.seekTo(start);
}

function play() {	
	$(".list-play").removeClass("hide");

	start = parseInt(start.split(":")[0] * 60) + parseInt(start.split(":")[1]);
	end = parseInt(end.split(":")[0] * 60) + parseInt(end.split(":")[1]);
	
	player.loadVideoById({
		'videoId': id,
		'startSeconds': start,
		'endSeconds': end,
		'suggestedQuality': 'small'
	});
}