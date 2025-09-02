let cursorCircle = document.getElementById("cursorCircle")
const body = document.querySelector("body")
let mouseX = 0 + window.pageXOffset
let mouseY = 0 + window.pageYOffset


setInterval(() => {
    let aleatory1 = Math.random() * 20
    let aleatory2 = Math.random() * 20
    let aleatoryY = Math.random() * 2
    let aleatoryX = Math.random() * 2
    let triangle = document.createElement("div")
    triangle.classList.add("trianglePattern")
    body.insertAdjacentElement("beforeend", triangle)
    triangle.style.top = `${aleatoryY >= 1 ? mouseY - aleatory1 : mouseY + aleatory1}px`
    triangle.style.left = `${aleatoryX >= 1 ? mouseX - aleatory2 : mouseX + aleatory2}px`
    triangle.style.rotate = `${aleatory2}deg`
    setTimeout(() => {
        triangle.style.top = `${aleatoryY >= 1 ? mouseY - aleatory1 * 2 : mouseY + aleatory1 * 2}px`
        triangle.style.left = `${aleatoryX >= 1 ? mouseX - aleatory2 * 2 : mouseX + aleatory2 * 2}px`
        triangle.style.rotate = `${aleatory1 * 10}deg`
        setTimeout(() => {
            body.removeChild(triangle);
        }, 1500);
    }, 100);
}, 180);

window.addEventListener("mousemove", (event) => {
    cursorCircle.style.top = `${(event.clientY) - 10}px`
    cursorCircle.style.left = `${(event.clientX) - 14}px`
    mouseY = event.clientY + window.pageYOffset
    mouseX = event.clientX + window.pageXOffset
})

window.addEventListener("click", (event) => {
    document.getElementById("clickAudio").currentTime = 0;
    document.getElementById("clickAudio").play()
    let mouseX = event.clientX + window.pageXOffset;
    let mouseY = event.clientY + window.pageYOffset;
    cursorCircle.style.border = "2px solid var(--primary-red)"
    setTimeout(() => {
        cursorCircle.style.border = "2px solid #444342"
    }, 100);
    for (let i = 0; i < 8; i++) {
        let aleatoryX = Math.random() * 200 - 100;
        let aleatoryY = Math.random() * 200 - 100;
        let triangle = document.createElement("div");
        triangle.classList.add("triangleClick");
        triangle.style.top = `${mouseY}px`;
        triangle.style.left = `${mouseX}px`;
        body.insertAdjacentElement("beforeend", triangle);
        setTimeout(() => {
            triangle.style.top = `${mouseY + aleatoryY}px`;
            triangle.style.left = `${mouseX + aleatoryX}px`;
            triangle.style.transform = `rotate(${Math.random() * 360}deg)`;
            setTimeout(() => {
                body.removeChild(triangle);
            }, 1000);
        }, 1);
    }
})