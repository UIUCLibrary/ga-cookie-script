
const cookies = document.cookie.split("; ");
let gaCookies = [];

const scriptTag = document.currentScript;
const urlParams = new URLSearchParams(scriptTag.src.split("?")[1]);
const maxCookies = Math.max(parseInt(urlParams.get("max")) || 30, 30);


cookies.forEach(cookie => {
    if (cookie.startsWith("_ga_")) {
        gaCookies.push(cookie.split("=")[0]);
    }
});

if (gaCookies.length > maxCookies) {
    gaCookies.forEach(cookieName => {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.illinois.edu`;
    });
}
