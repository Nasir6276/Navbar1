const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-link');

    const navLink = document.querySelectorAll('.nav-link li');
    // toggle nav
    hamburger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');

        // animate link 
        navLink.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`;
            }
        });

        // Hamburger animation
        hamburger.classList.toggle('toggle');
    });
}

navSlide();