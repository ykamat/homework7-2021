var video

window.addEventListener("load", function() {
	video = document.querySelector("#player1");
	volume = document.querySelector("#volume");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume*100 +"%"
});


document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slowing Down");
	video.play();
	video.playbackRate *= 0.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speeding Up");
	video.play();
	video.playbackRate /= 0.95;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skipping");
	// video.play();
	video.currentTime += 15;
	if (video.currentTime > video.duration) {
		video.currentTime = 0
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {

	if (video.muted==false) {
		console.log("Video muted");
		video.muted=true
		document.querySelector("#mute").innerHTML="Unmute"
	}

	else {
		console.log("Video unmuted");
		video.muted=false
		document.querySelector("#mute").innerHTML="Mute"
	}

});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing Volume");
	console.log(this.value);
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML=video.volume*100 +"%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.play();
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removing CSS");
	video.play();
	video.classList.remove("oldSchool");
});