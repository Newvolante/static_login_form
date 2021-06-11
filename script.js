(function() {
    console.warn('Script correctly linked to the web page');
    
    let formContainer = document.getElementById('form_container');
    let nameField = document.getElementById('name');
    let passField = document.getElementById('pass');
    let showPwChk = document.getElementById('showText');
    let loginButton = document.forms[0].elements.login_btn;
    
    // login button disabled when the page is loaded
    loginButton.disabled = true

    // welcomes the user when she hits the login button
    document.forms[0].elements.login_btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        let message = `Welcome ${nameField.value}`;
        alert(message);
        nameField.value = '';
        passField.value = '';
    });

    // event listener for the checkbox to show the password inserted in the password field
    showPwChk.addEventListener('change', function() {
        if (showPwChk.checked) {
            passField.type = 'text';
        } else {
            passField.type = 'password';
        }
    });

    // calling input event every time something is typed/deleted in the name or password field
    document.querySelectorAll('.main-field').forEach(item => {
        item.addEventListener('input', function() {
        console.log('called change event');
        (!nameField.value || !passField.value) ? loginButton.disabled = true : loginButton.disabled = false;
    })});

})();