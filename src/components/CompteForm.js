import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../config'; // Import de l'URL de base

function CompteForm() {
    // Initialisation de l'état pour stocker les données du formulaire
    const [compte, setCompte] = useState({ solde: '', dateCreation: '', type: 'COURANT' });

    // Gestion des changements dans les champs du formulaire
    const handleChange = (e) => {
        setCompte({ ...compte, [e.target.name]: e.target.value });
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        axios.post(`${API_BASE_URL}/comptes`, compte) // Envoie une requête POST avec les données
            .then(response => {
                alert('Compte ajouté avec succès');
                setCompte({ solde: '', dateCreation: '', type: 'COURANT' }); // Réinitialise le formulaire
            })
            .catch(error => console.error('Erreur lors de l’ajout du compte:', error));
    };

    return (
        <div className="container mt-4">
            <h2>Ajouter un Compte</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="solde">Solde</label>
                    <input
                        type="number"
                        name="solde"
                        id="solde"
                        className="form-control"
                        value={compte.solde}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="dateCreation">Date de Création</label>
                    <input
                        type="date"
                        name="dateCreation"
                        id="dateCreation"
                        className="form-control"
                        value={compte.dateCreation}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="type">Type</label>
                    <select
                        name="type"
                        id="type"
                        className="form-select"
                        value={compte.type}
                        onChange={handleChange}
                    >
                        <option value="COURANT">Courant</option>
                        <option value="EPARGNE">Épargne</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    );
}

export default CompteForm;
