// Array of video file names in the folder
var videoFiles = [
  "bg1.webm",
  "bg2.webm"
];

// Function to get a random video file from the array
function getRandomVideo() {
  var randomIndex = Math.floor(Math.random() * videoFiles.length);
  return "videos/" + videoFiles[randomIndex];
}

// Set the source of the video element to a random video file
var videoElement = document.getElementById("background-video");
videoElement.src = getRandomVideo();
