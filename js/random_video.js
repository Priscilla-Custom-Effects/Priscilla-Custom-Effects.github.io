// Array of video file names in the folder
var videoFiles = ["bg1.webm"];

// Function to get a random starting time for the video
function getRandomVideoTime() {
  // Set the maximum duration of the video in seconds
  var maxDuration = 13; // Adjust this value based on your video's actual duration
  // Generate a random starting time between 0 and maxDuration
  var randomTime = Math.floor(Math.random() * maxDuration);
  return randomTime;
}

// Set the source of the video element to the specified video file
var videoElement = document.getElementById("background-video");
videoElement.src = "videos/" + videoFiles[0];

// Set the random starting time for the video
videoElement.addEventListener("loadedmetadata", function () {
  // Wait for metadata to be loaded before setting currentTime
  videoElement.currentTime = getRandomVideoTime();
});
