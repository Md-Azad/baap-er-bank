document.getElementById('btn-deposit').addEventListener('click',function(){
    // fatching the user deposit value;
    const userDeposit = document.getElementById('user-deposit');
    const deposit = userDeposit.value;
    const depositNumber = parseFloat(deposit);
    console.log(depositNumber);
    // clear the input field 
    userDeposit.value = '';
    if(isNaN(depositNumber) || depositNumber<0){
        alert("please provide a valid amount.")
        return;
    }
    // set deposit value on deposit section.
    const depositSection = document.getElementById('total-deposit');
    const depositTotal = depositSection.innerText;
    const totalDeposit = parseFloat(depositTotal);

    const total = depositNumber +parseFloat(totalDeposit);
    depositSection.innerText =total;
    

    // add the deposit value to balance section.
    const currentValue = document.getElementById('previous-balance');
    const currentBalance = currentValue.innerText;
    const updatedBalance = parseFloat(deposit) + parseFloat(currentBalance);
    currentValue.innerText = parseFloat(updatedBalance);
    
    
})

