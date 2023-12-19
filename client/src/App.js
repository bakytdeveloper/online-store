import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Home = () => <div>Home</div>;


function App() {
  return (
      <Router>
          <div>
              <Header />
              <Switch>
                  <Route path="/" exact component={Home} />
                  {/* Добавьте другие роуты здесь */}
              </Switch>
          </div>
      </Router>
  );
}

export default App;
