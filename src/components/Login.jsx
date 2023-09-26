import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
    return (
        <div className="myapp">

            <div className="sign-up login-form">
                <div className="heading login">
                    <h2>Login</h2>
                </div>
                <div className="main">
                    <input type="text" placeholder="Enter your E-mail" className="input"/>
                    <input type="text" placeholder="Enter Password" className="input"/>
                    <button className="btn">Login</button>
                    <label htmlFor="login">
                        Dont have an acoount ?
                        <Link to='/'>Sign-up</Link>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Login
