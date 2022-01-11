import React, {useState} from 'react';

const Formulario = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {

        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
    }

    return (
        <>
            <div className="w-full max-w-xs text-center">
                <h1>Formulario</h1>

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={enviarDatos}>
                    <div className="mb-4">
                        <input type="text" placeholder="Nombre" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInputChange} name="nombre"></input>
                    </div>
                    <div className="mb-4">
                        <input type="text" placeholder="Apellido" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInputChange} name="apellido"></input>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
                </form>
                <ul>
                    <li>{datos.nombre}</li>
                    <li>{datos.apellido}</li>
                </ul>
            </div>
        </>
    );
}
export default Formulario;