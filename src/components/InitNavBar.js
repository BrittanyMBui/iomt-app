import { Link } from 'react-router-dom';
import islandlogo from '../images/islandlogo.svg'
import LoginModal from './auth/LoginModal';

const InitNavBar = ({ setToken }) => {
    return(
        <nav className="init-navbar">
            <ul>
                <li>
                    <Link to='/'><img src={islandlogo} id="logo" alt="island logo" /></Link>{' '}
                    <Link to='/users/signup'>Sign Up</Link>{' '}
                    <LoginModal setToken={setToken} />
                    <Link to='/about'>About</Link>{' '}
                </li>
            </ul>
        </nav>
    );
}

export default InitNavBar;