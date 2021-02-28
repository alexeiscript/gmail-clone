import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header'
import './App.css'
import Sidebar from './Sidebar'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app_body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App
