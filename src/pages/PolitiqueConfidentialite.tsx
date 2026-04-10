import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PolitiqueConfidentialite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121212] font-sans selection:bg-[#81B93E] selection:text-white">
      <div className="bg-noise"></div>
      
      <nav className="bg-white/90 backdrop-blur-xl shadow-sm py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center">
          <Link to="/" className="inline-flex items-center space-x-2 text-blue-600 hover:text-[#81B93E] transition-colors font-bold uppercase tracking-widest text-sm">
            <ArrowLeft size={16} />
            <span>Retour à l'accueil</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-[#121212]">Politique de Confidentialité</h1>
        
        <div className="space-y-12 text-gray-700 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Collecte des données personnelles</h2>
            <p>
              Dans le cadre de l'utilisation de notre site <strong>valoris-energy.fr</strong>, nous pouvons être amenés à collecter des données personnelles vous concernant, notamment via notre formulaire de contact. Les données collectées sont les suivantes : nom, prénom, adresse e-mail, numéro de téléphone, et toute information que vous choisissez de nous communiquer dans votre message.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Utilisation des données</h2>
            <p>
              Les données personnelles collectées sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Répondre à vos demandes de contact et de renseignement.</li>
              <li>Vous proposer un accompagnement personnalisé dans vos projets de rénovation énergétique.</li>
              <li>Vous envoyer des informations commerciales, sous réserve de votre accord préalable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Conservation des données</h2>
            <p>
              Vos données personnelles sont conservées pendant la durée strictement nécessaire aux finalités pour lesquelles elles ont été collectées, conformément à la réglementation en vigueur (RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">4. Vos droits</h2>
            <p>
              Conformément à la loi "Informatique et Libertés" et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation du traitement, de portabilité et d'opposition concernant vos données personnelles.
            </p>
            <p className="mt-4">
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:contact@valoris-energy.fr" className="text-blue-600 hover:underline">contact@valoris-energy.fr</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">5. Cookies</h2>
            <p>
              Notre site peut utiliser des cookies pour améliorer votre expérience de navigation et réaliser des statistiques de visites. Vous pouvez configurer votre navigateur pour refuser l'installation des cookies.
            </p>
          </section>
        </div>
      </main>
      
      <footer className="bg-[#121212] text-white py-10 px-6 text-center">
        <p className="text-gray-500 font-medium text-sm">&copy; {new Date().getFullYear()} Valoris Energy. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
