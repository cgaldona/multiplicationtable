function drawTable() {
  const rows = document.getElementById('rows').value;
  const columns = document.getElementById('columns').value;
  const tableContainer = document.getElementById('table-container');

  let tableHTML = '<table>';
  
  for (let i = 0; i <= rows; i++) {
    tableHTML += '<tr>';
    for (let j = 0; j <= columns; j++) {
      if (i == 0 && j == 0) {
        tableHTML += '<th>*</th>';
      } else if (i == 0) {
        tableHTML += '<th>' + j + '</th>';
      } else if (j == 0) {
        tableHTML += '<th>' + i + '</th>';
      } else {
        tableHTML += '<td>' + (i * j) + '</td>';
      }
    }
    tableHTML += '</tr>';
  }
  
  tableHTML += '</table>';
  tableContainer.innerHTML = tableHTML;
}
