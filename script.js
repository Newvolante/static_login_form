(function() {
    console.warn('Script correctly linked to the web page');

    document.forms[0].elements.login_btn.addEventListener('click', function(e) {
        e.preventDefault();

        let nameField = document.getElementById('name');    
        
        let message = `Welcome ${nameField.value}`;
        alert(message);
        nameField.value = '';
    });
})();