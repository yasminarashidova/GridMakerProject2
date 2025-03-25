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

    // If there are no rows, create one first
    if (numRows === 0) {
        addR(); // This will also initialize numCols
        return;
    }

    for (let i = 0; i < numRows; i++) {
        const row = table.rows[i];
        const newCell = row.insertCell(); // insertCell()
        newCell.onclick = colorCell; // onclick
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

// Color cell with selected color
function colorCell(event) {
    if (colorSelected) {
        event.target.style.backgroundColor = colorSelected;
    }
}

// Fill all uncolored cells
function fillU() {
    const cells = document.getElementsByTagName("td");
    for (let cell of cells) {
        if (!cell.style.backgroundColor) {
            cell.style.backgroundColor = colorSelected;
        }
    }
}

// Clear all cells
function clearAll() {
    const cells = document.getElementsByTagName("td");
    for (let cell of cells) {
        cell.style.backgroundColor = "";
    }
}

