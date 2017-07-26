var songsData;
var songUrl;
var songStart;
var songEnd;
var player;
var currentSong;
var isLoop = 1;

$(function(){
	$player = $("#player audio");
	player = $player[0];

	/* get songs list from json file */
	$.getJSON("songs.json", function(data){
		var html = '';
		songsData = data;
		$.each(songsData, function(k, v){
			html += '<li data-index="'+k+'">'+v.name+'</li>';
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

		$("#url").val(songUrl);
		$("#start").val(songStart);
		$("#end").val(songEnd);

		setPlayer();
	});

	$player.bind("timeupdate", function(){
		if (player.currentTime > songEnd && songEnd != "") {
			playNext();
		}
	});

	$player.bind("ended", function(){
		playNext();
	});

	$("#loop").click(function(){
		isLoop = !isLoop;
		$(this).find("i").toggleClass("fa-repeat").toggleClass("fa-refresh");
	});

	$(".pause-play").click(function(){
		if (player.paused) {
			player.play();
			$(".pause-play i").removeClass("fa-play").addClass("fa-pause");
		} else {
			$(".pause-play i").addClass("fa-play").removeClass("fa-pause");
			player.pause();
		}
	});

	$(".show-form").click(function(){
		$(this).find("i").toggleClass("fa-plus").toggleClass("fa-times");
		$(".new-song").slideToggle();
	});

	$(".new-song").submit(function(e){
		e.preventDefault();

		songUrl = $("#url").val();
		songStart = $("#start").val();
		songEnd = $("#end").val();

		if (songUrl) {
			setPlayer();
		} else {
			$("#url").focus();
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
	$player.attr("src", songUrl);
	play(songStart);	
}

function play(sTime = 0) {
	$(".pause-play i").removeClass("fa-play").addClass("fa-pause");
	$(".player-action-btn").removeClass("hide");
	player.currentTime = sTime;
	player.play();	
}

function playNext() {
	if (isLoop) {
		play(songStart);
	} else {
		var newIndex = currentSong + 1;
		if (newIndex >= songsData.length) {
			newIndex = 0;
		}
		$("#playlist li[data-index='"+ newIndex +"']").click();
	}
}
