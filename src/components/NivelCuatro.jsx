import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import data from '../data.json';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { actualizaNumPreg } from '../actions/actualizaNumPreg';
import { actualizaAcumu } from '../actions/actualizaAcumulado';

export default function NivelCuatro() {

    const history = useHistory();
    const dispatch = useDispatch();

    const [respuesta, setRespuesta] = useState(null)

    const nivel = data.nivel4;
    const preg = parseInt(Math.random() * (6 - 1) + 1);

    const pregunta = nivel.find(pregunta => pregunta.id === preg);

    const handleRespuesta = (e) => {
        const respSelect = e.target.value;
        setRespuesta(respSelect);
        Swal.fire({
            title: `Esta seguro de que la respuesta correcta es "${respSelect}"`,
            showCancelButton: false,
            showDenyButton: true,
            confirmButtonText: 'Si',
        }).then((result) => {
            if (result.isConfirmed & respSelect.toLowerCase() === pregunta.correcta.toLowerCase()) {
                Swal.fire('¡Correcto!', '', 'success')
                dispatch(actualizaAcumu(10000000))
                history.replace('/pregunta5')
            } else if (result.isConfirmed & respSelect.toLowerCase() !== pregunta.correcta.toLowerCase()) {
                Swal.fire('¡Incorrecto! lo ha perdido Todo', '', 'error')
                dispatch(actualizaAcumu(0))
                history.replace('/')
            } else if (result.isDenied) {
                Swal.fire('Tiene la posibilidad de retirarse', '', 'info')
            }
        })
    }

    const handleRetirar = () => {
        Swal.fire({
            title: `¿Esta seguro que desea retirarse? `,
            showCancelButton: false,
            showDenyButton: true,
            confirmButtonText: 'Si',
        }).then((result) => {
            if (result.isConfirmed & respuesta.toLowerCase() === pregunta.correcta.toLowerCase()) {
                Swal.fire('Que pena, habia seleccionado la respuesta correcta', '', 'info')
                history.replace('/')
            } else if (result.isConfirmed & respuesta.toLowerCase() !== pregunta.correcta.toLowerCase()) {
                Swal.fire('Sabia decisión', '', 'success')
                history.replace('/')
            } else if (result.isDenied) {
                Swal.fire('Asi es, no se rinda', '', 'success')
            }
        })
    }

    useEffect(() => {
        dispatch(actualizaNumPreg(4))
    }, [dispatch])

    return (<>
        <div className="container mt-5">

            <h3 className="d-flex justify-content-center">
                CUARTA PREGUNTA
            </h3>
            <h5 className="d-flex justify-content-center">
                por $10.000.000
            </h5>
            <br />
            <hr />
            <h4 className="d-flex justify-content-center">
                {pregunta.pregunta}
            </h4>
            <hr />
            <div className="d-flex align-items-center flex-column">
                <div className="d-flex align-items-center">
                    <div className="input-group-text">
                        <input
                            className="form-check-input mt-0"
                            type="radio"
                            value={pregunta.respuesta1}
                            onClick={handleRespuesta}
                            name='pregunta'
                            aria-label="Radio button for following text input" />
                    </div>
                    <span className="ms-1">{pregunta.respuesta1}</span>
                </div>
                <br />
                <div className="d-flex align-items-center">
                    <div className="input-group-text">
                        <input
                            className="form-check-input mt-0"
                            type="radio"
                            value={pregunta.respuesta2}
                            onClick={handleRespuesta}
                            name='pregunta'
                            aria-label="Radio button for following text input" />
                    </div>
                    <span className="ms-1">{pregunta.respuesta2}</span>
                </div>
                <br />
                <div className="d-flex align-items-center">
                    <div className="input-group-text">
                        <input
                            className="form-check-input mt-0"
                            type="radio"
                            value={pregunta.respuesta3}
                            onClick={handleRespuesta}
                            name='pregunta'
                            aria-label="Radio button for following text input" />
                    </div>
                    <span className="ms-1">{pregunta.respuesta3}</span>
                </div>
                <br />
                <div className="d-flex align-items-center">
                    <div className="input-group-text">
                        <input
                            className="form-check-input mt-0"
                            type="radio"
                            value={pregunta.respuesta4}
                            onClick={handleRespuesta}
                            name='pregunta'
                            aria-label="Radio button for following text input" />
                    </div>
                    <span className="ms-1">{pregunta.respuesta4}</span>
                </div>
            </div>
            <hr />
            <div className="d-flex align-items-center flex-column">
                {respuesta &&
                    <button onClick={handleRetirar} type="button" className="btn btn-outline-danger">RETIRARSE</button>
                }
            </div>
        </div>

    </>)
}
