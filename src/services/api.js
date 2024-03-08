const BASE_URL = 'https://api.exemplo.com/products'

export const apiLogin = (username, password) => {
    if (username === 'user' && password === 'pass') {
        return {
            success: true,
            token: 'jwt',
            user: { id: 1, name: 'Yan Esteves', username }
        }
    } else {
        throw new Error('Auth falhou.')
    }
}

export const fetchData = async (termo) => {
    // Implementação do GET
    const response = await fetch(`https://api.github.com/search/users?q=${termo}`)
    .then(response => response.json());

    return response;
}

export const deletarDado = (id) => {
    fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => console.log('Dado deletado com sucesso.'))
    .catch(error => console.log(error))
}

export const atualizarDados = (id, data) => {
    fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(() => console.log('Dado atualizado com sucesso.'))
    .catch(error => console.log(error))
}

export const enviarDados = (data) => {
    fetch(`${BASE_URL}`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(() => console.log('Dado atualizado com sucesso.'))
    .catch(error => console.log(error))
}