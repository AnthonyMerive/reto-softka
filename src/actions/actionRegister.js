import { types } from '../types/types'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
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

export const registroEmailPasswordNombre = (name, email, password) => {


    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,
            email,
            password
        ).then(async ({ user }) => {

            await updateProfile(auth.currentUser,{
               displayName: name,
            })
            Swal.fire({
                icon: 'success',
                title: 'Usuario Registrado con exito',
                showConfirmButton: false,
                timer: 2000
              })

            dispatch(registerSincrono(user.uid, user.displayName, user.email))
            
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Datos Incorrectos',
                text: error,
                showConfirmButton: false,
                timer: 2000
              })
        })

    }
}


export const registerSincrono = (name, email, password) => {
    return {
        type: types.register,
        payload: {
            name,
            password,
            email,
        }
    }
}