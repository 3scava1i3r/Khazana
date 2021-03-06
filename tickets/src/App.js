import React,{useState,useContext} from 'react';
import './App.css';
import { BrowserRouter as  Router, Switch , Route } from 'react-router-dom';
import Header from './Header'
import Login from '../src/screens/Login'
import Home from '../src/screens/Home'
import PK from '../src/screens/PrivateKey'
import Color from '../src/screens/Color'
import Mne from '../src/screens/Mnemonic'
import Event from '../src/screens/Event'
import TicketList from './screens/TicketList';
import CreateToken from './screens/CreateToken';
import MyColor from './screens/MyColor';
import {LoginContext} from "./screens/LoginContext";
import NFT from './screens/NFT';
import DNFT from "./screens/DNFT";

function App() {
  const [prKey , setPrKey ] = useState('');
  
  return (
    <Router>
      <div className="App">
        <LoginContext.Provider value={{ prKey, setPrKey }}>
          <Switch>
            <Route path="/create">
              <Header />
              <CreateToken />
            </Route>
            <Route path="/market">
              <Header />
              <Event />
            </Route>
            <Route path="/nft">
              <Header />
              <NFT />
            </Route>
            <Route path="/dnft">
              <Header />
              <DNFT />
            </Route>
            <Route path="/ticket">
              <Header />
              <TicketList />
            </Route>
            <Route path="/Mnemonic">
              <Mne />
            </Route>
            <Route path="/privateKey">
              <PK />
            </Route>
            <Route path="/color">
              <Header />
              <Color />
            </Route>
            <Route path="/MyColor">
              <Header />
              <MyColor />
            </Route>
            <Route path="/home">
              <Header />
              <Home />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </LoginContext.Provider>
      </div>
    </Router>
  );
}

export default App;
