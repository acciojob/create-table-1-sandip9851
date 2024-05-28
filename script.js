function insert_Row() {
    let table = document.querySelector("#sampleTable");
    let row = document.createElement('tr'); // create row node
    let col1 = document.createElement('td'); // create column node
    let col2 = document.createElement('td'); // create second column node
    col1.innerHTML = "New Cell1"; // append first column data
    col2.innerHTML = "New Cell2"; // append second column data
    row.appendChild(col1); // append first column to row
    row.appendChild(col2); // append second column to row
    table.tBodies[0].prepend(row); // append row to the tbody of the table
}