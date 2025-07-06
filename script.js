const gridContainer = document.querySelector(".gridContainer");

for(let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
 
    square.addEventListener("mouseover", () => {
        const r = Math.floor(Math.random() * 256); 
        const g = Math.floor(Math.random() * 256); 
        const b = Math.floor(Math.random() * 256); 
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
}

const newSize = document.querySelector(".newSize");
const resetButton = document.querySelector(".resetButton");

function newGrid() {
    //Prompt user for a valid number
    let userInput;
    do {
    userInput = prompt("How many squares per side?");
    }
    while (userInput < 10 || userInput > 100 || isNaN(userInput));

    //Delete old grid
    gridContainer.innerHTML = '';
    
    //New grid using userInput
    for(let i = 0; i < (userInput ** 2); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = (520 / userInput) + 'px';
        square.style.height = (520 / userInput) + 'px';
        square.style.backgroundColor = "black";
        gridContainer.appendChild(square);

        square.addEventListener("mouseover", () => {
        const r = Math.floor(Math.random() * 256); 
        const g = Math.floor(Math.random() * 256); 
        const b = Math.floor(Math.random() * 256); 
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
    }
}



function resetGrid() {
    const squares = document.querySelectorAll('.square');
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = "black";
    }
}

resetButton.addEventListener("click", resetGrid);
newSize.addEventListener("click", newGrid);

