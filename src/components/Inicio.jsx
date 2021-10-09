import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { actualizaNumPreg } from '../actions/actualizaNumPreg'

export default function Inicio() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actualizaNumPreg(0))
    }, [dispatch])

    return (<>
        <div className="container mt-5">

            <h3 className="d-flex justify-content-center">
                ¡HOLA {'USUARIO'}!
            </h3>
            <h4 className="d-flex justify-content-center">
                Bienvenido al juego que donde siempre ganaras algo de dinero
            </h4>
            <hr />
            <h4 className="d-flex justify-content-center">
                REGLAS
            </h4>
            <hr />
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-center">
                    El jugador comenzara sin dinero acumulado
                </li>
                <li className="list-group-item d-flex justify-content-center">
                    El Jugador al avanzar tendra opcion de retirarse y quedarse con el dinero ganado hasta ese momento
                </li>
                <li className="list-group-item d-flex justify-content-center">
                    Podra jugar cuantas veces quiera si no ha acumulado dinero
                </li>
                <li className="list-group-item d-flex justify-content-center">
                    Si la respuesta es incorrecta perdera todo
                </li>
                <ul className="list-group-item">
                    <br />
                    <h6 className="d-flex justify-content-center">
                        Acumulado de dinero:
                    </h6>
                    <li className="list-group-item d-flex justify-content-center">
                        Pregunta 1: $250.000
                    </li>
                    <li className="list-group-item d-flex justify-content-center">
                        Pregunta 2: $500.000
                    </li>
                    <li className="list-group-item d-flex justify-content-center">
                        Pregunta 3: $1.000.000
                    </li>
                    <li className="list-group-item d-flex justify-content-center">
                        Pregunta 4: $10.000.000
                    </li>
                    <li className="list-group-item d-flex justify-content-center">
                        Pregunta 5: $100.000.000
                    </li>
                </ul>
            </ul>
            <hr />
            <h4 className="d-flex justify-content-center">
                <Link to="/pregunta1">{'->COMENZAR<-'}</Link>
            </h4>

            <hr />
        </div>
    </>)
}
