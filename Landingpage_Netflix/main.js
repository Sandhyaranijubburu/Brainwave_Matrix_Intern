var form = document.querySelector('.email-form');
var emailInput = document.querySelector('.email-form input');
form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    var email = emailInput.value; 
    var atSymbol = email.indexOf('@'); 
    var dotSymbol = email.indexOf('.');
    if (atSymbol === -1 || dotSymbol === -1 || atSymbol > dotSymbol) {
        alert('Please enter a valid email address!'); 
        emailInput.focus(); 
    } else {
        alert('Thank you for signing up!'); 
        emailInput.value = ''; 
    }
});

