const typeCake = document.querySelector('#type').options;
const buiscitCake = document.querySelector('.buiscit');
const buiscitCheesecakeCake = document.querySelector('.buiscit-cheesecake');
const mousseCake = document.querySelector('.mousse');


if (options[1]) {
    buiscitCake.classList.add('hidden');
    buiscitCheesecakeCake.classList.remove('hidden');
} else if (options[2]) {
    buiscitCheesecakeCake.classList.add('hidden');
    mousseCake.classList.remove('hidden');
}