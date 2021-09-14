'use strict';


//Validation forms
function validateForm(selector) {
    Array.from(document.querySelectorAll(selector)).forEach(item => {
        item.addEventListener('input', (e) => {
            if (e.target.value === '') {
                item.dataset.touched = false;
            }
        });
        item.addEventListener('invalid', () => {
            item.dataset.touched = true;
        });
        item.addEventListener('blur', () => {
            if (item.value !== '') item.dataset.touched = true;
        });
    });
};

validateForm('.js-form .form-field');

var form = document.querySelector('.js-form');
var formName = '.js-form';

form.addEventListener('submit', function(e) {
    submitForm(e, formName);
});

function submitForm(e, formName) {
    e.preventDefault();
    var name = $(formName + ' .js-field-name').val();
    var mail = $(formName + ' .js-field-mail').val();
    var message = $(formName + ' .js-field-message').val();

    var formData = {
        name: name,
        mail: mail,
        message: message
    };

    $.ajax({
        type: "POST",
        url: 'contact.php',
        data: formData,
        success: function() {
            console.log('success');
            //...
        },
        error: function() {
            console.log('error');
            //...
        }
    });
}