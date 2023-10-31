// Function to load and render the stock table
function loadStockTable() {
    // Fetch stock data from Flask route
    fetch("/render-table")
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching stock data: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            // Convert JSON data into an array
            const dataArray = Object.values(data);

            // Create an HTML table and populate it with the array data
            const tableContainer = document.getElementById('balance-sheet');
            const table = document.createElement('table');

            // Add the class "main-balance-sheet-table" to the table
            table.classList.add('main-balance-sheet-table');

            var thead = table.createTHead();
            var tbody = table.createTBody();

            // Create table header
            var headerRow = thead.insertRow(0);
            for (var key in dataArray[0]) {
                var th = document.createElement("th");
                th.appendChild(document.createTextNode(key));
                headerRow.appendChild(th);
            }

            // Create table rows and cells
            dataArray.forEach(function (item, index) {
                var row = tbody.insertRow(index);
                for (var key in item) {
                    var cell = row.insertCell();
                    cell.appendChild(document.createTextNode(item[key]));
                }
            });

            // Append the table to the container
            tableContainer.appendChild(table);

            // Create a header element
            var header = document.createElement('h1');
            header.classList.add('main-balance-sheet-table-header');
            header.textContent = 'Balance Sheet (In Billions)';

            // Insert the header before the table
            tableContainer.insertBefore(header, table);

            // Hide the spinner once the table is loaded
            const spinner = document.getElementById('balance-sheet-loader');
            spinner.style.display = 'none';
        })
        .catch(error => {
            console.error('Error fetching stock data:', error);
        });
}

document.addEventListener('DOMContentLoaded', loadStockTable);
