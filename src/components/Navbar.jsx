import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const StyledSpan = styled.span`
cursor: pointer;
`

export default function Navbar(props) {

    const pregunta = useSelector(store => store.preguntaNum)
    const numeroPreg = pregunta.pregunta

    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">JUEGA Y GANA</span>
                <div className="d-flex align-items-end">
                    {!props.auth ?
                        <div className="navbar-nav">
                            <StyledSpan className="nav-link">Registrate</StyledSpan>
                            <StyledSpan className="nav-link">Ingresa</StyledSpan>
                        </div>
                        :
                        <div className="navbar-nav">
                            {numeroPreg === 0 ?
                                <span className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">{'Jugador'}</span>
                                :
                                <span className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">{'Jugador - '}</span>
                            }
                            {numeroPreg === 0 ?
                                <StyledSpan className="nav-link">Historial</StyledSpan>
                                : numeroPreg === 1 ?
                                    <span className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Pregunta 1 por $250.000</span>
                                    : numeroPreg === 2 ?
                                        <span className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Pregunta 2 por $500.000</span>
                                        : numeroPreg === 3 ?
                                            <span className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Pregunta 3 por $1.000.000</span>
                                            : numeroPreg === 4 ?
                                                <span className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Pregunta 4 por $10.000.000</span>
                                                : numeroPreg === 5 &&
                                                <span className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Pregunta 5 por $100.000.000</span>
                            }
                        </div>
                    }
                </div>
            </div>
        </nav>
    </>)
}
