import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function MentionsLegales() {
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
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-[#121212]">Mentions Légales</h1>
        
        <div className="space-y-12 text-gray-700 leading-relaxed text-lg">
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Éditeur du site</h2>
            <p>
              Le site <strong>valoris-energy.fr</strong> est édité par la société <strong>Valoris Energy</strong>.<br />
              Adresse : 125 rue du chat botté, 01700 Beynost<br />
              Email : <a href="mailto:contact@valoris-energy.fr" className="text-blue-600 hover:underline">contact@valoris-energy.fr</a><br />
              Téléphone : <a href="tel:0458280324" className="text-blue-600 hover:underline">04 58 28 03 24</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Hébergement</h2>
            <p>
              Ce site est hébergé par Google Cloud (via Google AI Studio).<br />
              Google LLC<br />
              1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p className="mt-4">
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">4. Responsabilité</h2>
            <p>
              Les informations proposées sur ce site le sont à titre indicatif. <strong>Valoris Energy</strong> s'efforce de maintenir ce site à jour. Néanmoins, <strong>Valoris Energy</strong> ne saurait garantir l'exactitude, la complétude, l'actualité des informations diffusées sur son site.
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
