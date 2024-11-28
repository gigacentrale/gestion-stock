import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <ul>
        <li><Link to="/commande-achat">Commande Achat</Link></li>
        <li><Link to="/reception">Réception</Link></li>
        <li><Link to="/client">Client</Link></li>
        <li><Link to="/devis">Devis</Link></li>
        <li><Link to="/bon-livraison">Bon de Livraison</Link></li>
        <li><Link to="/facture">Facture</Link></li>
        <li><Link to="/site">Site</Link></li>
        <li><Link to="/article">Article</Link></li>
      </ul>
    </div>
  );
};

export default Menu;
