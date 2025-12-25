const bin = document.querySelector('#btn');
const tip = document.querySelector('#tip');

bin.addEventListener('click', () => {
    tip.textContent = 'click click JS';
    tip.style.color = 'red';
});