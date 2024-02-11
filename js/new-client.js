import { showAlert, validateObject } from "./functions.js";
import { newClient } from "./API.js";

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
            showAlert('All fields are required');
            return;
        }

        newClient(objNewClient);
    }
})();
