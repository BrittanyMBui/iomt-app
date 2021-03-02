import { Switch, Route } from 'react-router-dom';
import LandingPage from '../components/pages/LandingPage';
import SignUp from '../components/auth/SignUp';
import Login from '../components/auth/Login';
import HomePage from '../components/pages/HomePage';

const routes = (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/users/signup' component={SignUp} />
        <Route path='/users/login' component={Login} />
        <Route path='/home' component={HomePage} />
    </Switch>
)

export default routes;