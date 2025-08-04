// src/App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';

const AnniversaireFiancailles = () => {
  // Date de vos fiançailles (AAAA, MM, JJ)
  const dateFiancailles = new Date(2024, 5, 20); 
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
    { id: 1, titre: "La demande", description: "Le moment magique où nous avons dit oui pour toujours" },
    { id: 2, titre: "Nos premières vacances", description: "Découvrir de nouveaux endroits ensemble" },
    { id: 3, titre: "Célébration en famille", description: "Partager notre joie avec nos proches" },
    { id: 4, titre: "Notre premier Noël", description: "Fêter les moments spéciaux ensemble" }
  ];

  useEffect(() => {
    const calculerTempsEcoule = () => {
      const maintenant = new Date();
      const difference = maintenant.getTime() - dateFiancailles.getTime();
      
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
          <h1>Joyeux 1er Anniversaire de Fiançailles !</h1>
          <p className="sous-titre">Célébrons 365 jours d'amour, d'engagement et de beaux souvenirs</p>
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
          <p>Il y a un an, nous nous sommes promis de passer notre vie ensemble.</p>
          <p>Chaque instant depuis a été un pas merveilleux vers notre éternité.</p>
          <p>Je t'aime plus chaque jour qui passe.</p>
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
                <span>Photo : {souvenirs[souvenirActuel].titre}</span>
              </div>
              <h3>{souvenirs[souvenirActuel].titre}</h3>
              <p>{souvenirs[souvenirActuel].description}</p>
            </div>
          </div>
        )}
        
        <div className="citations-romantiques">
          <blockquote>"La meilleure chose à laquelle se tenir dans la vie, c'est l'un à l'autre." - Audrey Hepburn</blockquote>
          <blockquote>"J'ai vu que tu étais parfaite, alors je t'ai aimée. Puis j'ai vu que tu n'étais pas parfaite et je t'ai aimée encore plus." - Angelita Lim</blockquote>
          <blockquote>"L'amour ne compte pas les années, il compte les moments." - Proverbe français</blockquote>
        </div>
        
        <footer>
          <p>Créé avec ❤️ pour la plus incroyable femme</p>
          <p>Pour toujours à toi, MOHAMED Sarah Murielle</p>
          <p className="date-anniversaire">20 Juin 2024 - 20 Juin 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default AnniversaireFiancailles;