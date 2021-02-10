const grid = document.querySelector("#grid-container");
const input = document.querySelector("#grid-size-input");
const apply = document.querySelector("#apply");

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
const rainbow = document.querySelector("#rainbow");
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
let rainbow_clicked = false;

// color changing functionality 
colors = document.querySelectorAll(".color-button");
colors.forEach((color) => {
    color.addEventListener("click", function() {
        const button_color = color.getAttribute("id");
        bg = "#" + button_color.slice(1, -1) + button_color.slice(-1);
        rainbow_clicked = false;
    })
})

// drawing functionality
change_color = function(){
    if (rainbow_clicked) {
        const red = String(Math.floor(Math.random() * 256));
        const green = String(Math.floor(Math.random() * 256));
        const blue = String(Math.floor(Math.random() * 256));
        bg = `rgb(${(red)}, ${green}, ${blue})`;
        this.style.cssText = `background-color: ${bg};`;
    } else {
        this.style.cssText = `background-color: ${bg};`;
    }  
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
        pixel_array.forEach((pixel) => {
            pixel.addEventListener("click", change_color)
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

// function to remove pixels before resizing
function remove_pixels() {
    pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        grid.removeChild(pixel)
    })
}

// applying grid resize
apply.addEventListener("click", function() {
    const size = Number(input.value);
    if (input.value != "") {
        if (size < 1 || size > 100) {
            alert("Please provide a value within the range 1-100.")
        } else {
            remove_pixels()
            set_size(size)
            fill_grid(size)
            input.value = "";
        }
    }
})

// rainbow color
rainbow.addEventListener("click", function() {
    rainbow_clicked = true;
})
