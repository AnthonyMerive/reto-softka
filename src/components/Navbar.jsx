import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
cursor: pointer;
`

export default function Navbar(props) {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <StyledSpan className="navbar-brand">JUEGA Y GANA</StyledSpan>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <StyledSpan className="navbar-toggler-icon"></StyledSpan>
                </button>
                <div className="d-flex align-items-end">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        {!props.auth ?
                            <div className="navbar-nav">
                                <StyledSpan className="nav-link">Registrate</StyledSpan>
                                <StyledSpan className="nav-link">Ingresa</StyledSpan>
                            </div>
                            :
                            <div className="navbar-nav">
                                <StyledSpan className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Jugador</StyledSpan>
                                <StyledSpan className="nav-link">Historial</StyledSpan>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </nav>
    </>)
}
