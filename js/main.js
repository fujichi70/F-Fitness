"use strict";

{
    const hamburger = document.querySelector(".hamburger");
    const spMenu = document.querySelector(".sp-menu");
    const lists = document.querySelectorAll(".mobile-menu--item");

    function menuOpen() {
        spMenu.classList.toggle('menu-open');
    }
    
    hamburger.addEventListener("click", () => {
        menuOpen();
        lists.forEach(function (el) {
            el.addEventListener("click", () => {
                spMenu.classList.remove("menu-open");
            })
        });
    });
    
}
