import { Switch, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import SignUp from '../components/auth/SignUp';
import Login from '../components/auth/Login';

const routes = (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/users/signup' component={SignUp} />
        <Route path='/users/login' component={Login} />
    </Switch>
)

export default routes;
