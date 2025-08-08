// src/App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Mariage from './assets/mariage.jpg'
import Mariage2 from './assets/mariage2.jpg'
import Mariage3 from './assets/mariage3.jpg'
const AnniversaireMariage = () => {
  // Date de votre mariage (8 août 2024)
  const dateMariage = new Date(2024, 7, 8); 
  const [tempsEcoule, setTempsEcoule] = useState({
    annees: 0,
    jours: 0,
    heures: 0,
    minutes: 0,
    secondes: 0
  });
  const [afficherGalerie, setAfficherGalerie] = useState(false);
  const [souvenirActuel, setSouvenirActuel] = useState(0);
  
  // Vos souvenirs (à remplacer par vos photos)
  const souvenirs = [
    { id: 1, titre: "Notre mariage", description: "Le jour où nos vies se sont unies pour toujours", photo : Mariage  },
    { id: 2, titre: "Notre mariage", description: "Le jour où nos vies se sont unies pour toujours" , photo : Mariage2},
    { id: 3, titre: "Notre mariage", description: "Le jour où nos vies se sont unies pour toujours" , photo : Mariage3},
    
  ];

  useEffect(() => {
    const calculerTempsEcoule = () => {
      const maintenant = new Date();
      const difference = maintenant.getTime() - dateMariage.getTime();
      
      // Calcul des unités de temps
      const secondes = Math.floor(difference / 1000) % 60;
      const minutes = Math.floor(difference / (1000 * 60)) % 60;
      const heures = Math.floor(difference / (1000 * 60 * 60)) % 24;
      const jours = Math.floor(difference / (1000 * 60 * 60 * 24)) % 365;
      const annees = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
      
      setTempsEcoule({ annees, jours, heures, minutes, secondes });
    };

    calculerTempsEcoule();
    const timer = setInterval(calculerTempsEcoule, 1000);
    return () => clearInterval(timer);
  }, []);

  const souvenirSuivant = () => {
    setSouvenirActuel((prev) => (prev + 1) % souvenirs.length);
  };

  const souvenirPrecedent = () => {
    setSouvenirActuel((prev) => (prev - 1 + souvenirs.length) % souvenirs.length);
  };

  return (
    <div className="container-anniversaire">
      <div className="animation-fond">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="coeur-flottant" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 20 + 10}px`,
            color: i % 3 === 0 ? '#ff6b8b' : i % 3 === 1 ? '#ff8fab' : '#a4133c'
          }}>❤️</div>
        ))}
      </div>
      
      <div className="contenu">
        <header>
          <h1>Joyeux 1er Anniversaire de Mariage !</h1>
          <p className="sous-titre">Célébrons 365 jours de vie commune, d'amour et de bonheur</p>
        </header>
        
        <div className="compteur-temps">
          <div className="carte-temps">
            <span className="valeur-temps">{tempsEcoule.annees}</span>
            <span className="label-temps">Années</span>
          </div>
          <div className="carte-temps">
            <span className="valeur-temps">{tempsEcoule.jours}</span>
            <span className="label-temps">Jours</span>
          </div>
          <div className="carte-temps">
            <span className="valeur-temps">{tempsEcoule.heures}</span>
            <span className="label-temps">Heures</span>
          </div>
          <div className="carte-temps">
            <span className="valeur-temps">{tempsEcoule.minutes}</span>
            <span className="label-temps">Minutes</span>
          </div>
          <div className="carte-temps">
            <span className="valeur-temps">{tempsEcoule.secondes}</span>
            <span className="label-temps">Secondes</span>
          </div>
        </div>
        
        <div className="message-amour">
          <p>Il y a un an, nous avons uni nos vies pour toujours.</p>
          <p>Chaque jour passé à tes côtés est un cadeau précieux.</p>
          <p>Mon amour pour toi ne fait que grandir.</p>
        </div>
        
        <button 
          className="bouton-souvenirs"
          onClick={() => setAfficherGalerie(!afficherGalerie)}
        >
          {afficherGalerie ? "Cacher nos souvenirs" : "Voir nos souvenirs"}
        </button>
        
        {afficherGalerie && (
          <div className="galerie-souvenirs">
            <div className="controles-galerie">
              <button onClick={souvenirPrecedent}>←</button>
              <button onClick={souvenirSuivant}>→</button>
            </div>
            <div className="carte-souvenir">
              <div className="placeholder-image">
                <img src={souvenirs[souvenirActuel].photo}></img>
              </div>
              <h3>{souvenirs[souvenirActuel].titre}</h3>
              <p>{souvenirs[souvenirActuel].description}</p>
            </div>
          </div>
        )}
        
        <div className="citations-romantiques">
          <blockquote>"Un bon mariage est celui où chacun nomme l'autre gardien de sa solitude." - Rainer Maria Rilke</blockquote>
          <blockquote>"Le mariage n'est pas seulement l'amour. C'est cette petite tasse de café offerte chaque matin." - Barbara de Angelis</blockquote>
          <blockquote>"Le plus grand bonheur de la vie est la conviction d'être aimé pour soi-même." - Victor Hugo</blockquote>
        </div>
        
        <footer>
          <p>Créé avec ❤️ pour la plus merveilleuse des épouses</p>
          <p>Pour l'éternité, MOHAMED Sarah Murielle</p>
          <p className="date-anniversaire">8 Août 2024 - 8 Août 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default AnniversaireMariage;