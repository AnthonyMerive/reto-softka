import React from 'react'
import Register from './Register'
import Login from './Login'

export default function Lobby() {
    return (<>
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
