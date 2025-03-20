const clickMe = document.querySelector("#click");
const container = document.querySelector(".container");

let hoverCount = 0; // Keeps track of hover attempts

function getRandomPosition() {
    const maxX = container.clientWidth - clickMe.offsetWidth;
    const maxY = container.clientHeight - clickMe.offsetHeight;

    return {
        x: Math.random() * maxX,
        y: Math.random() * maxY
    };
}

function moveButton() {
    const { x, y } = getRandomPosition();
    clickMe.style.left = `${x}px`;
    clickMe.style.top = `${y}px`;
}

clickMe.addEventListener("mouseover", () => {
    hoverCount++;
    if (hoverCount % 2 === 0) {
        moveButton();
    }
});

clickMe.addEventListener("click", () => {
    moveButton();
});
