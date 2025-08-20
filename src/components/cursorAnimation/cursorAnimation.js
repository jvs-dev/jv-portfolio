let cursorCircle = document.getElementById("cursorCircle")
const body = document.querySelector("body")
let mouseX = 0 + window.pageXOffset
let mouseY = 0 + window.pageYOffset


setInterval(() => {
    let aleatory1 = Math.random() * 20
    let aleatory2 = Math.random() * 20
    let triangle = document.createElement("div")
    triangle.classList.add("trianglePattern")
    body.insertAdjacentElement("beforeend", triangle)
    triangle.style.top = `${mouseY - aleatory1}px`
    triangle.style.left = `${mouseX - aleatory2}px`
    triangle.style.rotate = `${aleatory2}deg`
    setTimeout(() => {
        triangle.style.top = `${mouseY - aleatory1 * 2}px`
        triangle.style.left = `${mouseX - aleatory2 * 2}px`
        triangle.style.rotate = `${aleatory1 * 10}deg`
        setTimeout(() => {
            body.removeChild(triangle);
        }, 1500);
    }, 100);
}, 100);

window.addEventListener("mousemove", (event) => {
    cursorCircle.style.top = `${(event.clientY + window.pageYOffset) - 10}px`
    cursorCircle.style.left = `${(event.clientX + window.pageXOffset) - 14}px`
    mouseY = event.clientY + window.pageYOffset
    mouseX = event.clientX + window.pageXOffset
})