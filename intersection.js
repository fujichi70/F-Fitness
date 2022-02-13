"use strict";

{
    const item = document.querySelectorAll(".item");
    const content = document.querySelectorAll(".content");
    const instructor = document.querySelectorAll(".js-instructor");
    const info = document.getElementById("info");
    const elements = [item, content, instructor, info];

    const options = {
        threshold: 0.2,
    };

    const observer = new IntersectionObserver(callBack, options);
    
    document.addEventListener("DOMContentLoaded", () => {
        registObserver();
    });
    
    function registObserver() {
        elements.forEach((element) => {
            for (let i = 0; i < element.length; i++) {
                observer.observe(element[i]);
            }
        });
    }

    function callBack(entries, observer) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
        });
    }
}
