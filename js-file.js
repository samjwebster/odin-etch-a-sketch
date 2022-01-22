/* js file for Samuel Webster's etch a sketch project */

const grid = document.getElementById("grid");

var size = 16;
var setting = 0;

function generateGrid(size) {
    let i, j;

    for(i = 1; i <= size; i++) {
        for(j = 1; j <= size; j++) {
            let newBlock = document.createElement("div");
            let id = 'block_'+i.toString()+'_'+j.toString();
            
            newBlock.toggleAttribute('id', id);
            newBlock.classList.add("block");
            newBlock.style.gridRow = i;
            newBlock.style.gridColumn = j;
            
            newBlock.onmouseenter = enterBlock(id);

            grid.appendChild(newBlock);
        } // end of j
    } // end of i
}

function enterBlock(id) {
    console.log(document.getElementById(id));
}

generateGrid(size);