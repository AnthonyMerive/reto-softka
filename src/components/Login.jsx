import React from 'react'
import { useDispatch } from 'react-redux';
import { loginEmailPassword } from '../actions/actionLogin';
import { useForm } from '../hooks/useForm';

export default function Login() {
    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginEmailPassword(email, password))
        reset();

    }

    return (<>
        <div className="container m-5 p-5">
            <form onSubmit={handleLogin}>
                <h4 className="d-flex justify-content-center mb-4">
                    Ingresa
                </h4>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
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
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
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
                    <button type="submit" className="btn btn-outline-primary">Entrar</button>
                </div>
            </form>
        </div>
    </>)
}
