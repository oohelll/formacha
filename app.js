const wrapper = document.querySelector(".wrapper");
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector('no');

yesBtn.addEventListener("click", () => {
    question.innerHTML = 'Aaaaa, I like you too';
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener("mouseover", () => {
    const noReact = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noReact.width;
    const maxY = window.innerHeight - noReact.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
})