import React from 'react'

export default function Login() {
    return (<>
        <div className="container m-5 p-5">
            <form>
            <h4 className="d-flex justify-content-center mb-4">
                Ingresa
            </h4>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="d-flex align-items-center flex-column">
                <button type="submit" className="btn btn-outline-primary">Entrar</button>
                </div>
            </form>
        </div>
    </>)
}
