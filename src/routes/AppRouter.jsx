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
import NivelCinco from '../components/NivelCinco';
import Navbar from '../components/Navbar'
import PrivateRoute from './PrivateRoute'
import Lobby from '../components/Lobby';

export default function AppRouter() {

    let auth = true;

    return (<Router>

        <Navbar auth={auth}/>

        <Switch>

        <PrivateRoute auth={auth} exact path="/ganador" component={Ganador}/>

        <PrivateRoute auth={auth} exact path="/pregunta1" component={NivelUno}/>

        <PrivateRoute auth={auth} exact path="/pregunta2" component={NivelDos}/>

        <PrivateRoute auth={auth} exact path="/pregunta3" component={NivelTres}/>

        <PrivateRoute auth={auth} exact path="/pregunta4" component={NivelCuatro}/>

        <PrivateRoute auth={auth} exact path="/pregunta5" component={NivelCinco}/>

        {
            auth?
            <Route exact path="/" component={Inicio}/>
            :
            <Route exact path="/" component={Lobby}/>
        }
        </Switch>
           
        </Router>)
}
