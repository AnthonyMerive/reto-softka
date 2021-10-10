import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { mostrarGanadoresAsincronico } from '../actions/actionGanador'

export default function Lista() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(mostrarGanadoresAsincronico())
    }, [])

    return (<>

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Acumulado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>

    </>)
}
