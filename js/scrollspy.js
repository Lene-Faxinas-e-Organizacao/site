/*
 * This is a simple scrollspy implementation that highlights nav links when the user scrolls to the corresponding section.
 * It's designed to be lightweight and avoid the jQuery selector errors found in the previous version.
 */
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('#navbarNav .nav-link');
    const offset = 100; // Height of the navbar + some breathing room

    function changeNav() {
        let index = sections.length;

        while(--index && window.scrollY + offset < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        
        // Check if a corresponding navLink exists before adding the active class
        if (navLinks[index]) {
            navLinks[index].classList.add('active');
        }
    }

    // Add active class to the first link by default
    if (navLinks.length > 0) {
      // Find the "Início" link and make it active initially
      navLinks.forEach(link => {
        if (link.getAttribute('href') === '#hero') {
          link.classList.add('active');
        }
      });
    }

    // Debounce scroll event for performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(changeNav, 50);
    });
});
