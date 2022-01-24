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

            grid.appendChild(newBlock);
        } // end of j
    } // end of i

    document.querySelectorAll('.block').forEach( item => {
        /* This works dont delete

        switch(click_field.checked) {
            case (true): {
                item.addEventListener('mousedown', event => {
                    if(item.style.backgroundColor != color) {
                        item.style.backgroundColor = color;
                    } else if (item.style.backgroundColor == color) {
                        item.style.backgroundColor = white;
                    }
        
                    if(item.classList.contains('gridlines')) {
                        item.classList.remove('gridlines');
                    }
                }, false);
                break;
            }
            case (false): {
                
                item.addEventListener('mouseenter', event => {

                    item.style.backgroundColor = color;
        
                    if(item.classList.contains('gridlines')) {
                        item.classList.remove('gridlines');
                    }
                }, false);
            }
        }*/


        // HOVERING
        item.addEventListener('mouseenter', event => {
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

                //white to black
                if(item.style.backgroundColor == white) {
                    item.style.backgroundColor = color;

                    if(gridlines_field.checked == true) {
                        console.log('fuck gridlines!');
                        item.classList.remove('gridlines');
                    }
                //black to white
                } else if (item.style.backgroundColor == color) {
                    item.style.backgroundColor = white;

                    if(gridlines_field.checked == true) {
                        console.log('adding gridlines!');
                        item.classList.add('gridlines');
                    }
                }

                if(item.classList.contains('gridlines')) {
                    item.classList.remove('gridlines');
                }
            }
        }, false);
    
    });
}

function clearFunc() {
    /*
    document.querySelectorAll('.block').forEach( item => {
        item.classList.remove('active');
    });
    */


    document.querySelectorAll('.block').forEach( item => {
        item.style.backgroundColor = white;
    });


    if(gridlines_field.checked == true) {
        document.querySelectorAll('.block').forEach( item => {
            item.classList.add('gridlines');
        });
    }
}

function init() {
    clear_btn.onclick = clearFunc;


    size_field.addEventListener('input', function () {
        generateGrid(size_field.value)
    });

    /*
    click_field.addEventListener('input', function () {
        generateGrid(size_field.value);
    });
    */


    gridlines_field.addEventListener('input', function () {
        document.querySelectorAll('.block').forEach( item => {
            switch(gridlines_field.checked) {
                case (true): {
                    if(item.style.backgroundColor != color) {
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

init();