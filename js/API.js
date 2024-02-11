const url = 'http://localhost:4000/clients'

// POST
export const newClient = async (client) => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

// GET
export const getClients = async () => {
    try {
        const result = await fetch(url);
        const data = await result.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// DELETE
export const deleteClient = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error);
    }
}

// GET (then PUT)
export const getClientById = async (id) => {
    try {
        const response = await fetch(`${url}/${id}`);
        const client = await response.json();
        return client;
    } catch (error) {
        console.log(error);
    }
}

// PUT
export const updateClient = async (client) => {
    try {
        await fetch(`${url}/${client.id}`, {
            method: 'PUT',
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}
