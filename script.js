function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
       const sr = ScrollReveal();
    sr.reveal('#profile', {
        duration: 3000, // Animation duration (in milliseconds)
        origin: 'left', // Slide in from the left
        distance: '100px', // Distance to slide
    });
    sr.reveal('#experience', {
        duration: 3000, // Animation duration (in milliseconds)
        origin: 'left', // Slide in from the left
        distance: '100px', // Distance to slide
    });
    sr.reveal('#contact', {
        duration: 3000, // Animation duration (in milliseconds)
        origin: 'left', // Slide in from the left
        distance: '100px', // Distance to slide
    });
    sr.reveal('#projects', {
        duration: 3000, // Animation duration (in milliseconds)
        origin: 'left', // Slide in from the left
        distance: '100px', // Distance to slide
    });
    sr.reveal('#about', {
        duration: 5000, // Animation duration (in milliseconds)
        origin: 'left', // Slide in from the left
        distance: '100px', // Distance to slide
    });
  
