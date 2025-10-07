(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();document.addEventListener("DOMContentLoaded",()=>{r()});function r(){const n=document.getElementById("nav-placeholder");if(!n){console.error("nav-placeholder element niet gevonden");return}const a=window.location.hostname.includes("github.io")||window.location.pathname.includes("/DeStaatVanDeWereld/");let e;if(a)e="/DeStaatVanDeWereld";else{const t=window.location.pathname.split("/").length-2;e=t>0?"../".repeat(t)+".":"."}console.log("BasePath:",e,"Current path:",window.location.pathname),n.innerHTML=`
        <nav class="navbar" role="navigation" aria-label="Hoofd navigatie">
            <div class="nav-container">
                <ul class="nav-menu" id="nav-menu">
                    <li class="nav-item"><a href="${e}/" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="${e}/about.html" class="nav-link">Over Ons</a></li>
                    <li class="nav-item"><a href="${e}/dierenwelzijnenrecht.html" class="nav-link">Dierenwelzijn & dierenrecht</a></li>
                    <li class="nav-item"><a href="${e}/klimaatenbiodiversiteit.html" class="nav-link">Klimaat & biodiversiteit</a></li>
                    <li class="nav-item"><a href="${e}/volksgezondheid.html" class="nav-link">Volksgezondheid</a></li>
                    <li class="nav-item"><a href="${e}/cultuurenmaatschappij.html" class="nav-link">Cultuur & Maatschappij</a></li>
                </ul>

                <button class="hamburger" id="hamburger" aria-label="Open navigatie" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    `,c()}function c(){const n=document.getElementById("hamburger"),a=document.getElementById("nav-menu");!n||!a||(n.addEventListener("click",()=>{n.classList.toggle("active"),a.classList.toggle("active");const e=a.classList.contains("active");n.setAttribute("aria-expanded",e)}),document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",()=>{n.classList.remove("active"),a.classList.remove("active"),n.setAttribute("aria-expanded","false")})}),document.addEventListener("click",e=>{!n.contains(e.target)&&!a.contains(e.target)&&(n.classList.remove("active"),a.classList.remove("active"),n.setAttribute("aria-expanded","false"))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&a.classList.contains("active")&&(n.classList.remove("active"),a.classList.remove("active"),n.setAttribute("aria-expanded","false"))}),o())}function o(){const a=window.location.pathname.split("/").pop()||"index.html";document.querySelectorAll(".nav-link").forEach(s=>{s.classList.remove("active");const t=s.getAttribute("href"),i=t.split("/").pop();((t.endsWith("/")||i==="index.html"||i==="")&&(a===""||a==="index.html")||i===a)&&s.classList.add("active")})}
