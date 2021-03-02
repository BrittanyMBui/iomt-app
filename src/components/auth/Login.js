import React from 'react';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
    }

    render() {
        return(
            <div>
                <h1>Log In</h1>
            </div>
        );
    }
}

export default Login;