// Smooth fade overlay that covers the GIF as user scrolls (like andrewkdinh.com)
document.addEventListener('DOMContentLoaded', function() {
  const projectsSection = document.getElementById('projects');
  const body = document.body;
  
  if (!projectsSection || !body.classList.contains('Home')) {
    return; // Only run on homepage
  }
  
  function updateOverlayOpacity() {
    const scrollPosition = window.scrollY;
    const projectsOffset = projectsSection.offsetTop;
    const windowHeight = window.innerHeight;
    
    // Start fading when user scrolls past 20% of the way to projects section
    // Complete fade when reaching projects section
    const fadeStart = projectsOffset * 0.2;
    const fadeEnd = projectsOffset;
    
    let overlayOpacity = 0; // Initial overlay opacity (no overlay at top)
    
    if (scrollPosition >= fadeStart) {
      // Calculate fade progress (0 to 1)
      const fadeProgress = Math.min(1, (scrollPosition - fadeStart) / (fadeEnd - fadeStart));
      // Overlay opacity goes from 0 to 1 (fully covering the GIF)
      overlayOpacity = fadeProgress;
    }
    
    // Update CSS variable for overlay opacity
    document.documentElement.style.setProperty('--overlay-opacity', overlayOpacity);
  }
  
  // Throttle scroll events for better performance
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateOverlayOpacity();
        ticking = false;
      });
      ticking = true;
    }
  });
  
  // Initial call
  updateOverlayOpacity();
});

