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
    let userInput = prompt("How many squares per side?");
}

const resetButton = document.querySelector(".resetButton");

resetButton.addEventListener("click", resetGrid)

