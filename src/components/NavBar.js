import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/home'>IoMT</Link>{' '}
                    <Link to='/users/signup'>Sign Up</Link>{' '}
                    <Link to='/users/login'>Log In</Link>{' '}
                    <Link to='/about'>About</Link>{' '}
                    <Link to='/posts'>My Posts</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;