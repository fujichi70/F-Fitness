"use strict";

{
    window.addEventListener("scroll", () => {
        const elem = document.querySelector(".pc-menu--parts");
        const scrollCount = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollPos = document.documentElement.clientHeight + scrollCount;
        if (scrollPos >= 1400) {
            elem.classList.add("fixed");
        } else {
            elem.classList.remove("fixed");
        }
    });
}
