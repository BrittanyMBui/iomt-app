import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [cnfPassword, setCnfPassword] = useState();
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username || !email || !password || !cnfPassword) {
            return setError('All fields are required');
        }
        if (password !== cnfPassword) {
            return setError('Passwords do not match');
        }
        const newUser = { username, email, password };
        fetch('https://safe-fortress-45916.herokuapp.com/iomtapi/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                return response.json();
            }
            setError(response.message)
            
        })
        .then((jsonData) => {
            console.log(jsonData);
            history.push('/users/login')
        })
        .catch((err) => console.log(err));
    };


    
    return (
        <div>
            <h1>Create an IoMT Account</h1>
            {error ? <h2>{error}</h2> : null}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                    type="text"
                    id="username"
                    name="username"
                />
                <br />
                <label htmlFor="email">Email</label>
                <input 
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    type="email"
                    id="email"
                    name="email"
                />
                <br />
                <label htmlFor="password">Password</label>
                <input 
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    type="password"
                    id="password"
                    name="password"
                />
                <br />
                <label htmlFor="cnfPassword">Confirm Password</label>
                <input 
                    onChange={(event) => setCnfPassword(event.target.value)}
                    value={cnfPassword}
                    type="password"
                    id="cnfPassword"
                    name="cnfPassword"
                />
                <br />
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
};

export default SignUp;