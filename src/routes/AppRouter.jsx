import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
}from "react-router-dom";
import Ganador from '../components/Ganador';
import Inicio from '../components/Inicio';
import NivelUno from '../components/NivelUno';
import NivelDos from '../components/NivelDos';
import NivelTres from '../components/NivelTres';
import NivelCuatro from '../components/NivelCuatro';
import NivelCinco from '../components/NivelCinco'

export default function AppRouter() {
    return (<Router>

        <Switch>

        <Route exact path="/" component={Inicio}/>

        <Route exact path="/ganador" component={Ganador}/>

        <Route exact path="/pregunta1" component={NivelUno}/>

        <Route exact path="/pregunta2" component={NivelDos}/>

        <Route exact path="/pregunta3" component={NivelTres}/>

        <Route exact path="/pregunta4" component={NivelCuatro}/>

        <Route exact path="/pregunta5" component={NivelCinco}/>

        </Switch>
           
        </Router>)
}
