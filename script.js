const grid = document.querySelector("#grid-container");

function set_size(num) {
    grid.style.cssText = `grid-template-columns: repeat(${String(num)}, 1fr); grid-template-rows: repeat(${String(num)}, 1fr);`;
}

function fill_grid(num) {
    for (let i=0; i < num * num; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel")
        grid.appendChild(pixel)
    }
}

set_size(20)
fill_grid(20)

let bg = "black";

const red = document.querySelector("#aff0000");
const orange = document.querySelector("#affa500");
const blue = document.querySelector("#a0000ff");
const cyan = document.querySelector("#a00ffff");
const green = document.querySelector("#a008000");
const yellow = document.querySelector("#affff00");
const purple = document.querySelector("#a6027b4");
const light_green = document.querySelector("a8ce65b");
const black = document.querySelector("a000000")
const white = document.querySelector("affffff")

colors = document.querySelectorAll(".color-button");
colors.forEach((color) => {
    color.addEventListener("click", function() {
        const button_color = color.getAttribute("id");
        bg = "#" + button_color.slice(1, -1) + button_color.slice(-1);
        return bg
    })
})

