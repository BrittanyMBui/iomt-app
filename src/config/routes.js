import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from '../components/pages/LandingPage';
import SignUp from '../components/auth/SignUp';
import Login from '../components/auth/Login';
import HomePage from '../components/pages/HomePage';
import AboutPage from '../components/pages/AboutPage';
import CreatePost from '../components/posts/CreatePost';
import PostsIndex from '../components/posts/PostsIndex';
import EditPost from '../components/posts/EditPost';

const Routes = ({ token, setToken }) => (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/users/signup' component={SignUp} />
        <Route path='/about' component={AboutPage} />
        <Route 
            path='/users/login' 
            component={() =>
                <Login setToken={setToken} />
            } />
        {token ? <Route path='/home' component={HomePage} /> : <Redirect to='/users/login' />}
        {token ? <Route path='/newpost' component={CreatePost} /> : <Redirect to='/users/login' />}
        {token ? <Route path='/posts' component={PostsIndex} /> : <Redirect to='/users/login' />}
        {token ? <Route path='/editpost/:id' component={EditPost} /> : <Redirect to='/users/login' />}
    </Switch>
)


export default Routes;