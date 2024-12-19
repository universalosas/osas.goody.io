document.getElementById('showButton').addEventListener('click', function() {
    const slidingDiv = document.getElementById('slidingDiv');
  
    // Remove the hidden class to make the div visible
    slidingDiv.classList.remove('hidden');
  
    // Use a timeout to allow the display change to take effect before animating
    setTimeout(() => {
        slidingDiv.style.top = '0';  // Slide down into view
        slidingDiv.style.opacity = '1';  // Fade in
    }, 50);
  });

  const textElement = document.getElementById('text');
  const textContainer = document.querySelector('.text-container');
  const toggleButton = document.getElementById('toggle');
  
  let isExpanded = false;
  
  // Full text
  const fullText = textElement.textContent;
  
  // Extract first 15 words
  const shortText = fullText.split(' ').slice(0, 40).join(' ') + '...';
  
  // Set the short text by default
  textElement.textContent = shortText;
  textContainer.classList.add('collapsed'); // Add initial collapsed state
  
  // Function to toggle the text display
  function toggleText() {
    if (isExpanded) {
      // Collapse to short text
      textElement.textContent = shortText;
      textContainer.classList.add('collapsed');
      textContainer.classList.remove('expanded');
      toggleButton.innerHTML = '<i class="bi bi-chevron-down"></i>';
    } else {
      // Expand to full text
      textElement.textContent = fullText;
      textContainer.classList.add('expanded');
      textContainer.classList.remove('collapsed');
      toggleButton.innerHTML = '<i class="bi bi-chevron-up"></i>';
    }
    isExpanded = !isExpanded;
  }
  
  // Add click event listener to the toggle button
  toggleButton.addEventListener('click', toggleText);
    