import React from "react";

class Login extends React.Component {
    render() {
        const title = 'Login Component'
        return <form className="login-wrapper">
            { title }
            <div>
                <label>Email</label>
                <div>
                    <input type="text" placeholder="Email"></input>                    
                </div>
            </div>
            <div>
                <label>Password</label>
                <div>
                    <input type="text" placeholder="Password"></input>
                </div>
            </div>
            <div>
            <button>Login</button>
            </div>
        </form>; //JSX Babel, Emmet
    }
}

export default Login;