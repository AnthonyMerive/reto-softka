import React from 'react'
import Register from './Register'
import Login from './Login'

export default function Lobby() {
    return (<>
        <h3 className="d-flex justify-content-center mt-3">
            Registrese con cualquier correo (existente o no) y luego ingrese
        </h3>
        <h6 className="d-flex justify-content-center">
            Si no desea registrarse puede ingresar con el correo "ejemplo@ejemplo.com" contraseña "ejemplo1234"
        </h6>
        <div class="container">
            <div class="row">
                <div class="col">
                    <Register />
                </div>
                <div class="col">
                    <Login />
                </div>
            </div>
        </div>
    </>)
}
