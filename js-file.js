/* js file for Samuel Webster's etch a sketch project */

const grid = document.getElementById("grid");
const clear_btn = document.getElementById("clear");

const size_field = document.getElementById("size");

var setting = 0;

var boxes = [];

function generateGrid(size) {

    if (size > 100) {
        size = 100;
        size_field.value = 100;
    } else if (size < 1) {
        size = 1;
        size_field.value = 1;
    }

    // if the grid is already set up, empty it
    grid.innerHTML = '';

    let i, j;

    for(i = 1; i <= size; i++) {
        for(j = 1; j <= size; j++) {
            let newBlock = document.createElement("div");

            let id = 'block_'+i.toString()+'_'+j.toString();

            newBlock.toggleAttribute('id', id);

            newBlock.classList.add("block");
            newBlock.style.gridRow = i;
            newBlock.style.gridColumn = j;

            boxes.push(newBlock);

            grid.appendChild(newBlock);
        } // end of j
    } // end of i

    document.querySelectorAll('.block').forEach( item => {
        item.addEventListener('mouseenter', event => {
            item.style.backgroundColor = "black";
        }, false);
    });
}

function clearFunc() {
    document.querySelectorAll('.block').forEach( item => {
        item.style.backgroundColor = "white";
    });
}

function init() {
    clear_btn.onclick = clearFunc;

    size_field.addEventListener('input', function () {
        generateGrid(size_field.value)
    });

    generateGrid(16);
}

init();