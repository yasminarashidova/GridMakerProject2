// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    
    const table = document.getElementById("grid");
    const newRow = table.insertRow();

    for (let i = 0; i < numCols; i++) {
        const newCell = newRow.insertCell();
        newCell.onclick = colorCell;
    }

    // If no columns exist yet, start with 1 column
    if (numCols === 0) {
        const newCell = newRow.insertCell();
        newCell.onclick = colorCell;
        numCols = 1;
    }

    numRows++;
}

// Add a column
function addC() {
      const table = document.getElementById("grid");

    // If there are no rows, create one row with one cell
    if (numRows === 0) {
        const newRow = table.insertRow();
        const newCell = newRow.insertCell();
        newCell.onclick = colorCell;
        numRows = 1;
    } else {
        // Add one new cell to each existing row
        for (let i = 0; i < table.rows.length; i++) {
            const row = table.rows[i];
            const newCell = row.insertCell();
            newCell.onclick = colorCell;
        }
    }

    numCols++;
}

// Remove a row
function removeR() {
    const table = document.getElementById("grid");

    if (numRows > 0) {
        table.deleteRow(numRows - 1); 
        numRows--;

        // If there are no more rows, reset column count
        if (numRows === 0) {
            numCols = 0;
        }
    }
}

// Remove a column
function removeC() {
    const table = document.getElementById("grid");

    if (numCols > 0) {
        for (let i = 0; i < numRows; i++) {
            const row = table.rows[i];
            row.deleteCell(numCols - 1); 
        }

        numCols--;

        // If all columns are gone, remove all rows too
        if (numCols === 0) {
            while (table.rows.length > 0) {
                table.deleteRow(0);
            }
            numRows = 0;
        }
    }
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
