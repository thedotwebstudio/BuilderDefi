import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import Hero from './components/Hero';
import { Row, Col, Card, Button } from 'react-bootstrap'
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import MyCoins from './components/MyCoins';


function App() {
  return (<>
    <HashRouter >
      <div className="app">
        <div className="container-fluid">
          <Nav />
        </div>
        <Switch>
          <Route exact path={`/`} render={(props) => (<Home></Home>)}></Route>
          <Route path={`/home`} render={(props) => (<Home></Home>)}></Route>
          <Route path={`/my-coins`} render={(props) => (<MyCoins></MyCoins>)}></Route>
        </Switch>
        <footer className='p-5 text-center'>
          <p className='text-white p-3'>Copyright © 2021 BuilderDefi - All Rights Reserved.</p>
          <p className='text-white p-3'>PRIVACY POLICYTERMS AND CONDITIONS</p>
        </footer>
      </div>
    </HashRouter>
  </>);
}

export default App;
