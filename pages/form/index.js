import React, { useState} from 'react';

export default function form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    async function postUser(data) {
        const res = await fetch('/api/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data) 
        })
        return await res.text();
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let newPerson = {
            'name': name,
            'email': email
        }

        postUser(newPerson)
            .then(response => JSON.parse(response))
            .then(data => {
                if (data.success == true) {
                    alert('Usuario agregado');
                    loadUsers();
                } else {
                    alert('Error al agregar usuario');
                }             
            });
    }

    return(
        <>
            <div>
                <h1>Formulario</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <p>Nombre:</p>
                        <input type='text' onChange={e => setName(e.target.value)}></input>
                        <p>Email:</p>
                        <input type='text' onChange={e => setEmail(e.target.value)}></input>
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        </>
    );
}