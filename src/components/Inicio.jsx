import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { mostrarGanadorAsincronico } from '../actions/actionGanador'
import { actualizaNumPreg } from '../actions/actualizaNumPreg'
import { mostrarGanadoresAsincronico } from '../actions/actionGanador'

export default function Inicio() {

    const dispatch = useDispatch()
    const usuarioLogeado = useSelector(store => store.login)
    const correo = usuarioLogeado.correo
    const nombre = usuarioLogeado.displayName
    const acumu = useSelector(store => store.acumuladoVal)
    const acumulado = acumu.acumulado

    useEffect(() => {
        dispatch(mostrarGanadoresAsincronico())
        dispatch(actualizaNumPreg(0))
        dispatch(mostrarGanadorAsincronico(correo))
    }, [])


    return (<>
        <div className="container mt-5">
            {nombre !== undefined &&
                <h3 className="d-flex justify-content-center">
                    ¡HOLA {nombre.toUpperCase()}!
                </h3>
            }
            {acumulado === 0 ?
                <h4 className="d-flex justify-content-center">
                    Bienvenido al juego donde siempre ganaras algo de dinero
                </h4>
                :
                <h4 className="d-flex justify-content-center">
                    Ya tienes ${acumulado} acumulados no puedes jugar de nuevo
                </h4>
            }
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
            {
                !(acumulado > 0) &&
                <h4 className="d-flex justify-content-center">
                    <Link to="/pregunta1">{'->COMENZAR<-'}</Link>
                </h4>
            }
            <br />
            <div className="d-flex justify-content-center">
                <h4>
                    lista de
                </h4>
                <h4 className="ms-1"><Link to="/ganadores">ganadores</Link></h4>
            </div>
            <br />
            <hr />
        </div>
    </>)
}
