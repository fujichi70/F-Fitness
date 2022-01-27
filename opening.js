'use strict';

{

    const opening = document.querySelector('.opening');

    const chars = newMe.textContent.trim().split("");
    const charsSplit = chars.map((val) => {
      if (val === " ") {
        val = val.replace(" ", "&nbsp;");
        return `<span>${val}</span>`;
      } else {
        return `<span>${val}</span>`;
      }
    });
  
    const charsJoin = charsSplit.join("");
    
    newMe.innerHTML = charsJoin;

    setTimeout(() => {
        opening.classList.add('start');

        setTimeout(() => {
            opening.classList.remove('start');
        }, 2000);
        setTimeout(() => {
            opening.classList.add('hide');
        }, 3500);
    }, 10);

    function charsAnimation() {
        Array.from(newMe.children).forEach((e, index) => {
          setTimeout(() => {
            e.classList.toggle("move");
          }, 100 * index);
        });
      }
    

}