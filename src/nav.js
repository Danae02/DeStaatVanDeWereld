// nav.js - volledige navigatie voor lokaal en GitHub Pages
document.addEventListener("DOMContentLoaded", () => {
    createNavigation();
});

function createNavigation() {
    const navPlaceholder = document.getElementById("nav-placeholder");
    if (!navPlaceholder) {
        console.error('nav-placeholder element niet gevonden');
        return;
    }

    // Verbeterde detectie voor GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io') ||
        window.location.pathname.includes('/DeStaatVanDeWereld/');

    // Basis pad bepalen - altijd absoluut voor GitHub Pages
    let basePath;
    if (isGitHubPages) {
        basePath = '/DeStaatVanDeWereld';
    } else {
        // Voor lokale ontwikkeling, gebruik relatief pad
        const pathSegments = window.location.pathname.split('/');
        const depth = pathSegments.length - 2; // -1 voor lege string, -1 voor bestandsnaam
        basePath = depth > 0 ? '../'.repeat(depth) + '.' : '.';
    }

    console.log('BasePath:', basePath, 'Current path:', window.location.pathname);

    // Nav HTML direct in JS
    navPlaceholder.innerHTML = `
        <nav class="navbar" role="navigation" aria-label="Hoofd navigatie">
            <div class="nav-container">
                <ul class="nav-menu" id="nav-menu">
                    <li class="nav-item"><a href="${basePath}/" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="${basePath}/about.html" class="nav-link">Over Ons</a></li>
                    <li class="nav-item"><a href="${basePath}/dierenwelzijnenrecht.html" class="nav-link">Dierenwelzijn & dierenrecht</a></li>
                    <li class="nav-item"><a href="${basePath}/klimaatenbiodiversiteit.html" class="nav-link">Klimaat & biodiversiteit</a></li>
                    <li class="nav-item"><a href="${basePath}/volksgezondheid.html" class="nav-link">Volksgezondheid</a></li>
                    <li class="nav-item"><a href="${basePath}/cultuurenmaatschappij.html" class="nav-link">Cultuur & Maatschappij</a></li>
                </ul>

                <button class="hamburger" id="hamburger" aria-label="Open navigatie" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    `;

    initializeNavigation();
}

function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (!hamburger || !navMenu) return;

    // Hamburger menu functionaliteit
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');

        // Update aria-expanded voor toegankelijkheid
        const isExpanded = navMenu.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
    });

    // Sluit menu bij klik op link (mobiel)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    // Sluit menu bij klik buiten
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // Sluit menu bij Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    // Active link detectie
    setActiveNavLink();
}

function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        const linkPage = href.split('/').pop();

        // Home detectie
        if ((href.endsWith('/') || linkPage === 'index.html' || linkPage === '') &&
            (currentPage === '' || currentPage === 'index.html')) {
            link.classList.add('active');
        } else if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}