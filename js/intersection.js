"use strict";

{
    const item = document.querySelectorAll(".target");
    const options = { threshold: 0.2 };

    const observer = new IntersectionObserver(callBack, options);

    document.addEventListener("DOMContentLoaded", () => {
        registObserver();
    });

    function registObserver() {
        item.forEach((element) => {
                observer.observe(element);
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
