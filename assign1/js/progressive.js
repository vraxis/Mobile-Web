(function() {

/**
* Hide alert based on session storage
*/
if(typeof window.sessionStorage != "undefined") {

if(window.sessionStorage.getItem("seenPromo")) {
window.document.getElementById("promo").innerHtml = "";
}

window.sessionStorage.setItem("seenPromo", false);
}


})()