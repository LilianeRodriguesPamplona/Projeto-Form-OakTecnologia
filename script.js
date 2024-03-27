const productForm = document.getElementById('productForm');
const productList = document.querySelector('#productList tbody');
const addProductButton = document.getElementById('addProduct');

addProductButton.addEventListener('click', () => {
productForm.reset();
productForm.style.display = 'block';
});

// Modifique o evento de submit do formulário
productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productValue = parseFloat(document.getElementById('productValue').value); // Convertendo para número
    const productAvailability = document.getElementById('productAvailability').value;

    // Inserir o novo produto na tabela
    const newRow = productList.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    cell1.textContent = productName;
    cell2.textContent = productValue;

    // Ordenar os produtos pelo valor
    const rows = Array.from(document.querySelectorAll('#productList tbody tr'));
    rows.sort((a, b) => parseFloat(a.cells[1].textContent) - parseFloat(b.cells[1].textContent));

    // Remover todas as linhas da tabela
    while (productList.rows.length > 0) {
        productList.deleteRow(0);
    }

    // Adicionar as linhas ordenadas de volta à tabela
    rows.forEach(row => productList.appendChild(row));

    productForm.style.display = 'none';
});
