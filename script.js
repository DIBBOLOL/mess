document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var dateInput = document.getElementById('dateInput').value;
    var nameInput = document.getElementById('nameInput').value;

    // Split the input string by commas
    var dateNumbers = dateInput.split(',');

    // Process each number separately
    dateNumbers.forEach(function(dateNumber) {
        // Trim any leading or trailing whitespace
        dateNumber = dateNumber.trim();

        // Convert the number to a valid date (e.g., "1" becomes "April 1")
        var formattedDate = "April " + dateNumber;

        // Find the table cell corresponding to the input date
        var tableCells = document.querySelectorAll('.grocery-table tbody td');
        for (var i = 0; i < tableCells.length; i++) {
            if (tableCells[i].textContent === formattedDate) {
                // Update the content of the table cell with the name input
                tableCells[i].nextElementSibling.textContent = nameInput;
                break;
            }
        }
    });

    // Clear the input fields
    document.getElementById('dateInput').value = '';
    document.getElementById('nameInput').value = '';
});
