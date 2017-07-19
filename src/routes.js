import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Callback from './components/Callback/Callback';
import BrowseXbox from './components/Browse/BrowseXbox';
import BrowsePs4 from './components/Browse/BrowsePs4';
import Purchases from './components/Purchases/Purchases';
import UserSettings from './components/UserSettings/UserSettings';
import NoMatch from './components/NoMatch/NoMatch';
import Auth from './Auth/Auth';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact render={(props) => <App auth={auth} {...props} />} />
            <Redirect from="/old-match" to="/will-match"/>
            <Route path="/browsexbox" render={(props) => <BrowseXbox auth={auth} {...props} />} />
            <Route path="/browseps4" render={(props) => <BrowsePs4 auth={auth} {...props} />} />
            <Route path="/purchases" render={(props) => 
              auth.isAuthenticated() ?
                <Purchases auth={auth} {...props} /> :
                <NoMatch/>
            }/>
            <Route path="/settings" render={(props) => 
              auth.isAuthenticated() ?
              <UserSettings auth={auth} {...props} /> :
              <NoMatch/>
            }/>
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} /> 
            }}/>
          
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
  );
}
