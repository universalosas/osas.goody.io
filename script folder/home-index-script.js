

// eventlistener to navigage to job-categories html file
document.getElementById('js-job-category-nav').addEventListener('click', function() {
    // Navigate to the target HTML page
    window.location.href = 'job.categories.html'; 
  });


// eventlistener to navigage to job-categories html file
document.getElementById('js-graphic-caty-nav').addEventListener('click', function() {
  // Navigate to the target HTML page
  window.location.href = 'job.categories.html#container-graphic-jump-in'; 
});

// eventlistener to navigage to job-categories html file
document.getElementById('js-gaming-caty-nav').addEventListener('click', function() {
  // Navigate to the target HTML page
  window.location.href = 'job.categories.html#container-jump-in-game'; 
});

// eventlistener to navigage to job-categories html file
document.getElementById('js-caty-nav').addEventListener('click', function() {
  // Navigate to the target HTML page
  window.location.href = 'https://youtube.com/@universalosasgoody?si=BaxDOVqynchMLhz-'; 
});


  const slides = document.querySelectorAll('.slide');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const pauseButton = document.getElementById('pause');
  let currentIndex = 0;
  let interval;
  let isPaused = false; // To track play/pause state
  
  // Function to show a specific slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }
  
  // Function to go to the next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
  
  // Function to go to the previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }
  
  // Function to start autoplay
  function startAutoPlay() {
    interval = setInterval(nextSlide, 6000);
    pauseButton.textContent = 'Pause'; // Update button text
    isPaused = false;
  }
  
  // Function to stop autoplay
  function stopAutoPlay() {
    clearInterval(interval);
    pauseButton.textContent = 'Play'; // Update button text
    isPaused = true;
  }
  
  // Function to toggle autoplay
  function toggleAutoPlay() {
    if (isPaused) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
  }
  
  // Event Listeners
  nextButton.addEventListener('click', () => {
    stopAutoPlay();
    nextSlide();
    startAutoPlay();
  });
  
  prevButton.addEventListener('click', () => {
    stopAutoPlay();
    prevSlide();
    startAutoPlay();
  });
  
  pauseButton.addEventListener('click', toggleAutoPlay);
  
  // Initialize
  showSlide(currentIndex);
  startAutoPlay();


  // navigate to social media pages 
  document.getElementById('instagram-btn').addEventListener('click', function() {
    window.location.href = 'https://www.instagram.com/osaro_goody?igsh=NTc4MTIwNjQ2YQ=='; 
  });

  document.getElementById('youtube-btn').addEventListener('click', function() {
    window.location.href = 'https://youtube.com/@universalosasgoody?si=BaxDOVqynchMLhz-'; 
  });

  document.getElementById('facebook-btn').addEventListener('click', function() {
    window.location.href = 'https://www.facebook.com/osarogoody1'; 
  });