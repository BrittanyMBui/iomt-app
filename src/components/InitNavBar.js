import { Link } from 'react-router-dom';
import islandlogo from '../images/islandlogo.svg'
import LoginModal from './auth/LoginModal';
import SignUpModal from './auth/SignUpModal';

const InitNavBar = ({ setToken }) => {
    
    return(
        <nav className="init-navbar">
            <ul>
                <li className="init-navbar-li">
                    <Link to='/'><img src={islandlogo} id="logo" alt="island logo" /></Link>{' '}
                    <SignUpModal setToken={setToken} className="signup-link" />{' '}
                    <LoginModal setToken={setToken} className="login-link" />
                    <Link to='/about' className="about-link">About</Link>{' '}
                </li>
            </ul>
        </nav>
    );
}

export default InitNavBar;