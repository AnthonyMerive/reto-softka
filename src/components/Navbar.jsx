import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { resetGanador } from '../actions/actionGanador'
import { logout } from '../actions/actionLogin'
import { actualizaAcumu } from '../actions/actualizaAcumulado'

const StyledSpan = styled.span`
cursor: pointer;
`

export default function Navbar(props) {

    const dispatch = useDispatch()

    const pregunta = useSelector(store => store.preguntaNum)
    const acumu = useSelector(store => store.acumuladoVal)
    const usuarioLogeado = useSelector(store => store.login)
    const nombre = usuarioLogeado.displayName
    const numeroPreg = pregunta.pregunta
    const acumulado = acumu.acumulado

    const handleCerrarSesion = () => {
        dispatch(actualizaAcumu(0))
        dispatch(resetGanador())
        dispatch(logout());
        sessionStorage.clear();
    }

    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">JUEGA Y GANA</span>
                <div className="d-flex align-items-end">
                    {props.auth ?
                        <div className="navbar-nav">
                            {numeroPreg === 0 ?
                                <span className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">{nombre}</span>
                                :
                                <span className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">{`${nombre} - `}</span>
                            }
                            {numeroPreg === 0 ?
                                <Link
                                    to="/"
                                    style={{ textDecoration: 'none', color: 'white' }}
                                >
                                    <StyledSpan onClick={handleCerrarSesion} className="nav-link">Cerrar sesión</StyledSpan>
                                </Link>
                                : numeroPreg ===6?
                                <Link
                                    to="/"
                                    style={{ textDecoration: 'none', color: 'white' }}
                                >
                                    <StyledSpan className="nav-link">Volver</StyledSpan>
                                </Link>
                                :
                                <span className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">${acumulado}</span>
                            }
                        </div>
                        :
                        <span className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Ingrese o Registrese</span>
                    }
                </div>
            </div>
        </nav>
    </>)
}
