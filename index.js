function inputValueId(id){
   let idName = document.getElementById(id).value;
   let numIdName = parseFloat(idName)
   return numIdName;
}




document.getElementById('calculateBtn').addEventListener('click',function(){
     let income = inputValueId('income');
     let software = inputValueId('software');
     let course = inputValueId('course');
     let internet = inputValueId('internet');


    //  console.table(internet , income, software , course , savings);

    // hidden class=========
    document.getElementById('resultDiv').classList.remove('hidden');
    document.getElementById('savingsDiv').classList.remove('hidden');

    // income========
    document.getElementById('balance').innerText = income;

    // expense========
    let myExpense = software + course + internet ;
    document.getElementById('expense').innerText = myExpense;

    // savings amount======
    let remaining = income - myExpense;
    let remainAmount = parseFloat(remaining);

    document.getElementById('balanceTk').innerText = remainAmount;



    document.getElementById('calculateSavings').addEventListener('click',function(){
        let savings = inputValueId('savings')
    
       console.log('object');
        let mySavingsMoney = remainAmount * savings/100;
        document.getElementById('mySave').innerText = mySavingsMoney;
    })

     
})



// project 2


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
            btn.classList.add('bg-red-500','my-1' 'text-white', 'px-2', 'py-1', 'rounded', 'hover:bg-red-700', 'transition', 'duration-300');

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
    