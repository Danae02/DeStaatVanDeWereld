(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{l()});function l(){const t=document.getElementById("nav-placeholder");if(!t){console.error("nav-placeholder element niet gevonden");return}t.innerHTML=`
        <nav class="navbar" role="navigation" aria-label="Hoofd navigatie">
            <div class="nav-container">
                <ul class="nav-menu" id="nav-menu">
                    <li class="nav-item"><a href="/DeStaatVanDeWereld/" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="/DeStaatVanDeWereld/about.html" class="nav-link">Over Ons</a></li>
                    <li class="nav-item"><a href="/DeStaatVanDeWereld/dierenwelzijnenrecht.html" class="nav-link">Dierenwelzijn & dierenrecht</a></li>
                    <li class="nav-item"><a href="/DeStaatVanDeWereld/klimaatenbiodiversiteit.html" class="nav-link">Klimaat & biodiversiteit</a></li>
                    <li class="nav-item"><a href="/DeStaatVanDeWereld/volksgezondheid.html" class="nav-link">Volksgezondheid</a></li>
                    <li class="nav-item"><a href="/DeStaatVanDeWereld/cultuurenmaatschappij.html" class="nav-link">Cultuur & Maatschappij</a></li>
                </ul>

                <button class="hamburger" id="hamburger" aria-label="Open navigatie" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    `,c()}function c(){const t=document.getElementById("hamburger"),a=document.getElementById("nav-menu");!t||!a||(t.addEventListener("click",()=>{t.classList.toggle("active"),a.classList.toggle("active");const n=a.classList.contains("active");t.setAttribute("aria-expanded",n)}),document.querySelectorAll(".nav-link").forEach(n=>{n.addEventListener("click",()=>{t.classList.remove("active"),a.classList.remove("active"),t.setAttribute("aria-expanded","false")})}),document.addEventListener("click",n=>{!t.contains(n.target)&&!a.contains(n.target)&&(t.classList.remove("active"),a.classList.remove("active"),t.setAttribute("aria-expanded","false"))}),document.addEventListener("keydown",n=>{n.key==="Escape"&&a.classList.contains("active")&&(t.classList.remove("active"),a.classList.remove("active"),t.setAttribute("aria-expanded","false"))}),o())}function o(){const a=window.location.pathname.split("/").pop()||"index.html";document.querySelectorAll(".nav-link").forEach(s=>{s.classList.remove("active");const e=s.getAttribute("href");e.endsWith("/")||e.endsWith("index.html")?(a===""||a==="index.html")&&s.classList.add("active"):e.endsWith(a)&&s.classList.add("active")})}
