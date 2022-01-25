'use strict';

{

    const opening = document.querySelector('.opening');

    setTimeout(() => {
        opening.classList.add('start');

        setTimeout(() => {
            opening.classList.remove('start');
        }, 2000);
        setTimeout(() => {
            opening.classList.add('hide');
        }, 3500);
    }, 10);

}