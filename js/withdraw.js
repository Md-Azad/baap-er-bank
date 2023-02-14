document.getElementById('btn-withdraw').addEventListener('click',function(){

    // get the user withdraw value
    const withdrawValue = document.getElementById('user-withdraw');
    const withdrawvalues = withdrawValue.value;
    const userW = parseFloat(withdrawvalues);
    withdrawValue.value = '';
    // console.log(`user given value is ${withdrawvalues}`);

    // get default withdraw value 
    const currentWithdraw = document.getElementById('previous-withdraw');
    const lastWithdraw = currentWithdraw.innerText;
    const finalW = parseFloat(lastWithdraw);

    const totalWithdraw = finalW+userW;
    currentWithdraw.innerText = totalWithdraw;
    
    

    
    // make calculation with totla balance 

    const currentTotal = document.getElementById('previous-balance');
    const totalValue = currentTotal.innerText;
    const changeT = parseFloat(totalValue);

    const finalBalance = changeT- userW;
    
    currentTotal.innerText = finalBalance;
    
    
    
 


    
    
    
})