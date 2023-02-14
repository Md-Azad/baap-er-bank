document.getElementById('btn-deposit').addEventListener('click',function(){
    // fatching the user deposit value;
    const userDeposit = document.getElementById('user-deposit');
    const deposit = userDeposit.value;
    // set deposit value on deposit section.
    const depositSection = document.getElementById('total-deposit');
    const totalDeposit = depositSection.innerText;

    const total = parseFloat(deposit) +parseFloat(totalDeposit);
    depositSection.innerText =total;
    userDeposit.value = '';

    // add the deposit value to balance section.
    const currentValue = document.getElementById('previous-balance');
    const currentBalance = currentValue.innerText;
    const updatedBalance = parseFloat(deposit) + parseFloat(currentBalance);
    currentValue.innerText = parseFloat(updatedBalance);
    
    
})

