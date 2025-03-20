// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    
    const table = document.getElementById("grid");
    const newRow = table.insertRow();

    // If there are no columns yet, update number of columns
    if (numCols === 0) {
        numCols = 1;
    }

    for (let i = 0; i < numCols; i++) { //for loop to add a new row cell in each column
        const newCell = newRow.insertCell(); 
        newCell.onclick = colorCell; // onclick
    }

    numRows++;
}

// Add a column
function addC() {
     const table = document.getElementById("grid");

    if (numRows === 0) {
        // if there are no rows yet create one row and one cell
        const newRow = table.insertRow();
        const newCell = newRow.insertCell();
        newCell.onclick = colorCell;
        numRows = 1;
    } else {
        // Add one column to each existing row
        for (let i = 0; i < numRows; i++) {
            const row = table.rows[i];
            const newCell = row.insertCell();
            newCell.onclick = colorCell;
        }
    }

    numCols++;
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
