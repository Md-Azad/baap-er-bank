document.getElementById('btn-withdraw').addEventListener('click',function(){

    // get the user withdraw value
    const withdrawValue = document.getElementById('user-withdraw');
    const withdrawvalues = withdrawValue.value;
    const userW = parseFloat(withdrawvalues);
    
    // console.log(`user given value is ${withdrawvalues}`);

    // get default withdraw value 
    const currentWithdraw = document.getElementById('previous-withdraw');
    const lastWithdraw = currentWithdraw.innerText;
    const finalW = parseFloat(lastWithdraw);

  
    
    

    
    // make calculation with totla balance 

    const currentTotal = document.getElementById('previous-balance');
    const totalValue = currentTotal.innerText;
    const changeT = parseFloat(totalValue);

    if(userW>changeT || isNaN(userW)){
        alert("insufficient Balance in your Account or worng input.")
        return;
    }

    const totalWithdraw = finalW+userW;
    currentWithdraw.innerText = totalWithdraw;

    const finalBalance = changeT- userW;
    
    currentTotal.innerText = finalBalance;
    // clear the input field 
    withdrawValue.value = '';
    
})