// nav.js - Verbeterde navigatie met hamburger menu
document.addEventListener("DOMContentLoaded", async () => {
    // Nav HTML laden (zoals voorheen)
    //const response = await fetch("./nav.html"); // lokaal
    const response = await fetch("https://danae02.github.io/DeStaatVanDeWereld/nav.html"); // online


    const navHtml = await response.text();
    document.getElementById("nav-placeholder").innerHTML = navHtml;

    // Wacht even tot de DOM is bijgewerkt
    setTimeout(() => {
        initializeNavigation();
    }, 10);
});

function initializeNavigation() {
    // Hamburger menu functionaliteit
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Sluit menu bij klik op link (mobiel)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Active link detectie
    setActiveNavLink();
}

function setActiveNavLink() {
    // Huidige pagina bepalen
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Alle nav-links ophalen
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        // Eerst alle active classes verwijderen
        link.classList.remove('active');

        const href = link.getAttribute('href');

        // Check voor home pagina
        if (href === './' && (currentPage === '' || currentPage === 'index.html')) {
            link.classList.add('active');
        }
        // Check voor andere pagina's
        else if (href === currentPage) {
            link.classList.add('active');
        }
    });
}