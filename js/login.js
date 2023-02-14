// step -1:
document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log("button clicked")
    const emailField = document.getElementById('user-emial').value;
    const password = document.getElementById('user-password').value;
    console.log(emailField,password)
    if(emailField ==='sontan@baba.com' && password ==='secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert("invalid user. signup first")
    }
    
})