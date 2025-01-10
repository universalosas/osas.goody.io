let currentVideo = null;

function togglePlayPause(videoId) {
  const video = document.getElementById(videoId);
  const button = document.querySelector(
    `button[onclick="togglePlayPause('${videoId}')"]`
  );

  // Pause the currently playing video if any
  if (currentVideo && currentVideo !== video) {
    currentVideo.pause();
    updateButton(currentVideo.id, `<i class="bi bi-play-fill"></i>`);
  }

  // Play or pause the clicked video
  if (video.paused) {
    video.play();
    updateButton(videoId, `<i class="bi bi-pause-fill"></i>`);
    currentVideo = video;

    // Add event listener to hide the button after 10 seconds
    video.addEventListener('timeupdate', function hideButton() {
      if (video.currentTime >= 10) {
        button.style.display = 'none'; // Hide the button
        video.removeEventListener('timeupdate', hideButton); // Remove listener after hiding
      }
    });
  } else {
    video.pause();
    updateButton(videoId, `<i class="bi bi-play-fill"></i>`);
  }

  // Ensure the button reappears when the video is clicked
  video.addEventListener('click', function showButton() {
    button.style.display = 'inline-block'; // Show the button again
  });
}

function updateButton(videoId, text) {
  const button = document.querySelector(
    `button[onclick="togglePlayPause('${videoId}')"]`
  );
  button.innerHTML = text;
}

document.getElementById('triggerImage').addEventListener('click', function() {
  const infoBox = document.getElementById('infoBox');

  // Toggle visibility
  if (infoBox.classList.contains('hidden')) {
    infoBox.classList.remove('hidden');
    infoBox.classList.add('visible');
  } else {
    infoBox.classList.remove('visible');
    infoBox.classList.add('hidden');
  }
});



// Get elements for dropdown footer bar 
const dropdownFooter = document.getElementById('js-my-drop-down-footer');
const slideContainer = document.getElementById('js-slide-container');
const closeButton = document.getElementById('js-close-btn');

// Show the container on image click
dropdownFooter.addEventListener('click', () => {
  slideContainer.style.top = '0';
});

// Hide the container on button click
closeButton.addEventListener('click', () => {
  slideContainer.style.top = '-100%';
});



