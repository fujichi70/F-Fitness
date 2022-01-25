"use strict";

{
  const item = document.querySelectorAll(".item");
  const content = document.querySelectorAll(".content");
  const instructor = document.querySelectorAll('.js-instructor');

  const options = {
    threshold: 0.2,
  };

  const appearObserver = new IntersectionObserver(appearCallback, options);
  const titleObserver = new IntersectionObserver(titleCallback, options);
  const instructorObserver = new IntersectionObserver(instructorCallback, options);

  for (let i = 0; i < item.length; i++) {
      appearObserver.observe(item[i]);
    }
    
    function appearCallback(entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }

  
  for (let i = 0; i < content.length; i++) {
    titleObserver.observe(content[i]);
  }

  function titleCallback(entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("title-open");
      observer.unobserve(entry.target);
    });
  }

  for (let i = 0; i < instructor.length; i++) {
    instructorObserver.observe(instructor[i]);
  }

  function instructorCallback(entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("advent");
      observer.unobserve(entry.target);
    });
  }
}
