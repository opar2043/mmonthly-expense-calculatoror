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

