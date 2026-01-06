const GRID_WIDTH = 900; 

function createGrid(gridSize){
    const grid = document.querySelector("#grid")
    grid.innerHTML = ""; // Clears grid

    const numSquare = gridSize * gridSize; 
    const squareSize = GRID_WIDTH/gridSize; 

    for (let i = 0; i < numSquare; i++) {
        const square = document.createElement("div"); 
        square.setAttribute("style", "height: " + squareSize + "px; width: " + squareSize + "px"); 
        square.classList.toggle("square");

        square.addEventListener("mouseenter", (e) => {
            changeColour(square)
        });

        grid.appendChild(square); 
    }
}

function changeColour(square) {
    if(square.style.backgroundColor){
        // Progressive darkening effect where each mouse hover darkens the square by 10%
        if (square.style.opacity !== 1)
            square.style.opacity = parseFloat(square.style.opacity) + 0.1; 
        return; 
    }
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    square.style.backgroundColor = randomColor;
    square.style.opacity = 0.1; 
}

// Create grid based on user input
const button = document.querySelector("button"); 
button.addEventListener("click", () => {
    const gridSize = parseInt(document.querySelector("#gridSize").value);
    if (gridSize >= 16 && gridSize <= 100) {
        createGrid(gridSize);
    } else {
        alert("Please enter a number between 16 and 100.");
    }
})

createGrid(16) // Initial grid size