import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import history from './history';
import App from './App';
import Callback from './components/Callback/Callback';
import BrowseXbox from './components/Browse/BrowseXbox';
import BrowsePs4 from './components/Browse/BrowsePs4';
import Game from './components/Game/Game';
import Purchases from './components/Purchases/Purchases';
import UserSettings from './components/UserSettings/UserSettings';
import Admin from './components/Admin/Admin';
import AdminPanel from './components/Admin/AdminPanel';
import NoMatch from './components/NoMatch/NoMatch';
import NoAccess from './components/NoAccess/NoAccess';
import Auth from './Auth/Auth';
import AdminAuth from './Auth/AdminAuth';

const auth = new Auth();
const adminAuth = new AdminAuth();

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
            <Route exact path="/" render={(props) => <App auth={auth} {...props} />} />
            <Route exact path="/browsexbox" render={(props) => <BrowseXbox url="http://localhost:3001/api/games" auth={auth} {...props} />} />
            <Route path="/browsexbox/:id" component={(props) => 
              auth.isAuthenticated() ?
                <Game id={props.match.params.id} url="http://localhost:3001/api/games" auth={auth} {...props} /> :
                <NoAccess auth={auth} {...props}/>
            }/>
            <Route exact path="/browseps4" render={(props) => <BrowsePs4 url="http://localhost:3001/api/games" auth={auth} {...props} />} />
            <Route path="/browseps4/:id" render={(props) => {
              return auth.isAuthenticated() ?
                <Game id={props.match.params.id} url="http://localhost:3001/api/games" auth={auth} {...props} /> :
                <NoAccess auth={auth} {...props}/>
            }}/>
            <Route path="/admin" render={(props) => 
              adminAuth.isAuthenticated() ?
              history.replace('/adminpanel') && null:
              <Admin auth={auth} url="http://localhost:3001/api/admin"/>
            }/>
            <Route path="/adminpanel" render={(props) => 
              adminAuth.isAuthenticated() ?
              <AdminPanel url="http://localhost:3001/api/games" auth={auth} {...props}/> :
              <NoAccess auth={auth} {...props}/>
            }/>
            <Route path="/purchases" render={(props) => 
              auth.isAuthenticated() ?
                <Purchases auth={auth} {...props} /> :
                <NoAccess auth={auth} {...props}/>
            }/>
            <Route path="/settings" render={(props) => 
              auth.isAuthenticated() ?
              <UserSettings auth={auth} {...props} /> :
              <NoAccess auth={auth} {...props} />
            }/>
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} /> 
            }}/>
          
            <Route render={(props) => <NoMatch auth={auth} {...props}/>}/>
          </Switch>
        </div>
      </Router>
  );
}
