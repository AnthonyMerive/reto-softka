import React from 'react'
import { useDispatch } from 'react-redux';
import { registroEmailPasswordNombre } from '../actions/actionRegister';
import { useForm } from '../hooks/useForm';

export default function Register() {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: '',
        nombreCompleto: ''
    })

    const { email, password, nombreCompleto } = values;

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(nombreCompleto, email, password))
        reset();

    }


    return (<>
        <div className="container m-5 p-5">
            <form onSubmit={handleRegister}>
                <h4 className="d-flex justify-content-center mb-4">
                    Registrate
                </h4>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Nombre Completo</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        aria-describedby="emailHelp"
                        name="nombreCompleto"
                        value={nombreCompleto}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Correo</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        value={password}
                        onChange={handleInputChange}

                    />
                </div>
                <div className="d-flex align-items-center flex-column">
                    <button type="submit" className="btn btn-outline-primary">Registro</button>
                </div>
            </form>
        </div>
    </>)
}
