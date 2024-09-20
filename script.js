const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

yesButton.addEventListener('click', function() {
    alert(`Let's have sex~`);
});


noButton.addEventListener('mouseover', function() {
    const windowWidth = window.innerWidth - noButton.offsetWidth;
    const windowHeight = window.innerHeight - noButton.offsetHeight;

    const newLeft = Math.random() * windowWidth;
    const newTop = Math.random() * windowHeight;

    noButton.style.left = `${newLeft}px`;
    noButton.style.top = `${newTop}px`;
});
