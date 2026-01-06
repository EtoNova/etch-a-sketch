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
            handleMouseEnter(square)
        });

        grid.appendChild(square); 
    }
}

function handleMouseEnter(square) {
  square.style.backgroundColor = "#6bbdff";
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