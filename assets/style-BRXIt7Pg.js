(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=i(a);fetch(a.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{l()});function l(){const e=document.getElementById("nav-placeholder");if(!e){console.error("nav-placeholder element niet gevonden");return}const t=`
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
    `;e.innerHTML=t,c()}function c(){const e=document.getElementById("hamburger"),t=document.getElementById("nav-menu");e&&t&&(e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("active");const i=t.classList.contains("active");e.setAttribute("aria-expanded",i)}),document.querySelectorAll(".nav-link").forEach(i=>{i.addEventListener("click",()=>{e.classList.remove("active"),t.classList.remove("active"),e.setAttribute("aria-expanded","false")})}),document.addEventListener("click",i=>{!e.contains(i.target)&&!t.contains(i.target)&&(e.classList.remove("active"),t.classList.remove("active"),e.setAttribute("aria-expanded","false"))}),document.addEventListener("keydown",i=>{i.key==="Escape"&&t.classList.contains("active")&&(e.classList.remove("active"),t.classList.remove("active"),e.setAttribute("aria-expanded","false"))})),o()}function o(){const e=window.location.pathname,t=e.split("/").pop()||"index.html";document.querySelectorAll(".nav-link").forEach(s=>{s.classList.remove("active");const a=s.getAttribute("href");a==="./"?(t===""||t==="index.html"||e.endsWith("/DeStaatVanDeWereld/")||e.endsWith("/DeStaatVanDeWereld")||e==="/DeStaatVanDeWereld/")&&s.classList.add("active"):a===t&&s.classList.add("active")})}
