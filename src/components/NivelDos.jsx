import React from 'react'
import Swal from 'sweetalert2';
import data from '../data.json';
import { useHistory } from "react-router-dom";

export default function NivelDos() {

    const history = useHistory();

    const nivel = data.nivel2;
    const preg = parseInt(Math.random() * (6 - 1) + 1);

    const pregunta = nivel.find(pregunta => pregunta.id === preg);

    const handleRespuesta = (e) => {
        const respSelect = e.target.value;
        Swal.fire({
            title: `Esta seguro de que la respuesta correcta es "${respSelect}"`,
            showCancelButton: false,
            showDenyButton: true,
            confirmButtonText: 'Si',
        }).then((result) => {
            if (result.isConfirmed & respSelect.toLowerCase() === pregunta.correcta.toLowerCase()) {
                Swal.fire('¡Correcto!', '', 'success')
                history.replace('/pregunta3')
            } else if (result.isConfirmed & respSelect.toLowerCase() !== pregunta.correcta.toLowerCase()) {
                Swal.fire('¡Incorrecto! lo ha perdido Todo', '', 'error')
                history.replace('/')
            } else if (result.isDenied) {
                Swal.fire('Aun tiene posibilidad de retirarse', '', 'info')
            }
        })
    }

    return (<>
        <div className="container mt-5">

            <h3 className="d-flex justify-content-center">
                SEGUNDA PREGUNTA
            </h3>
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
        </div>

    </>)
}
