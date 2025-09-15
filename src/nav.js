// nav.js
document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("./nav.html");   // nav ophalen
    const navHtml = await response.text();
    document.getElementById("nav-placeholder").innerHTML = navHtml;
});
