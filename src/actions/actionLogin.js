import { types } from '../types/types'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import Swal from 'sweetalert2';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBuJMbMU_Ot5olBCSxyMHV5QY_6C61t9cI",
    authDomain: "preguntas-c5468.firebaseapp.com",
    projectId: "preguntas-c5468",
    storageBucket: "preguntas-c5468.appspot.com",
    messagingSenderId: "499104225279",
    appId: "1:499104225279:web:d63ef056d6765de38b39ca"
};

initializeApp(firebaseConfig);

const auth = getAuth();

export const loginEmailPassword = (email, password) => {
    return (dispatch) => {
        signInWithEmailAndPassword(auth,
            email,
            password
        ).then(({ user }) => {
            console.log(user)
            console.log(user.providerData[0])
            const data = user.providerData[0];
            dispatch(loginSincrono(user.uid, data.displayName, data.email))
            Swal.fire({
                icon: 'success',
                title: 'ha sido reconocido',
                showConfirmButton: false,
                timer: 2000
              })
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'No ha sido reconocido',
                text: error,
                showConfirmButton: false,
                timer: 2000
              })
        })
    }
}

export const loginSincrono = (uid, displayName, correo) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName,
            correo
        }
    }
}

export const logout = () => {

    return (dispatch) => {
        signOut(auth)
            .then(user => {
                dispatch(logoutSincrono())
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const logoutSincrono = () => {
    return {
        type: types.logout
    }
}
