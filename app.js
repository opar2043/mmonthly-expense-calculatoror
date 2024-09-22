let num = 0;

document.getElementById('addBtn').addEventListener('click', function () {
    const mainBody = document.getElementById('table');
    const itemExpense = document.getElementById('item-expense').value;

    if (itemExpense === '' || isNaN(itemExpense) || itemExpense <= 0) {
        alert('Please enter a valid expense amount.');
        return;
    }

    let tr = document.createElement('tr');
    tr.classList.add('border-b');

    let td1 = document.createElement('td');
    let td = document.createElement('td');
    let tdBtn = document.createElement('td');
    td.innerText = `$${itemExpense}`;

    num += 1;
    td1.innerText = num;

    let btn = document.createElement('button');
    btn.innerText = 'Remove';
    btn.classList.add('bg-red-500', 'text-white', 'px-2', 'py-1', 'rounded', 'hover:bg-red-700', 'transition', 'duration-300');

    btn.addEventListener('click', function () {
        let removedExpense = parseFloat(td.innerText.replace('$', ''));
        let currentTotal = parseFloat(document.getElementById('h2').innerText.replace('Total: $', ''));
        document.getElementById('h2').innerText = `Total: $${(currentTotal - removedExpense).toFixed(2)}`;
        tr.remove();
    });

    let currentTotal = parseFloat(document.getElementById('h2').innerText.replace('Total: $', ''));
    let numItemExpense = parseFloat(itemExpense);
    let total = currentTotal + numItemExpense;
    document.getElementById('h2').innerText = `Total: $${total.toFixed(2)}`;

    tdBtn.appendChild(btn);
    tr.appendChild(td1);
    tr.appendChild(td);
    tr.appendChild(tdBtn);
    mainBody.appendChild(tr);

    document.getElementById('item-expense').value = '';
});