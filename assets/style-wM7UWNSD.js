(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();document.addEventListener("DOMContentLoaded",async()=>{try{let e;if(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.protocol==="file:"?e=await fetch("./nav.html"):e=await fetch("https://danae02.github.io/DeStaatVanDeWereld/"+"nav.html"),!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const s=await e.text(),i=document.getElementById("nav-placeholder");i?(i.innerHTML=s,setTimeout(()=>{r()},10)):console.error("nav-placeholder element niet gevonden")}catch(e){console.error("Fout bij laden van navigatie:",e),o()}});function o(){const e=document.getElementById("nav-placeholder");if(!e)return;const a=`
        <nav class="navbar" role="navigation" aria-label="Hoofd navigatie">
            <div class="nav-container">
                <ul class="nav-menu" id="nav-menu">
                    <li class="nav-item">
                        <a href="./" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="about.html" class="nav-link">Over Ons</a>
                    </li>
                    <li class="nav-item">
                        <a href="dierenwelzijnenrecht.html" class="nav-link">Dierenwelzijn & dierenrecht</a>
                    </li>
                    <li class="nav-item">
                        <a href="klimaatenbiodiversiteit.html" class="nav-link">Klimaat & biodiversiteit</a>
                    </li>
                    <li class="nav-item">
                        <a href="volksgezondheid.html" class="nav-link">Volksgezondheid</a>
                    </li>
                    <li class="nav-item">
                        <a href="cultuurenmaatschappij.html" class="nav-link">Cultuur & Maatschappij</a>
                    </li>
                </ul>
                <button class="hamburger" id="hamburger" aria-label="Open navigatie" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    `;e.innerHTML=a,r()}function r(){const e=document.getElementById("hamburger"),a=document.getElementById("nav-menu");e&&a&&(e.addEventListener("click",()=>{e.classList.toggle("active"),a.classList.toggle("active");const s=a.classList.contains("active");e.setAttribute("aria-expanded",s)}),document.querySelectorAll(".nav-link").forEach(s=>{s.addEventListener("click",()=>{e.classList.remove("active"),a.classList.remove("active"),e.setAttribute("aria-expanded","false")})})),c()}function c(){const e=window.location.pathname,a=e.split("/").pop()||"index.html";document.querySelectorAll(".nav-link").forEach(i=>{i.classList.remove("active");const t=i.getAttribute("href");(t==="./"&&(a===""||a==="index.html"||e.endsWith("/DeStaatVanDeWereld/")||e.endsWith("/DeStaatVanDeWereld"))||t===a)&&i.classList.add("active")})}
