import React from 'react';
import './App.css'; // Si vous avez une feuille de style personnalisée
import CompteList from './components/CompteList'; // Import du composant CompteList
import CompteForm from './components/CompteForm'; // Import du composant CompteForm

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gestion des Comptes Clients</h1> {/* Titre de l'application */}
      </header>

      <main className="container">
        {/* Affichage du formulaire pour ajouter un compte */}
        <CompteForm />

        {/* Affichage de la liste des comptes */}
        <CompteList />
      </main>
    </div>
  );
}

export default App;


