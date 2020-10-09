import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import User from './components/User';
import Messages from './components/Messages';
import SignIn from './components/SignIn';
import './App.css'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
// import { useHistory } from 'react-router-dom';

function App() {
  // const [user, setUser] = useState(initialState)
  var [{ user }, dispatch] = useStateValue();
  debugger
  useEffect(() => {
    debugger
    if (!user && localStorage.getItem('userData')) {
      user = JSON.parse(localStorage.getItem('userData'));
      dispatch({
        type: actionTypes.SET_USER,
        user: user
      })
    }
  }, [])

  // const history = useHistory()
  // if(user){
  //   history.push('/app/home')
  // }

  return (
    <div className="app">
      {!user ?
        <SignIn />
        :
        <div className="app_body">
          <Router>
            <Header />
            <Switch>
              {/* <Route path="/" exact>
              <SignIn />
            </Route> */}
              <Route path={`/`} exact>
                <TinderCards />
                <SwipeButtons />
              </Route>
              <Route path={`/user`}>
                <User />
              </Route>
              <Route path={`/messages`}>
                <Messages />
              </Route>
              {/* <Route path="/app" render={({ match: { url } }) => (
              <>
                <Header />
                <Route path={`${url}/home`}>
                  <TinderCards />
                  <SwipeButtons />
                </Route>
                <Route path={`${url}/user`}>
                  <User />
                </Route>
                <Route path={`${url}/messages`}>
                  <Messages />
                </Route>
              </>
            )}
            /> */}
            </Switch>
          </Router>
        </div>
      }
    </div>
  );
}

export default App;
