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
        <nav>
            <ul>
                <li>
                    <Link to='/home'><img src={islandlogo} id="logo" alt="island logo" /></Link>{' '}
                    <Link to='/home'>IoMT Feed</Link>{' '}
                    <Link to='/posts'>My Posts</Link>{' '}
                    <Link to='/about'>About</Link>{' '}
                    <span style={styles.logoutButton} onClick={props.handleLogout}>Logout</span>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;