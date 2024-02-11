import { showAlert } from "./functions.js";

(function () {
    const form = document.querySelector('#form');

    form.addEventListener('submit', validateForm);

    function validateForm(e) {
        e.preventDefault();

        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const company = document.querySelector('#company').value;

        const objNewClient = {
            name,
            email,
            phone,
            company
        }

        if (!validateObject(objNewClient)) {
            showAlert('All fields are required')
            return
        }

        console.log('yes');
    }

    function validateObject(object) {
        return Object.values(object).every(property => property !== '');
    }
})();
