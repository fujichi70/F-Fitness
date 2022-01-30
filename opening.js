'use strict';

{
    const opening = document.querySelector('.opening');
    const body = document.querySelector('body');


    setTimeout(() => {
        opening.classList.add('start');

        setTimeout(() => {
            opening.classList.remove('start');
        }, 2000);
        setTimeout(() => {
            opening.classList.add('hide');
        }, 3500);
    }, 9);

}