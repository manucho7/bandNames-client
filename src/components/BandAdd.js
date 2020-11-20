import React, { useState } from 'react'
import { useSocket } from '../hooks/useSocket';

export const BandAdd = () => {

    const { socket } = useSocket('http://localhost:8080');

    const [ valor, setValor ] = useState();

    const onSubmit = (e) => {
        e.preventDefault();

        if (valor.trim().length > 0) {
            
            socket.emit('nueva-banda', { nombre: valor });

            setValor('');
        }
    }

    return (
        <>
            <h3>Agregar Banda</h3>

            <form onSubmit={onSubmit}>
                <input 
                    className="form-control"
                    placeholder="Nuevo nombre de banda"
                    value={ valor }
                    onChange={(e) => setValor(e.target.value)}
                />


            </form>
        </>
    )
}
