import { Switch, Route } from 'react-router-dom';
import LandingPage from '../components/pages/LandingPage';
import SignUp from '../components/auth/SignUp';
import Login from '../components/auth/Login';
import HomePage from '../components/pages/HomePage';
import AboutPage from '../components/pages/AboutPage';
import CreatePost from '../components/posts/CreatePost';
import PostsIndex from '../components/posts/PostsIndex';

const routes = (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/users/signup' component={SignUp} />
        <Route path='/users/login' component={Login} />
        <Route path='/home' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/newpost' component={CreatePost} />
        <Route path='/posts' component={PostsIndex} />
    </Switch>
)

export default routes;