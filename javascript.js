const GRID_WIDTH = 960; 

function createGrid(gridSize){
    const grid = document.querySelector("#grid")
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

createGrid(16)