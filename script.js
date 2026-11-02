let text =document.getElementById('text');
let palmLeft = document.getElementById('palm-left');
let palmRight = document.getElementById('palm-right');
let man1 = document.getElementById('man1');




window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 3.5 + 'px';
    palmLeft.style.left = value * -1.5 + 'px';
    palmRight.style.left = value * 1.5 + 'px';
    man1.style.left = value * -0.5 + 'px';
});