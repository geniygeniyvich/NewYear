const countdownDate = new Date("January 1, 2026 00:00:00").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "З НОВИМ РОКОМ!";
    }
}, 1000);

// Создание звезд
function createStars(numStars) {
    const container = document.getElementById('star-container');
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 5 + 5; // Размер звезды
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}vw`; // Позиция по горизонтали
        star.style.animationDuration = `${Math.random() * 2 + 3}s`; // Длительность анимации
        star.style.animationDelay = `${Math.random() * 5}s`; // Задержка перед началом анимации
        container.appendChild(star);
    }
}

createStars(100); // Создать 100 звезд

function playTrack(track) {
    const audio = document.getElementById('audio');
    audio.src = track;
    audio.play();
}
