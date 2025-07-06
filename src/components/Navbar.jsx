
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white px-4 py-3 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">SmartAbonnement</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Accueil</Link>
        <Link to="/comparateur" className="hover:underline">Simulateur</Link>
        <Link to="/etape3" className="hover:underline">Résumé</Link>
      </div>
    </nav>
  );
}
