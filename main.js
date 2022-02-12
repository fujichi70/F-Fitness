"use strict";

{
    const hamburger = document.querySelector(".hamburger");
    const spMenu = document.querySelector(".sp-menu");

    function getEventType() {
        const isTouchCapable = navigator.userAgent.indexOf("iPhone") > 0 || (navigator.userAgent.indexOf("Android") > 0 && navigator.userAgent.indexOf("Mobile") > 0) || navigator.userAgent.indexOf("iPad") > 0 || navigator.userAgent.indexOf("Android") > 0;

        return isTouchCapable ? "touchstart" : "click";
    }

    function menuOpen() {
        spMenu.classList.toggle('menu-open');
    }

    hamburger.addEventListener("click", function() {
        menuOpen();
    });
}
