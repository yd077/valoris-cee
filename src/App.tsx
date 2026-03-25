/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Leaf, Building2, LineChart, ShieldCheck, ArrowRight, Menu, X, Handshake, ThermometerSun, Zap, Wind, Sun, CheckCircle2, Factory, TrendingDown, CloudRain } from 'lucide-react';

const HERO_IMAGES = [
  "https://www.lemondedelenergie.com/wp-content/uploads/2017/02/transition_energetique_26.jpg",
  "https://media.lesechos.com/api/v1/images/view/68ca51f4e837165a8f0bcd74/1280x720/01503179314821-web-tete.jpg",
  "https://les-energies-vertes.fr/blog/wp-content/uploads/2026/03/Comprendre-la-transition-energetique-definition-et-enjeux-3.jpg"
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121212] font-sans selection:bg-[#81B93E] selection:text-white overflow-x-hidden relative">
      {/* Luxury Grain Overlay */}
      <div className="bg-noise"></div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://puredigiweb.fr/wp-content/uploads/2026/03/unnamed-Photoroom.png" 
              alt="Valoris CEE Logo" 
              className="h-20 md:h-24 w-auto transition-all duration-500" 
              referrerPolicy="no-referrer" 
            />
          </div>
          
          {/* Desktop Nav */}
          <div className={`hidden md:flex space-x-8 lg:space-x-10 text-[10px] lg:text-xs tracking-[0.15em] uppercase font-bold transition-colors duration-500 ${isScrolled ? 'text-[#121212]' : 'text-white'}`}>
            <a href="#engagements" className="hover:text-[#81B93E] transition-colors">Engagements</a>
            <a href="#methodologie" className="hover:text-[#81B93E] transition-colors">Méthodologie</a>
            <a href="#services" className="hover:text-[#81B93E] transition-colors">Services</a>
            <a href="#partenaires" className="hover:text-[#81B93E] transition-colors">Partenaires</a>
            <a href="#contact" className="hover:text-[#81B93E] transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden transition-colors duration-500 ${isScrolled ? 'text-[#121212]' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-32 px-6 flex flex-col space-y-8 text-center"
          >
            <a href="#engagements" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif font-bold text-[#121212] hover:text-[#81B93E] transition-colors">Engagements</a>
            <a href="#methodologie" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif font-bold text-[#121212] hover:text-[#81B93E] transition-colors">Méthodologie</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif font-bold text-[#121212] hover:text-[#81B93E] transition-colors">Services</a>
            <a href="#partenaires" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif font-bold text-[#121212] hover:text-[#81B93E] transition-colors">Partenaires</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif font-bold text-[#121212] hover:text-[#81B93E] transition-colors">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative h-screen w-full overflow-hidden bg-black">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 2, ease: "easeInOut" },
              scale: { duration: 12, ease: "linear" }
            }}
            className="absolute inset-0"
          >
            <img
              src={HERO_IMAGES[currentImageIndex]}
              alt="Architecture"
              className="w-full h-full object-cover opacity-50"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="max-w-4xl mt-8 md:mt-0"
          >
            <h2 className="text-[#81B93E] text-[10px] sm:text-xs md:text-sm tracking-[0.2em] md:tracking-[0.4em] uppercase mb-8 md:mb-8 font-bold">
              L'Excellence en Rénovation Énergétique
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.2] mb-10 md:mb-8 drop-shadow-2xl">
              Valorisez votre transition <br className="hidden md:block" />
              énergétique
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-2xl font-medium max-w-3xl mx-auto mb-12 md:mb-12 tracking-wide leading-relaxed">
              Conseil, accompagnement et ingénierie financière pour les entreprises, collectivités et particuliers.
            </p>
            <motion.a
              href="#engagements"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center space-x-3 md:space-x-4 bg-transparent border-2 border-white/30 text-white px-6 py-3 md:px-10 md:py-5 rounded-full text-xs md:text-sm uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold hover:bg-white hover:text-[#121212] transition-all duration-500 backdrop-blur-sm"
            >
              <span>Découvrir notre expertise</span>
              <ChevronRight size={16} strokeWidth={1.5} />
            </motion.a>
          </motion.div>
        </div>
      </header>

      {/* Économies d'énergie */}
      <section className="py-32 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8 text-[#121212]">
              Économies d’énergie : <br/>
              <span className="text-[var(--color-emerald-900)]">Un levier essentiel pour aller vers la neutralité carbone !</span>
            </h2>
            <a href="#contact" className="inline-block bg-[#81B93E] text-white px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:bg-[#121212] transition-colors duration-500 mb-20 shadow-lg">
              On se lance ?
            </a>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div variants={fadeUp} className="p-8 bg-[#FAFAFA] rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-500">
              <TrendingDown className="text-[#81B93E] mx-auto mb-6" size={48} strokeWidth={1.5} />
              <p className="text-lg font-bold text-[#121212]">des consommations d’énergies fossiles</p>
            </motion.div>
            <motion.div variants={fadeUp} className="p-8 bg-[#FAFAFA] rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-500">
              <CloudRain className="text-[#81B93E] mx-auto mb-6" size={48} strokeWidth={1.5} />
              <p className="text-lg font-bold text-[#121212]">des émissions de gaz à effet de serre issues de la combustion d’énergie</p>
            </motion.div>
            <motion.div variants={fadeUp} className="p-8 bg-[#FAFAFA] rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-500">
              <Factory className="text-[#81B93E] mx-auto mb-6" size={48} strokeWidth={1.5} />
              <p className="text-lg font-bold text-[#121212]">de la récupération de chaleur fatale industrielle</p>
            </motion.div>
            <motion.div variants={fadeUp} className="p-8 bg-[#FAFAFA] rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow duration-500">
              <Zap className="text-[#81B93E] mx-auto mb-6" size={48} strokeWidth={1.5} />
              <p className="text-lg font-bold text-[#121212]">de la consommation finale d’énergie</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact PPE */}
      <section className="py-32 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-4xl mx-auto text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6 text-[#121212] uppercase">
               VOUS ÊTES DIRECTEMENT IMPACTÉ PAR LES OBJECTIFS ENERGETIQUES DE LA FRANCE
             </h2>
             <h3 className="text-[#81B93E] text-xl md:text-2xl font-bold tracking-[0.1em] uppercase mb-8">
               Comment vous accompagner Vers la neutralité carbone
             </h3>
             <div className="w-24 h-[2px] bg-[#81B93E] mx-auto mb-12"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://www.edater.fr/wp-content/uploads/2023/06/istock-1284339133-scaled.jpg" alt="Transition énergétique" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-[var(--color-emerald-900)]/20 mix-blend-multiply"></div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-white p-10 md:p-14 rounded-2xl shadow-lg border border-gray-100">
               <p className="text-gray-700 font-medium text-xl leading-relaxed mb-8">
                 Dans le cadre de la PPE (Programmation Pluriannuelle de l’Energie), la France a précisé sa stratégie pour l’énergie et le climat.
               </p>
               <p className="text-[var(--color-emerald-900)] font-bold text-2xl leading-relaxed mb-8 border-l-4 border-[#81B93E] pl-6">
                 Elle vise à atteindre la neutralité carbone à l’horizon 2050.
               </p>
               <p className="text-gray-700 font-medium text-xl leading-relaxed">
                 Pour aboutir à cet objectif ambitieux, mais néanmoins inéluctable, de réduction des émissions de gaz à effet de serre, il est nécessaire de réduire fortement les consommations d’énergie, en priorisant les plus carbonées.
               </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mécanismes incitatifs */}
      <section className="py-32 px-6 text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 z-0">
           <img src="https://www.hatari.fr/wp-content/uploads/2018/10/transition-%C3%A9nerg%C3%A9tique.jpg" alt="Mécanismes incitatifs" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
           <div className="absolute inset-0 bg-[var(--color-emerald-900)]/90 mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-emerald-900)]/80 via-[var(--color-emerald-900)]/60 to-[var(--color-emerald-900)]/90"></div>
         </div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[#81B93E]/10 blur-[150px] pointer-events-none z-0"></div>
         <div className="max-w-6xl mx-auto relative z-10">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
             <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8">Vous êtes impacté</h2>
             <p className="text-xl md:text-2xl font-medium text-white/90 mb-16 max-w-3xl mx-auto leading-relaxed">
               Pour accélérer la transition énergétique, l’Etat a mis en place un certain nombre de mécanismes incitatifs
             </p>
           </motion.div>
           
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={fadeUp} className="bg-white/5 p-10 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 flex flex-col justify-between h-full">
                 <h3 className="text-3xl font-serif font-bold mb-10">Les Certificats d’économies d’énergie</h3>
                 <a href="#contact" className="inline-block text-[#81B93E] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">En bénéficier &rarr;</a>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white/5 p-10 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 flex flex-col justify-between h-full">
                 <h3 className="text-3xl font-serif font-bold mb-10">Les aides publiques</h3>
                 <a href="#contact" className="inline-block text-[#81B93E] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">En bénéficier &rarr;</a>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-white/5 p-10 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 flex flex-col justify-between h-full">
                 <h3 className="text-3xl font-serif font-bold mb-10">Le tiers financement</h3>
                 <a href="#contact" className="inline-block text-[#81B93E] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">En bénéficier &rarr;</a>
              </motion.div>
           </motion.div>
         </div>
      </section>

      {/* Section Dédiée CEE */}
      <section className="py-32 px-6 bg-[#FAFAFA] border-t border-gray-200">
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/3 flex justify-center">
             <div className="relative">
               <div className="absolute inset-0 bg-[var(--color-emerald-900)]/10 blur-3xl rounded-full"></div>
               <img 
                 src="https://cdn.prod.website-files.com/66a1412dd5a5e17166b0ef32/686255927dc248a0aa4c2720_logo-cee.webp" 
                 alt="Logo CEE (Certificats d'Économies d'Énergie)" 
                 className="relative z-10 w-80 md:w-96 h-80 md:h-96 object-contain drop-shadow-xl"
                 referrerPolicy="no-referrer"
               />
             </div>
           </motion.div>
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-2/3">
             <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6 text-[#121212]">
               Le dispositif des <br/>
               <span className="text-[var(--color-emerald-900)]">Certificats d’Économies d’Énergie (CEE)</span>
             </h2>
             <div className="w-20 h-[2px] bg-[#81B93E] mb-8"></div>
             <p className="text-gray-700 font-medium text-xl leading-relaxed mb-6">
               Créé en 2005, le dispositif des CEE est l'un des principaux instruments de la politique de maîtrise de la demande énergétique en France.
             </p>
             <p className="text-gray-700 font-medium text-xl leading-relaxed mb-8">
               Il repose sur une obligation de réalisation d’économies d’énergie imposée par les pouvoirs publics aux vendeurs d’énergie. En tant que consommateur ou entreprise, vous pouvez bénéficier de primes importantes pour financer vos travaux d'efficacité énergétique.
             </p>
             <a href="#contact" className="inline-flex items-center space-x-3 text-[#81B93E] font-bold uppercase tracking-widest text-sm hover:text-[#121212] transition-colors">
               <span>Évaluer mon éligibilité</span>
               <ArrowRight size={16} strokeWidth={2} />
             </a>
           </motion.div>
         </div>
      </section>

      {/* L'efficience énergétique */}
      <section className="py-32 px-6 bg-white">
         <div className="max-w-7xl mx-auto">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16">
             <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-10 text-[#121212]">L’efficience énergétique dans votre quotidien</h2>
             <div className="w-24 h-[2px] bg-[#81B93E] mx-auto"></div>
           </motion.div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-6 bg-[#FAFAFA] p-10 md:p-14 rounded-2xl border border-gray-100 shadow-sm order-2 lg:order-1">
               <motion.div variants={fadeUp} className="flex items-start space-x-6">
                 <CheckCircle2 className="text-[#81B93E] flex-shrink-0 mt-1" size={32} strokeWidth={2} />
                 <p className="text-xl md:text-2xl font-bold text-[#121212]">Quelles actions mener pour réduire mes consommations ?</p>
               </motion.div>
               <motion.div variants={fadeUp} className="flex items-start space-x-6">
                 <CheckCircle2 className="text-[#81B93E] flex-shrink-0 mt-1" size={32} strokeWidth={2} />
                 <p className="text-xl md:text-2xl font-bold text-[#121212]">Quels sont les leviers financiers à ma disposition ?</p>
               </motion.div>
               <motion.div variants={fadeUp} className="flex items-start space-x-6">
                 <CheckCircle2 className="text-[#81B93E] flex-shrink-0 mt-1" size={32} strokeWidth={2} />
                 <p className="text-xl md:text-2xl font-bold text-[#121212]">Je manque de ressources en interne : comment déployer mes plans d’actions ?</p>
               </motion.div>
               <motion.div variants={fadeUp} className="flex items-start space-x-6">
                 <CheckCircle2 className="text-[#81B93E] flex-shrink-0 mt-1" size={32} strokeWidth={2} />
                 <p className="text-xl md:text-2xl font-bold text-[#121212]">Comment mesurer et piloter avec efficacité mon poste « énergie » ?</p>
               </motion.div>
             </motion.div>
             
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative h-[400px] lg:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2">
               <img src="https://formation.lamy-liaisons.fr/medias/7/4/0/transition-ecologique-energies-renouvelables-crise-environnementale-1047.webp" alt="Efficience énergétique" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 to-transparent"></div>
             </motion.div>
           </div>
           
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center">
             <h3 className="text-4xl font-serif font-bold text-[var(--color-emerald-900)] mb-10">Laissez-nous vous aider !</h3>
             <a href="#contact" className="inline-block bg-[#121212] text-white px-12 py-5 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:bg-[#81B93E] transition-colors duration-500 shadow-xl">
               Contactez-nous
             </a>
           </motion.div>
         </div>
      </section>

      {/* Engagements / Impact */}
      <section id="engagements" className="py-32 px-6 bg-[var(--color-emerald-900)] text-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeUp} 
            className="text-center mb-20"
          >
            <h3 className="text-[#81B93E] text-sm font-bold tracking-[0.3em] uppercase mb-6">Nos Engagements</h3>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-10">L'Avenir Énergétique</h2>
            <div className="w-24 h-[2px] bg-[#81B93E] mx-auto"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
          >
            <motion.div variants={fadeUp} className="flex flex-col items-center bg-white/5 p-10 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
              <div className="w-24 h-24 rounded-full bg-[#81B93E]/20 flex items-center justify-center mb-8 text-[#81B93E]">
                <Leaf size={40} strokeWidth={2} />
              </div>
              <h4 className="text-2xl font-serif font-bold mb-6">Transition Durable</h4>
              <p className="text-white/80 font-medium text-lg leading-relaxed">
                Nous privilégions des solutions à faible impact carbone pour construire l'avenir énergétique de demain.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col items-center bg-white/5 p-10 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
              <div className="w-24 h-24 rounded-full bg-[#81B93E]/20 flex items-center justify-center mb-8 text-[#81B93E]">
                <Sun size={40} strokeWidth={2} />
              </div>
              <h4 className="text-2xl font-serif font-bold mb-6">Énergies Vertes</h4>
              <p className="text-white/80 font-medium text-lg leading-relaxed">
                Valorisation des énergies renouvelables et optimisation des ressources naturelles.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col items-center bg-white/5 p-10 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500">
              <div className="w-24 h-24 rounded-full bg-[#81B93E]/20 flex items-center justify-center mb-8 text-[#81B93E]">
                <Wind size={40} strokeWidth={2} />
              </div>
              <h4 className="text-2xl font-serif font-bold mb-6">Efficacité Prouvée</h4>
              <p className="text-white/80 font-medium text-lg leading-relaxed">
                Des résultats mesurables et certifiés pour garantir la performance de vos installations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Méthodologie */}
      <section id="methodologie" className="py-32 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeUp} 
            className="text-center mb-24 flex flex-col items-center"
          >
            <img 
              src="https://puredigiweb.fr/wp-content/uploads/2026/03/unnamed-Photoroom.png" 
              alt="Logo Valoris CEE" 
              className="h-40 md:h-56 w-auto mb-8"
              referrerPolicy="no-referrer"
            />
            <h3 className="text-[#81B93E] text-sm font-bold tracking-[0.3em] uppercase mb-6">Notre Démarche</h3>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-10 text-[#121212]">Un Processus Maîtrisé</h2>
            <div className="w-24 h-[2px] bg-[#81B93E] mx-auto"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-12 relative"
          >
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[48px] left-[12%] right-[12%] h-[2px] bg-gray-100 z-0"></div>

            {[
              { num: "01", title: "Audit & Étude", desc: "Analyse approfondie de vos besoins et étude d'éligibilité." },
              { num: "02", title: "Ingénierie", desc: "Montage du dossier et optimisation du plan de financement." },
              { num: "03", title: "Réalisation", desc: "Assistance à maîtrise d'ouvrage et suivi des travaux." },
              { num: "04", title: "Valorisation", desc: "Obtention et valorisation de vos certificats d'économies d'énergie." }
            ].map((step, index) => (
              <motion.div key={index} variants={fadeUp} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-white border-2 border-gray-100 shadow-lg flex items-center justify-center mb-8 group-hover:border-[#81B93E] group-hover:scale-110 transition-all duration-500">
                  <span className="font-serif text-3xl font-bold text-[var(--color-emerald-900)] group-hover:text-[#81B93E] transition-colors duration-500">{step.num}</span>
                </div>
                <h4 className="text-2xl font-serif font-bold mb-4 text-[#121212]">{step.title}</h4>
                <p className="text-gray-600 font-medium text-base leading-relaxed px-2">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeUp} 
            className="text-center mb-24"
          >
            <h3 className="text-[#81B93E] text-sm font-bold tracking-[0.3em] uppercase mb-6">Nos Domaines d'Intervention</h3>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-10 text-[#121212]">Expertise & Services</h2>
            <div className="w-24 h-[2px] bg-[#81B93E] mx-auto"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
          >
            
            {/* Service 1 */}
            <motion.div variants={fadeUp} className="group bg-white p-10 md:p-14 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
              <div className="mb-10 text-[var(--color-emerald-800)] group-hover:text-[#81B93E] group-hover:scale-110 transition-all duration-500 origin-left">
                <CheckCircle2 size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#121212] group-hover:text-[#81B93E] transition-colors duration-500">Dispositif CEE</h3>
              <p className="text-gray-700 font-medium leading-relaxed mb-10 text-lg">
                Assistance administrative, technique et financière complète. Nous gérons l'étude d'éligibilité, le montage, le suivi et la valorisation de vos dossiers de Certificats d'Économies d'Énergie.
              </p>
              <ul className="space-y-5 text-base text-gray-800 font-semibold tracking-wide">
                <li className="flex items-center"><ArrowRight size={20} className="mr-4 text-[#81B93E]" strokeWidth={2} /> Étude d'éligibilité des opérations</li>
                <li className="flex items-center"><ArrowRight size={20} className="mr-4 text-[#81B93E]" strokeWidth={2} /> Montage et gestion des dossiers</li>
                <li className="flex items-center"><ArrowRight size={20} className="mr-4 text-[#81B93E]" strokeWidth={2} /> Valorisation pour le compte de tiers</li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeUp} className="group bg-white p-10 md:p-14 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
              <div className="mb-10 text-[var(--color-emerald-800)] group-hover:text-[#81B93E] group-hover:scale-110 transition-all duration-500 origin-left">
                <LineChart size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#121212] group-hover:text-[#81B93E] transition-colors duration-500">Négoce & Intermédiation</h3>
              <p className="text-gray-700 font-medium leading-relaxed mb-10 text-lg">
                En qualité de mandataire ou apporteur d'affaires, nous intervenons auprès des acteurs obligés et délégataires. Nous procédons également à l'achat, la vente et la gestion de CEE.
              </p>
              <ul className="space-y-5 text-base text-gray-800 font-semibold tracking-wide">
                <li className="flex items-center"><ArrowRight size={20} className="mr-4 text-[#81B93E]" strokeWidth={2} /> Mandataire et intermédiaire</li>
                <li className="flex items-center"><ArrowRight size={20} className="mr-4 text-[#81B93E]" strokeWidth={2} /> Achat et vente de certificats</li>
                <li className="flex items-center"><ArrowRight size={20} className="mr-4 text-[#81B93E]" strokeWidth={2} /> Optimisation financière</li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeUp} className="group bg-white p-10 md:p-14 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
              <div className="mb-10 text-[var(--color-emerald-800)] group-hover:text-[#81B93E] group-hover:scale-110 transition-all duration-500 origin-left">
                <ThermometerSun size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#121212] group-hover:text-[#81B93E] transition-colors duration-500">Conseil & Audits</h3>
              <p className="text-gray-700 font-medium leading-relaxed mb-10 text-lg">
                Notre expertise technique au service de votre performance. Nous réalisons des prestations de conseil pointues pour optimiser votre efficacité énergétique.
              </p>
              <ul className="space-y-5 text-base text-gray-800 font-semibold tracking-wide">
                <li className="flex items-center"><ArrowRight size={20} className="mr-4 text-[#81B93E]" strokeWidth={2} /> Conseil en efficacité énergétique</li>
                <li className="flex items-center"><ArrowRight size={20} className="mr-4 text-[#81B93E]" strokeWidth={2} /> Audits énergétiques réglementaires</li>
                <li className="flex items-center"><ArrowRight size={20} className="mr-4 text-[#81B93E]" strokeWidth={2} /> Études techniques approfondies</li>
              </ul>
            </motion.div>

            {/* Service 4 */}
            <motion.div variants={fadeUp} className="group bg-white p-10 md:p-14 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
              <div className="mb-10 text-[var(--color-emerald-800)] group-hover:text-[#81B93E] group-hover:scale-110 transition-all duration-500 origin-left">
                <Factory size={56} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#121212] group-hover:text-[#81B93E] transition-colors duration-500">Assistance à Maîtrise d'Ouvrage</h3>
              <p className="text-gray-700 font-medium leading-relaxed mb-10 text-lg">
                Un accompagnement sur-mesure pour sécuriser et mener à bien vos projets énergétiques, de la conception à la réalisation des travaux.
              </p>
              <ul className="space-y-5 text-base text-gray-800 font-semibold tracking-wide">
                <li className="flex items-center"><ArrowRight size={20} className="mr-4 text-[#81B93E]" strokeWidth={2} /> AMO projets énergétiques</li>
                <li className="flex items-center"><ArrowRight size={20} className="mr-4 text-[#81B93E]" strokeWidth={2} /> Mise en relation qualifiée</li>
                <li className="flex items-center"><ArrowRight size={20} className="mr-4 text-[#81B93E]" strokeWidth={2} /> Coordination des acteurs</li>
              </ul>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Partenariats d'Excellence */}
      <section id="partenaires" className="py-32 px-6 bg-[#121212] text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[#81B93E]/5 blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeUp} 
            className="text-center mb-24"
          >
            <h3 className="text-[#81B93E] text-sm font-bold tracking-[0.3em] uppercase mb-6">Réseau de Confiance</h3>
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-10">Nos Partenaires d'Excellence</h2>
            <div className="w-24 h-[2px] bg-[#81B93E] mx-auto"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* DDER */}
            <motion.div variants={fadeUp} className="group relative bg-[#1A1A1A] border border-white/10 p-10 md:p-14 hover:border-[#81B93E]/50 transition-all duration-700 overflow-hidden rounded-2xl">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#81B93E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-0"></div>
              
              <div className="flex items-center space-x-4 mb-8">
                <Handshake className="text-[#81B93E]" size={40} strokeWidth={1.5} />
                <div className="text-[#81B93E] text-sm tracking-[0.2em] uppercase font-bold">Partenariat Exclusif</div>
              </div>
              
              <h3 className="text-5xl md:text-6xl font-serif font-bold mb-6 tracking-wide">DDER</h3>
              <p className="text-gray-300 font-medium leading-loose mb-10 text-xl">
                Notre délégataire de confiance pour la valorisation de vos projets d'économies d'énergie.
              </p>
              
              <div className="bg-black/50 p-8 border-l-[4px] border-[#81B93E] backdrop-blur-sm rounded-r-lg">
                <p className="text-lg text-white font-medium italic leading-relaxed">
                  "Coup de Pouce Chauffage des Bâtiments Résidentiels Collectifs et Tertiaires"
                </p>
              </div>
            </motion.div>

            {/* ENERGYZ */}
            <motion.div variants={fadeUp} className="group relative bg-[#1A1A1A] border border-white/10 p-10 md:p-14 hover:border-[#81B93E]/50 transition-all duration-700 overflow-hidden rounded-2xl">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#81B93E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-0"></div>
              
              <div className="flex items-center space-x-4 mb-8">
                <Handshake className="text-[#81B93E]" size={40} strokeWidth={1.5} />
                <div className="text-[#81B93E] text-sm tracking-[0.2em] uppercase font-bold">Partenaire Auditeur</div>
              </div>
              
              <img 
                src="https://energyz.fr/wp-content/uploads/2026/03/Calque-0-200x91.webp" 
                alt="ENERGYZ Logo" 
                className="h-12 md:h-16 w-auto mb-6"
                referrerPolicy="no-referrer"
              />
              <p className="text-gray-300 font-medium leading-loose mb-10 text-xl">
                Notre expert en performance énergétique, basé à Lyon, accompagnant les entreprises dans leur transition.
              </p>
              
              <div className="bg-black/50 p-8 border-l-[4px] border-[#81B93E] backdrop-blur-sm rounded-r-lg">
                <p className="text-lg text-white font-medium italic leading-relaxed">
                  "Audit énergétique réglementaire pour les entreprises à Lyon"
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-32 px-6 bg-[#FAFAFA] text-center relative border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-[#121212]">Contactez-nous !</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-[var(--color-emerald-900)]">Une question ? Un projet ?</h3>
            <p className="text-gray-700 font-medium mb-12 text-xl md:text-2xl leading-loose">
              Nous vous répondons sous 24 heures !
            </p>
            <a
              href="mailto:contact@valoriscee.com"
              className="inline-block bg-[var(--color-emerald-900)] text-white px-14 py-6 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:bg-[#81B93E] hover:text-white transition-colors duration-500 shadow-xl hover:shadow-2xl"
            >
              Nous Contacter
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121212] text-white py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img src="https://puredigiweb.fr/wp-content/uploads/2026/03/unnamed-Photoroom.png" alt="Valoris CEE Logo" className="h-24 md:h-32 w-auto mb-6" referrerPolicy="no-referrer" />
            <p className="text-gray-400 font-medium leading-relaxed max-w-md text-lg">
              L'excellence en rénovation énergétique. Conseil, accompagnement et ingénierie financière pour la transition écologique.
            </p>
          </div>
          <div>
            <h4 className="text-[#81B93E] font-bold uppercase tracking-widest mb-8 text-sm">Navigation</h4>
            <ul className="space-y-4 font-medium text-gray-400">
              <li><a href="#engagements" className="hover:text-white transition-colors">Engagements</a></li>
              <li><a href="#methodologie" className="hover:text-white transition-colors">Méthodologie</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#partenaires" className="hover:text-white transition-colors">Partenaires</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#81B93E] font-bold uppercase tracking-widest mb-8 text-sm">Contact</h4>
            <ul className="space-y-4 font-medium text-gray-400">
              <li><a href="mailto:contact@valoriscee.com" className="hover:text-white transition-colors">contact@valoriscee.com</a></li>
              <li>France</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-500 font-medium text-sm">
          <p>&copy; {new Date().getFullYear()} Valoris CEE. Tous droits réservés.</p>
          <div className="space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
