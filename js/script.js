function playVideo() {
    var video = document.getElementById("myVideo");
    var button = document.querySelector(".play-button");
    video.play();
    button.style.display = "none";
}