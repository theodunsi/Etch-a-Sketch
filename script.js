const gridContainer = document.querySelector(".gridContainer");

for(let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
 
    square.addEventListener ("mouseover", () => {
    square.style.backgroundColor = "white";
    });

    square.addEventListener ("mouseout", () => {
    square.style.backgroundColor = "black";
    });
}

function resetGrid() {
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
        square.style.width = (640 / userInput) + 'px';
        square.style.height = (640 / userInput) + 'px';
        square.style.backgroundColor = "black";
        gridContainer.appendChild(square);

        square.addEventListener("mouseover", () => {
        const r = Math.floor(Math.random() * 256); 
        const g = Math.floor(Math.random() * 256); 
        const b = Math.floor(Math.random() * 256); 
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });

        square.addEventListener ("mouseout", () => {
        square.style.backgroundColor = "black";
        });
    }
    

    

}

const resetButton = document.querySelector(".resetButton");

resetButton.addEventListener("click", resetGrid)

