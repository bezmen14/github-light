import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import SignUp from './components/SignUp/SignUp';
import Main from './components/Main/Main';
import SignIn from './components/SignIn/SignIn'
import React from 'react';
import UserFullCard from './components/UserFullCard/UserFullCard'
import Contributions from './components/Contributions/Contributions';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className='main'>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/registration">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <SignIn />
            </Route>
            <Route exact path="/profile/:login">
              <UserFullCard />
            </Route>
            <Route exact path="/profile/:login/contributions">
              <Contributions />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
