import {createStore, combineReducers, compose, applyMiddleware } from 'redux';
// import { obtenerLocalStorage, guardarLocalStorage}from '../localStorage'
import thunk from 'redux-thunk';
import { acumuladoReducer } from '../reducers/acumuladoReducer';
import { preguntaReducer } from '../reducers/preguntasReducer';


const reducers = combineReducers({

    // login: loginReducer,
    // register: registerReducer,
    preguntaNum: preguntaReducer,
    acumuladoVal: acumuladoReducer,

})

const composeEnhancers = (typeof window !== 'undefined' &&
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


// const storageState = obtenerLocalStorage();

export const store = createStore(
    reducers, 
    // storageState, 
    composeEnhancers(
      applyMiddleware(thunk))

)

// store.subscribe(()=>{
//   guardarLocalStorage({
//     login: store.getState().login
//   })
// })