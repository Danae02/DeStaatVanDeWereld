(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{c()});function c(){const n=document.getElementById("nav-placeholder");if(!n){console.error("nav-placeholder element niet gevonden");return}const t=window.location.hostname==="danae02.github.io"||window.location.pathname.includes("/DeStaatVanDeWereld/")?"/DeStaatVanDeWereld":".";n.innerHTML=`
        <nav class="navbar" role="navigation" aria-label="Hoofd navigatie">
            <div class="nav-container">
                <ul class="nav-menu" id="nav-menu">
                    <li class="nav-item"><a href="${t}/" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="${t}/about.html" class="nav-link">Over Ons</a></li>
                    <li class="nav-item"><a href="${t}/dierenwelzijnenrecht.html" class="nav-link">Dierenwelzijn & dierenrecht</a></li>
                    <li class="nav-item"><a href="${t}/klimaatenbiodiversiteit.html" class="nav-link">Klimaat & biodiversiteit</a></li>
                    <li class="nav-item"><a href="${t}/volksgezondheid.html" class="nav-link">Volksgezondheid</a></li>
                    <li class="nav-item"><a href="${t}/cultuurenmaatschappij.html" class="nav-link">Cultuur & Maatschappij</a></li>
                </ul>

                <button class="hamburger" id="hamburger" aria-label="Open navigatie" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    `,l()}function l(){const n=document.getElementById("hamburger"),a=document.getElementById("nav-menu");!n||!a||(n.addEventListener("click",()=>{n.classList.toggle("active"),a.classList.toggle("active");const t=a.classList.contains("active");n.setAttribute("aria-expanded",t)}),document.querySelectorAll(".nav-link").forEach(t=>{t.addEventListener("click",()=>{n.classList.remove("active"),a.classList.remove("active"),n.setAttribute("aria-expanded","false")})}),document.addEventListener("click",t=>{!n.contains(t.target)&&!a.contains(t.target)&&(n.classList.remove("active"),a.classList.remove("active"),n.setAttribute("aria-expanded","false"))}),document.addEventListener("keydown",t=>{t.key==="Escape"&&a.classList.contains("active")&&(n.classList.remove("active"),a.classList.remove("active"),n.setAttribute("aria-expanded","false"))}),o())}function o(){const a=window.location.pathname.split("/").pop()||"index.html";document.querySelectorAll(".nav-link").forEach(s=>{s.classList.remove("active");const e=s.getAttribute("href");e.endsWith("/")||e.endsWith("index.html")?(a===""||a==="index.html")&&s.classList.add("active"):e.endsWith(a)&&s.classList.add("active")})}
