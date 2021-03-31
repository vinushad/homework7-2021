var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML= video.volume*100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
    video.pause();
});


document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate = video.playbackRate*.95;
	// video.playbackRate *= .95;
	console.log(video.playbackRate)

});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate /=.95;
	console.log(video.playbackRate)
});


document.querySelector("#skip").addEventListener("click", function() {
	console.log("Speed Up");
	// video.currentTime = video.currentTime+15;
	video.currentTime += 15;
	video.loop = true;
	console.log(video.currentTime);
	video.play();
});


document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing Volume");
	console.log(this.value);
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML= video.volume*100 + "%"

});




document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Volume");
	console.log(this.value);
	// video.volume = this.value*0;
	// video.muted = true;
	// document.querySelector("#volume").innerHTML= video.volume*100*0 + "%"
	// if (video.muted = false) {
	// video.muted = true;
	// document.querySelector("#volume").innerHTML= video.volume*100*0 + "%";
	// }
	// else {
	//  video.muted = false;
	//  document.querySelector("#volume").innerHTML= video.volume*100 + "%"
	// }
	if(video.muted == true){
		console.log("Unmuted");
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		// document.querySelector("#volume").innerHTML= video.volume*100 + "%"
	}
	else if (video.muted == false){
		console.log("Muted")
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		// document.querySelector("#volume").innerHTML= video.volume*100*0 + "%";
	}

});





document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removing CSS");
	video.classList.remove("oldSchool");
});

