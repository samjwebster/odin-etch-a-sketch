/* js file for Samuel Webster's etch a sketch project */

const grid = document.getElementById("grid");
const clear_btn = document.getElementById("clear");

const size_field = document.getElementById("size");

const click_field = document.getElementById("click");
const rainbow_field = document.getElementById("rainbow");
const gridlines_field = document.getElementById("gridlines");





var setting = 0;

var color = 'rgb(0, 0, 0)';
const white = 'rgb(255, 255, 255)';

/*==============================================================
                            FUNCTIONS
==============================================================*/

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

            // creating each individual box

            let newBlock = document.createElement("div");

            let id = 'block_'+i.toString()+'_'+j.toString();

            newBlock.toggleAttribute('id', id);

            newBlock.classList.add("block");
            newBlock.style.gridRow = i;
            newBlock.style.gridColumn = j;
            newBlock.style.backgroundColor = white;

            if(gridlines_field.checked == true) {
                newBlock.classList.add('gridlines');
            }

            grid.appendChild(newBlock);
        } // end of j
    } // end of i

    document.querySelectorAll('.block').forEach( item => {

        // HOVERING
        item.addEventListener('mouseenter', event => {
            color = randomizeColor();

            if(click_field.checked == false) {
                item.style.backgroundColor = color;

                if(item.classList.contains('gridlines')) {
                    item.classList.remove('gridlines');
                }
            }
        }, false);

        // CLICKING
        item.addEventListener('mousedown', event => {
            if(click_field.checked == true) {
                color = randomizeColor();

                //white to color
                if(item.style.backgroundColor == white) {
                    item.style.backgroundColor = color;

                    if(gridlines_field.checked == true) {
                        item.classList.remove('gridlines');
                    }
                //color to white
                } else if (item.style.backgroundColor != white) {
                    item.style.backgroundColor = white;

                    if(gridlines_field.checked == true) {
                        item.classList.add('gridlines');
                    }
                }
            }
        }, false);
    
    });
}

function clearFunc() {
    document.querySelectorAll('.block').forEach( item => {
        item.style.backgroundColor = white;
    });

    if(gridlines_field.checked == true) {
        document.querySelectorAll('.block').forEach( item => {
            item.classList.add('gridlines');
        });
    }
}

function randomizeColor() {
    if(rainbow_field.checked == true) {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }
    else return color;
}

function init() {
    clear_btn.onclick = clearFunc;

    size_field.addEventListener('input', function () {
        generateGrid(size_field.value)
    });

    gridlines_field.addEventListener('input', function () {
        document.querySelectorAll('.block').forEach( item => {
            switch(gridlines_field.checked) {
                case (true): {
                    if(item.style.backgroundColor == white) {
                        item.classList.add('gridlines');
                    }
                    break;
                }
                case (false): {
                    item.classList.remove('gridlines');
                    break;
                }
            }
        });
    });

    generateGrid(16);
}

// initialize everything
init();