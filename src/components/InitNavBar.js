import { Link } from 'react-router-dom';

const InitNavBar = () => {
    return(
        <nav className="init-navbar">
            <ul>
                <li>
                    <Link to='/users/signup'>Sign Up</Link>{' '}
                    <Link to='/users/login'>Log In</Link>{' '}
                    <Link to='/about'>About</Link>{' '}
                </li>
            </ul>
        </nav>
    );
}

export default InitNavBar;