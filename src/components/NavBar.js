import { Link } from 'react-router-dom';
import islandlogo from '../images/islandlogo.svg'

const NavBar = (props) => {
    const styles = {
        logoutButton: {
          textDecoration: 'none',
          cursor: 'pointer',
        }
    };

    return(
        <nav className="main-navbar">
            <ul>
                <li className="main-navbar-li">
                    <Link to='/home'><img src={islandlogo} id="logo" alt="island logo" /></Link>{' '}
                    <Link to='/home' className="main-navbar-link">IoMT Feed</Link>{' '}
                    <Link to='/posts' className="main-navbar-link">My Posts</Link>{' '}
                    <span className="main-navbar-link" style={styles.logoutButton} onClick={props.handleLogout}>Logout</span>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;