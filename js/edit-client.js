import { getClientById, updateClient } from "./API.js";
import { validateObject, showAlert } from "./functions.js";

(function () {

    const inputName = document.querySelector('#name');
    const inputEmail = document.querySelector('#email');
    const inputPhone = document.querySelector('#phone');
    const inputCompany = document.querySelector('#company');
    const inputId = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        // It reads the ID from url to know what client is going to be edited
        const urlParameters = new URLSearchParams(window.location.search);
        const clientId = urlParameters.get('id');
        const client = await getClientById(clientId);

        showFormData(client);

        const form = document.querySelector('#form');

        form.addEventListener('submit', validateForm);
    });

    // It shows data from client in form to edit them
    function showFormData(client) {
        const { name, email, phone, company, id } = client;
        console.log(client);

        inputName.value = name;
        inputEmail.value = email;
        inputPhone.value = phone;
        inputCompany.value = company;
        inputId.value = id;
    }

    function validateForm(e) {
        e.preventDefault();

        const objClientUpdated = {
            name: inputName.value,
            email: inputEmail.value,
            phone: inputPhone.value,
            company: inputCompany.value,
            id: inputId.value
        }

        if (!validateObject(objClientUpdated)) {
            showAlert('All fields are required');
            return
        }

        updateClient(objClientUpdated);
    }
})();
