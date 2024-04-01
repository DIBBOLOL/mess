document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var dateInput = document.getElementById('dateInput').value;
    var nameInput = document.getElementById('nameInput').value;

    // Create a new table row
    var newRow = document.createElement('tr');

    // Create table data for date and name
    var dateCell = document.createElement('td');
    dateCell.textContent = dateInput;
    var nameCell = document.createElement('td');
    nameCell.textContent = nameInput;

    // Append table data to the new row
    newRow.appendChild(dateCell);
    newRow.appendChild(nameCell);

    // Append the new row to the table body
    document.querySelector('.grocery-table tbody').appendChild(newRow);

    // Clear the input fields
    document.getElementById('dateInput').value = '';
    document.getElementById('nameInput').value = '';
});
