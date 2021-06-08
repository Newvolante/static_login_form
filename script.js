(function() {
    console.warn('Script correctly linked to the web page');

    document.forms[0].elements[3].addEventListener('click', function(e) {
        e.preventDefault();

        let nameValue = document.getElementById('name').value;
        let passValue = document.getElementById('pass').value;
        let message = `Welcome ${nameValue}`;
        alert(message);
    });
})();