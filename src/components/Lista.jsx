import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actualizaNumPreg } from '../actions/actualizaNumPreg'

export default function Lista() {

    const dispatch = useDispatch()
    const ganadores = useSelector(store => store.ganadores.ganadores)

    useEffect(() => {
        dispatch(actualizaNumPreg(6))
    }, [dispatch])

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
                {ganadores.map((ganador,index) => 
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{ganador.nombre}</td>
                        <td>{ganador.correo}</td>
                        <td>{ganador.acumulado}</td>
                    </tr>
                )}
            </tbody>
        </table>

    </>)
}
