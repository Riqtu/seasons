import React from 'react';
import { CustomPreloader} from 'react-preloaders';

import './App.scss';

import Header from './components/Header'
import MainPage from './components/MainPage.jsx'
import About from './components/About.jsx'
import Delivery from './components/Delivery'
import MenuPage from './components/MenuPage'
import Contacts from './components/Contacts'

import { AnimatedSwitch } from 'react-router-transition';
import {Router, Route} from "react-router-dom";
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <div className="App__back">
        <div className="back-circle"></div>
        <div className="back-line"></div>
      </div>
      <Router history={history}>
        <AnimatedSwitch
          atEnter={{ opacity: 1}}
          atLeave={{ opacity: 0}}
          atActive={{ opacity:1}}
          className="switch-wrapper"
        >
          <Route exact path="/seasons/" component={MainPage}/>
          <Route path="/seasons/about" render={()=>(<About about={true} text={1} class={'About'}/>)}/>
          <Route path="/seasons/delivery" component={Delivery}/>
          <Route path="/seasons/menu" component={MenuPage}/>
          <Route path="/seasons/contacts" component={Contacts}/>
        </AnimatedSwitch>
      <Header/>
    </Router>
    </div>
    <CustomPreloader background="#FFFFFF">
      <div className="App__back">
        <div className="back-circle"></div>
      </div>
    </CustomPreloader>
    </React.Fragment>
  );
}

export default App;
