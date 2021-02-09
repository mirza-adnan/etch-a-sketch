const grid = document.querySelector("#grid-container");
const red = document.querySelector("#aff0000");
const orange = document.querySelector("#affa500");
const blue = document.querySelector("#a0000ff");
const cyan = document.querySelector("#a00ffff");
const green = document.querySelector("#a008000");
const yellow = document.querySelector("#affff00");
const purple = document.querySelector("#a6027b4");
const light_green = document.querySelector("a8ce65b");
const black = document.querySelector("a000000");
const white = document.querySelector("affffff");
const reset = document.querySelector("#reset");

// functions for changing and filling up the grid with divs
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

// setting default grid size
set_size(20)
fill_grid(20)

let bg = "black";

// color changing functionality 
colors = document.querySelectorAll(".color-button");
colors.forEach((color) => {
    color.addEventListener("click", function() {
        const button_color = color.getAttribute("id");
        bg = "#" + button_color.slice(1, -1) + button_color.slice(-1);
        return bg
    })
})

// drawing functionality
change_color = function(){
    this.style.cssText = `background-color: ${bg};`
}

let clicked = false;

grid.addEventListener("click", function() {
    if (clicked) {
        clicked = false;
    } else if (!clicked) {
        clicked = true;
    }
    if (clicked) {
        pixel_array = document.querySelectorAll(".pixel");
        pixel_array.forEach((pixel) => {
            pixel.addEventListener("mouseover", change_color)
    })
    } else if (!clicked) {
        pixel_array = document.querySelectorAll(".pixel");
        pixel_array.forEach((pixel) => {
            pixel.removeEventListener("mouseover", change_color);
    })
    }
})


// reset function
reset.addEventListener("click", function(){
    pixel_array = document.querySelectorAll(".pixel");
    pixel_array.forEach((pixel) => {
        pixel.style.backgroundColor = "white";
    })
    clicked = false;
})

// to-do -> change grid size
// to-do -> add rainbow colors
