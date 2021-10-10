import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StyledSpan = styled.span`
cursor: pointer;
`

export default function Navbar(props) {

    const pregunta = useSelector(store => store.preguntaNum)
    const acumu = useSelector(store => store.acumuladoVal)
    const numeroPreg = pregunta.pregunta
    const acumulado = acumu.acumulado

    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">JUEGA Y GANA</span>
                <div className="d-flex align-items-end">
                    {props.auth ?
                        <div className="navbar-nav">
                            {numeroPreg === 0 ?
                                <span className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">{'Jugador'}</span>
                                :
                                <span className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">{'Jugador - '}</span>
                            }
                            {numeroPreg === 0 ?
                                <StyledSpan className="nav-link">Cerrar sesión</StyledSpan>
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
