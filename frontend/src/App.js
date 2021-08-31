import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import Main from './components/Main/Main';
import SignIn from './components/SignIn/SignIn'
import React from 'react';

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



          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;