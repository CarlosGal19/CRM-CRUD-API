import { getClientById } from "./API.js";

(function(){
    document.addEventListener('DOMContentLoaded', async () => {
        const urlParameters = new URLSearchParams(window.location.search);
        const clientId = urlParameters.get('id');
        const client = await getClientById(clientId);

        const form = document.querySelector('#form');

        showFormData(client);

        // form.addEventListener('submit', validateForm);
    });

    function showFormData(client) {
        const {name, email, phone, company, id } = client;
        console.log(client);

        document.querySelector('#name').value = name;
        document.querySelector('#email').value = email;
        document.querySelector('#phone').value = phone;
        document.querySelector('#company').value = company;
        document.querySelector('#id').value = id;
    }
})();
