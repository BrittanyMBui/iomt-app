import { Switch, Route } from 'react-router-dom';
import LandingPage from '../components/LandingPage';

const routes = (
    <Switch>
        <Route exact path='/' component={LandingPage} />
    </Switch>
)

export default routes;
