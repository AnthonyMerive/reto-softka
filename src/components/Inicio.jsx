import React from 'react'
import { Link } from 'react-router-dom'

export default function Inicio() {
    return (<>
        <div className="container mt-5">

            <h3 className="d-flex justify-content-center">
                ¡HOLA {'USUARIO'}!
            </h3>
            <h4 className="d-flex justify-content-center">
                Bienvenido a este magnifico juego
            </h4>
            <hr />
            <h4 className="d-flex justify-content-center">
                REGLAS
            </h4>
            <hr />
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-center">
                    El jugador comenzara con $0
                </li>
                <li className="list-group-item d-flex justify-content-center">
                    El Jugador al avanzar tendra opcion de retirarse y quedarse con el dinero ganado hasta la tercera pregunta
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
                        Pregunta 1: $10.000.000
                    </li>
                    <li className="list-group-item d-flex justify-content-center">
                        Pregunta 2: $20.000.000
                    </li>
                    <li className="list-group-item d-flex justify-content-center">
                        Pregunta 3: $40.000.000
                    </li>
                    <li className="list-group-item d-flex justify-content-center">
                        Pregunta 4: $80.000.000
                    </li>
                    <li className="list-group-item d-flex justify-content-center">
                        Pregunta 5: $160.000.000
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
