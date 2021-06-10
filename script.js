(function() {
    console.warn('Script correctly linked to the web page');
    
    let nameField = document.getElementById('name');
    let passField = document.getElementById('pass');
    let showPwChk = document.getElementById('showText');
    
    document.forms[0].elements.login_btn.addEventListener('click', function(e) {
        e.preventDefault();

        
        let message = `Welcome ${nameField.value}`;
        alert(message);
        nameField.value = '';
        passField.value = '';
    });

    showPwChk.addEventListener('change', function() {
        passField.type = 'text';
    });
})();