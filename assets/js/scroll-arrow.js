// Make scroll arrow clickable to scroll to projects section
document.addEventListener('DOMContentLoaded', function() {
  const scrollArrow = document.querySelector('.scroll-arrow');
  
  if (scrollArrow) {
    scrollArrow.addEventListener('click', function() {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const navbarHeight = window.innerWidth <= 768 ? 60 : 70;
        const targetPosition = projectsSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - navbarHeight - 5;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  }
});

