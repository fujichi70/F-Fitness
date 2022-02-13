"use strict";

{
    const item = document.querySelectorAll(".item");
    const content = document.querySelectorAll(".content");
    const instructor = document.querySelectorAll(".js-instructor");
    const info = document.getElementById('info');
    const options = {
        threshold: 0.2,
    };
    
    const appearObserver = new IntersectionObserver((entries, observer) => {
        observerEvent(entries, observer, "appear");
    }, options);
    
    const titleObserver = new IntersectionObserver((entries, observer) => {
        observerEvent(entries, observer, "title-open");
    }, options);
    
    const instructorObserver = new IntersectionObserver((entries, observer) => {
        observerEvent(entries, observer, "advent");
    }, options);
    
    document.addEventListener("DOMContentLoaded", () => {
        registObserver(item, appearObserver);
        registObserver(content, titleObserver);
        registObserver(instructor, instructorObserver);
    });

    function registObserver(targets, io) {
        for (let i = 0; i < targets.length; i++) {
            io.observe(targets[i]);
        }
    }

    function observerEvent(entries, observer, addClass) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add(addClass);
            observer.unobserve(entry.target);
        });
    }
}