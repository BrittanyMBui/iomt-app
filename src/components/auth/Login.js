import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

const Login = ({ setToken }) => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            return setError('All fields are required');
        }

        const userData = { email, password };

        fetch('https://safe-fortress-45916.herokuapp.com/iomtapi/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON',
            },
            body: JSON.stringify(userData)
        })
        .then((response) => {
            console.log(response);
            if (response.status === 200) {
                return response.json();
            }
            return setError('Invalid email or password')
        })
        .then((jsonData) => {
            setToken(jsonData.token);
            localStorage.setItem('token', jsonData.token);
            history.push('/home')
        })
        .catch((err) => console.log(err));
    }

    return(
        <div className="login-signup-page">
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password"
                        id="password" 
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <br />
                    <Link to='/users/signup' ><span className="noaccount">Don't have an account?</span></Link>
                    {error ? <p>{error}</p> : null}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;