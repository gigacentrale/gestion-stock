import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import CommandeAchat from './pages/CommandeAchat';
import Reception from './pages/Reception';
import Client from './pages/Client';
import Devis from './pages/Devis';
import BonLivraison from './pages/BonLivraison';
import Facture from './pages/Facture';
import Site from './pages/Site';
import Article from './pages/Article';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Menu />
        <div className="content">
          <Switch>
            <Route path="/commande-achat" component={CommandeAchat} />
            <Route path="/reception" component={Reception} />
            <Route path="/client" component={Client} />
            <Route path="/devis" component={Devis} />
            <Route path="/bon-livraison" component={BonLivraison} />
            <Route path="/facture" component={Facture} />
            <Route path="/site" component={Site} />
            <Route path="/article" component={Article} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
