/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Leaf, Building2, LineChart, ShieldCheck, ArrowRight, Menu, X, Handshake, ThermometerSun, Zap, Wind, Sun, CheckCircle2, Factory, TrendingDown, CloudRain, Phone, Send, Mail, MapPin } from 'lucide-react';

const HERO_IMAGES = [
  "https://les-energies-vertes.fr/blog/wp-content/uploads/2026/03/Comprendre-la-transition-energetique-definition-et-enjeux-3.jpg",
  "https://media.lesechos.com/api/v1/images/view/68ca51f4e837165a8f0bcd74/1280x720/01503179314821-web-tete.jpg",
  "https://www.lemondedelenergie.com/wp-content/uploads/2017/02/transition_energetique_26.jpg",
  "https://puredigiweb.fr/wp-content/uploads/2026/04/Gemini_Generated_Image_jswscmjswscmjsws-1.jpg"
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
              src="https://puredigiweb.fr/wp-content/uploads/2026/04/Gemini_Generated_Image_jhc5q6jhc5q6jhc5-Photoroom.png" 
              alt="Valoris CEE Logo" 
              className="h-20 md:h-24 w-auto transition-all duration-500" 
              referrerPolicy="no-referrer" 
            />
          </div>
          
          {/* Desktop Nav */}
          <div className={`hidden md:flex items-center space-x-8 lg:space-x-10 text-xs lg:text-sm tracking-[0.15em] uppercase font-bold transition-colors duration-500 ${isScrolled ? 'text-[#121212]' : 'text-white'}`}>
            <a href="#engagements" className="hover:text-[#81B93E] transition-colors">Engagements</a>
            <a href="#methodologie" className="hover:text-[#81B93E] transition-colors">Méthodologie</a>
            <a href="#services" className="hover:text-[#81B93E] transition-colors">Services</a>
            <a href="#partenaires" className="hover:text-[#81B93E] transition-colors">Partenaires</a>
            <a href="#contact" className="hover:text-[#81B93E] transition-colors">Contact</a>
            <a href="tel:+33762909663" className="flex items-center space-x-2 bg-[#81B93E] text-white px-4 py-2 rounded-full hover:bg-[#121212] transition-colors">
              <Phone size={14} />
              <span>+33 7 62 90 96 63</span>
            </a>
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
            <a href="tel:+33762909663" className="inline-flex items-center justify-center space-x-3 bg-[#81B93E] text-white px-8 py-4 rounded-full text-lg font-bold mt-4">
              <Phone size={20} />
              <span>+33 7 62 90 96 63</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative h-screen w-full overflow-hidden bg-black">
        <AnimatePresence>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1, x: 0, y: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1.15,
              x: currentImageIndex % 2 === 0 ? "-2%" : "2%",
              y: currentImageIndex % 2 === 0 ? "-1%" : "1%"
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              opacity: { duration: 2, ease: "easeInOut" },
              scale: { duration: 12, ease: "linear" },
              x: { duration: 12, ease: "linear" },
              y: { duration: 12, ease: "linear" }
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent mix-blend-screen" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="max-w-4xl mt-8 md:mt-0"
          >
            <h2 className="text-[#81B93E] text-sm sm:text-base md:text-sm tracking-[0.2em] md:tracking-[0.4em] uppercase mb-8 md:mb-8 font-extrabold md:font-bold">
              L'Excellence en Rénovation Énergétique
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.2] mb-10 md:mb-8 drop-shadow-2xl">
              Valorisez votre transition <br className="hidden md:block" />
              énergétique
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-2xl font-medium max-w-3xl mx-auto mb-12 md:mb-12 tracking-wide leading-relaxed">
              <strong>Conseil, accompagnement et ingénierie financière</strong> pour les entreprises, collectivités et particuliers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a
                href="#engagements"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-3 md:space-x-4 bg-transparent border-2 border-white/30 text-white px-6 py-3 md:px-10 md:py-5 rounded-full text-xs md:text-sm uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold hover:bg-white hover:text-[#121212] transition-all duration-500 backdrop-blur-sm"
              >
                <span>Découvrir notre expertise</span>
                <ChevronRight size={16} strokeWidth={1.5} />
              </motion.a>
              <motion.a
                href="tel:+33762909663"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-3 md:space-x-4 bg-[#81B93E] text-white px-6 py-3 md:px-10 md:py-5 rounded-full text-xs md:text-sm uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold hover:bg-white hover:text-[#121212] transition-all duration-500 shadow-lg"
              >
                <Phone size={16} strokeWidth={2} />
                <span>+33 7 62 90 96 63</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Économies d'énergie */}
      <section className="py-32 px-6 relative overflow-hidden bg-white text-center border-b border-blue-50">
        {/* Premium Light Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/60 via-white to-white pointer-events-none z-0"></div>
        <div className="absolute -bottom-[400px] -left-[400px] w-[800px] h-[800px] bg-gradient-to-tr from-blue-100/40 to-[#81B93E]/10 rounded-full blur-3xl pointer-events-none z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8 text-[#121212]">
              Économies d’énergie : <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#81B93E]">Un levier essentiel pour aller vers la neutralité carbone !</span>
            </h2>
            <div className="w-24 h-[3px] bg-gradient-to-r from-blue-400 to-[#81B93E] mx-auto mb-12"></div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-24">
              <a href="#contact" className="inline-block bg-gradient-to-r from-blue-600 to-[#81B93E] text-white px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-500">
                On se lance ?
              </a>
              <a href="tel:+33762909663" className="inline-flex items-center space-x-3 bg-[#81B93E] text-white px-10 py-4 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:bg-[#121212] hover:-translate-y-1 transition-all duration-500 shadow-lg hover:shadow-xl">
                <Phone size={18} />
                <span>+33 7 62 90 96 63</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="group relative p-10 bg-white rounded-3xl border border-blue-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-[#81B93E] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-50/50 flex items-center justify-center mb-8 group-hover:bg-blue-100 transition-colors duration-500">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                  <TrendingDown className="text-blue-500 group-hover:text-blue-600 transition-colors duration-500" size={40} strokeWidth={1.5} />
                </motion.div>
              </div>
              <p className="text-lg font-bold text-[#121212] leading-relaxed group-hover:text-blue-900 transition-colors duration-500">des consommations d’énergies fossiles</p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUp} className="group relative p-10 bg-white rounded-3xl border border-blue-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-[#81B93E] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-50/50 flex items-center justify-center mb-8 group-hover:bg-[#81B93E]/10 transition-colors duration-500">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}>
                  <CloudRain className="text-[#81B93E] group-hover:text-[#6a9932] transition-colors duration-500" size={40} strokeWidth={1.5} />
                </motion.div>
              </div>
              <p className="text-lg font-bold text-[#121212] leading-relaxed group-hover:text-blue-900 transition-colors duration-500">des émissions de gaz à effet de serre issues de la combustion d’énergie</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} className="group relative p-10 bg-white rounded-3xl border border-blue-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-[#81B93E] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-50/50 flex items-center justify-center mb-8 group-hover:bg-blue-100 transition-colors duration-500">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}>
                  <Factory className="text-blue-500 group-hover:text-blue-600 transition-colors duration-500" size={40} strokeWidth={1.5} />
                </motion.div>
              </div>
              <p className="text-lg font-bold text-[#121212] leading-relaxed group-hover:text-blue-900 transition-colors duration-500">de la récupération de chaleur fatale industrielle</p>
            </motion.div>

            {/* Card 4 */}
            <motion.div variants={fadeUp} className="group relative p-10 bg-white rounded-3xl border border-blue-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-[#81B93E] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-50/50 flex items-center justify-center mb-8 group-hover:bg-[#81B93E]/10 transition-colors duration-500">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}>
                  <Zap className="text-[#81B93E] group-hover:text-[#6a9932] transition-colors duration-500" size={40} strokeWidth={1.5} />
                </motion.div>
              </div>
              <p className="text-lg font-bold text-[#121212] leading-relaxed group-hover:text-blue-900 transition-colors duration-500">de la consommation finale d’énergie</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact PPE */}
      <section className="py-32 px-6 relative overflow-hidden bg-white">
        {/* Premium Light Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-50/80 via-white to-white pointer-events-none z-0"></div>
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#81B93E]/5 rounded-full blur-3xl pointer-events-none z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="max-w-4xl mx-auto text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6 text-[#121212] uppercase">
               VOUS ÊTES DIRECTEMENT IMPACTÉ PAR LES OBJECTIFS ENERGETIQUES DE LA FRANCE
             </h2>
             <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#81B93E] to-emerald-400 text-xl md:text-2xl font-bold tracking-[0.1em] uppercase mb-8">
               Comment vous accompagner Vers la neutralité carbone
             </h3>
             <div className="w-24 h-[2px] bg-[#81B93E] mx-auto mb-12"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
              <img src="https://www.edater.fr/wp-content/uploads/2023/06/istock-1284339133-scaled.jpg" alt="Transition énergétique" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-emerald-900)]/60 to-transparent mix-blend-multiply"></div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="bg-white/80 backdrop-blur-xl p-6 sm:p-10 md:p-14 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-50 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-[#81B93E]"></div>
               <p className="text-gray-700 font-medium text-lg sm:text-xl leading-relaxed mb-8 relative z-10 text-justify md:text-left">
                 Dans le cadre de la <strong>PPE (Programmation Pluriannuelle de l’Energie)</strong>, la France a précisé sa <strong>stratégie pour l’énergie et le climat</strong>.
               </p>
               
               <div className="bg-gradient-to-r from-blue-50/50 to-white p-5 sm:p-8 rounded-2xl border-l-4 border-[#81B93E] shadow-sm mb-8 relative z-10 group hover:shadow-md transition-all duration-300">
                 <p className="text-[var(--color-emerald-900)] font-bold text-xl sm:text-2xl leading-relaxed mb-4">
                   Objectif France : <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81B93E] to-emerald-400">Neutralité carbone</span> à l’horizon 2050.
                 </p>
                 <p className="text-blue-900 font-semibold text-base sm:text-lg leading-relaxed">
                   Bénéficiez du <span className="inline-block whitespace-nowrap bg-blue-100/50 px-2 sm:px-3 py-1 rounded-md text-blue-900 uppercase tracking-wider font-bold mx-1 my-1 border border-blue-200 group-hover:bg-blue-100 transition-colors text-sm sm:text-base">Coup de pouce</span> pour accélérer votre transition et financer vos travaux d'efficacité énergétique !
                 </p>
               </div>

               <p className="text-gray-700 font-medium text-lg sm:text-xl leading-relaxed relative z-10 text-justify md:text-left">
                 Pour aboutir à cet objectif ambitieux, mais néanmoins inéluctable, de <strong>réduction des émissions de gaz à effet de serre</strong>, il est nécessaire de <strong>réduire fortement les consommations d’énergie</strong>, en priorisant les plus carbonées.
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
           <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-emerald-900)]/80 via-[#121212]/80 to-[var(--color-emerald-900)]/90"></div>
         </div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-400/10 blur-[150px] pointer-events-none z-0"></div>
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#81B93E]/10 blur-[120px] pointer-events-none z-0"></div>
         
         <div className="max-w-7xl mx-auto relative z-10">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
             <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8">Vous êtes impacté</h2>
             <p className="text-xl md:text-2xl font-medium text-white/90 mb-16 max-w-3xl mx-auto leading-relaxed">
               Pour accélérer la <strong>transition énergétique</strong>, l’Etat a mis en place un certain nombre de <strong>mécanismes incitatifs</strong>
             </p>
           </motion.div>
           
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div variants={fadeUp} className="group relative bg-white/5 p-10 lg:p-12 rounded-3xl border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-blue-400/50 transition-all duration-700 flex flex-col justify-between items-center text-center h-full overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                 <h3 className="text-3xl font-serif font-bold mb-10 relative z-10">Les Certificats d’économies d’énergie</h3>
                 <a href="#contact" className="inline-flex items-center justify-center space-x-2 text-[#81B93E] font-bold uppercase tracking-widest text-sm hover:text-blue-300 transition-colors relative z-10 group-hover:translate-x-2 duration-300 w-full">
                   <span>En bénéficier</span>
                   <ArrowRight size={16} />
                 </a>
              </motion.div>
              <motion.div variants={fadeUp} className="group relative bg-white/5 p-10 lg:p-12 rounded-3xl border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-blue-400/50 transition-all duration-700 flex flex-col justify-between items-center text-center h-full overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                 <h3 className="text-3xl font-serif font-bold mb-10 relative z-10">Les aides publiques</h3>
                 <a href="#contact" className="inline-flex items-center justify-center space-x-2 text-[#81B93E] font-bold uppercase tracking-widest text-sm hover:text-blue-300 transition-colors relative z-10 group-hover:translate-x-2 duration-300 w-full">
                   <span>En bénéficier</span>
                   <ArrowRight size={16} />
                 </a>
              </motion.div>
              <motion.div variants={fadeUp} className="group relative bg-white/5 p-10 lg:p-12 rounded-3xl border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-blue-400/50 transition-all duration-700 flex flex-col justify-between items-center text-center h-full overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                 <h3 className="text-3xl font-serif font-bold mb-10 relative z-10">Le tiers financement</h3>
                 <a href="#contact" className="inline-flex items-center justify-center space-x-2 text-[#81B93E] font-bold uppercase tracking-widest text-sm hover:text-blue-300 transition-colors relative z-10 group-hover:translate-x-2 duration-300 w-full">
                   <span>En bénéficier</span>
                   <ArrowRight size={16} />
                 </a>
              </motion.div>
           </motion.div>
         </div>
      </section>

      {/* Section Dédiée CEE */}
      <section className="py-32 px-6 relative overflow-hidden bg-white border-t border-blue-50 text-center md:text-left">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-50/60 via-white to-white pointer-events-none z-0"></div>
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
         
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16 relative z-10">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-1/3 flex justify-center">
             <div className="relative group">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-[#81B93E]/20 blur-3xl rounded-full group-hover:scale-110 transition-transform duration-700"></div>
               <img 
                 src="https://cdn.prod.website-files.com/66a1412dd5a5e17166b0ef32/686255927dc248a0aa4c2720_logo-cee.webp" 
                 alt="Logo CEE (Certificats d'Économies d'Énergie)" 
                 className="relative z-10 w-80 md:w-96 h-80 md:h-96 object-contain drop-shadow-2xl group-hover:-translate-y-2 transition-transform duration-700"
                 referrerPolicy="no-referrer"
               />
             </div>
           </motion.div>
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
             <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6 text-[#121212]">
               Le dispositif des <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-emerald-900)] to-blue-600">Certificats d’Économies d’Énergie (CEE)</span>
             </h2>
             <div className="w-20 h-[3px] bg-gradient-to-r from-[#81B93E] to-blue-400 mb-8 mx-auto md:mx-0"></div>
             <p className="text-gray-700 font-medium text-xl leading-relaxed mb-6 text-justify md:text-left">
               Créé en 2005, le <strong>dispositif des CEE</strong> est l'un des principaux instruments de la politique de <strong>maîtrise de la demande énergétique</strong> en France.
             </p>
             <p className="text-gray-700 font-medium text-xl leading-relaxed mb-8 text-justify md:text-left">
               Il repose sur une <strong>obligation de réalisation d’économies d’énergie</strong> imposée par les pouvoirs publics aux vendeurs d’énergie. En tant que consommateur ou entreprise, vous pouvez bénéficier de <strong>primes importantes</strong> pour <strong>financer vos travaux d'efficacité énergétique</strong>.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-8 w-full">
               <a href="#contact" className="inline-flex items-center justify-center space-x-3 text-blue-600 font-bold uppercase tracking-widest text-sm hover:text-[#121212] transition-colors group">
                 <span>Évaluer mon éligibilité</span>
                 <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-2 transition-transform" />
               </a>
               <a href="tel:+33762909663" className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-[#81B93E] text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-300">
                 <Phone size={14} />
                 <span>+33 7 62 90 96 63</span>
               </a>
             </div>
           </motion.div>
         </div>
      </section>

      {/* L'efficience énergétique */}
      <section className="py-32 px-6 relative overflow-hidden bg-white">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-50/80 via-white to-white pointer-events-none z-0"></div>
         <div className="max-w-7xl mx-auto relative z-10">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16">
             <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-10 text-[#121212]">L’efficience énergétique dans votre quotidien</h2>
             <div className="w-24 h-[3px] bg-gradient-to-r from-blue-400 to-[#81B93E] mx-auto"></div>
           </motion.div>
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-6 order-2 lg:order-1">
               <motion.div variants={fadeUp} className="flex items-start space-x-6 bg-white p-8 rounded-2xl border border-blue-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:-translate-y-1 transition-all duration-300 group">
                 <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={32} strokeWidth={2} />
                 <p className="text-xl md:text-2xl font-bold text-[#121212]">Quelles actions mener pour réduire mes consommations ?</p>
               </motion.div>
               <motion.div variants={fadeUp} className="flex items-start space-x-6 bg-white p-8 rounded-2xl border border-blue-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:-translate-y-1 transition-all duration-300 group">
                 <CheckCircle2 className="text-[#81B93E] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={32} strokeWidth={2} />
                 <p className="text-xl md:text-2xl font-bold text-[#121212]">Quels sont les leviers financiers à ma disposition ?</p>
               </motion.div>
               <motion.div variants={fadeUp} className="flex items-start space-x-6 bg-white p-8 rounded-2xl border border-blue-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:-translate-y-1 transition-all duration-300 group">
                 <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={32} strokeWidth={2} />
                 <p className="text-xl md:text-2xl font-bold text-[#121212]">Je manque de ressources en interne : comment déployer mes plans d’actions ?</p>
               </motion.div>
               <motion.div variants={fadeUp} className="flex items-start space-x-6 bg-white p-8 rounded-2xl border border-blue-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:-translate-y-1 transition-all duration-300 group">
                 <CheckCircle2 className="text-[#81B93E] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={32} strokeWidth={2} />
                 <p className="text-xl md:text-2xl font-bold text-[#121212]">Comment mesurer et piloter avec efficacité mon poste « énergie » ?</p>
               </motion.div>
             </motion.div>
             
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="relative h-[400px] lg:h-full min-h-[500px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] order-1 lg:order-2 group">
               <img src="https://formation.lamy-liaisons.fr/medias/7/4/0/transition-ecologique-energies-renouvelables-crise-environnementale-1047.webp" alt="Efficience énergétique" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent"></div>
             </motion.div>
           </div>
           
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center">
             <h3 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#81B93E] mb-10">Laissez-nous vous aider !</h3>
             <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
               <a href="#contact" className="inline-block bg-[#121212] text-white px-12 py-5 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:bg-blue-600 hover:-translate-y-1 transition-all duration-500 shadow-xl">
                 Contactez-nous
               </a>
               <a href="tel:+33762909663" className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-[#81B93E] text-white px-12 py-5 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-500 shadow-xl">
                 <Phone size={18} />
                 <span>+33 7 62 90 96 63</span>
               </a>
             </div>
           </motion.div>
         </div>
      </section>

      {/* Engagements / Impact */}
      <section id="engagements" className="py-32 px-6 relative overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop" alt="Nature background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#121212]/95 via-[var(--color-emerald-900)]/90 to-[#121212]/95 mix-blend-multiply"></div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#81B93E]/50 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#81B93E]/50 to-transparent z-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-white">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeUp} 
            className="text-center mb-24"
          >
            <h3 className="text-[#81B93E] text-sm font-bold tracking-[0.3em] uppercase mb-6 flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-[#81B93E]/50"></span>
              Nos Engagements
              <span className="w-12 h-px bg-[#81B93E]/50"></span>
            </h3>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-10">L'Avenir <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81B93E] to-emerald-400">Énergétique</span></h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center"
          >
            {/* Card 1 */}
            <motion.div variants={fadeUp} className="group relative flex flex-col items-center bg-white/5 p-10 lg:p-12 rounded-3xl border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-[#81B93E]/50 transition-all duration-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#81B93E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-[#81B93E]/20 to-transparent border border-white/10 flex items-center justify-center mb-8 text-[#81B93E] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_0_30px_rgba(129,185,62,0.2)] group-hover:shadow-[0_0_40px_rgba(129,185,62,0.4)]">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                  <Leaf size={40} strokeWidth={1.5} />
                </motion.div>
              </div>
              <h4 className="text-2xl font-serif font-bold mb-6 relative z-10">Transition Durable</h4>
              <p className="text-white/70 font-medium text-lg leading-relaxed relative z-10">
                Nous privilégions des solutions à faible impact carbone pour construire l'avenir énergétique de demain.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeUp} className="group relative flex flex-col items-center bg-white/5 p-10 lg:p-12 rounded-3xl border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-[#81B93E]/50 transition-all duration-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#81B93E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-[#81B93E]/20 to-transparent border border-white/10 flex items-center justify-center mb-8 text-[#81B93E] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-[0_0_30px_rgba(129,185,62,0.2)] group-hover:shadow-[0_0_40px_rgba(129,185,62,0.4)]">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
                  <Sun size={40} strokeWidth={1.5} />
                </motion.div>
              </div>
              <h4 className="text-2xl font-serif font-bold mb-6 relative z-10">Énergies Vertes</h4>
              <p className="text-white/70 font-medium text-lg leading-relaxed relative z-10">
                Valorisation des énergies renouvelables et optimisation des ressources naturelles.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeUp} className="group relative flex flex-col items-center bg-white/5 p-10 lg:p-12 rounded-3xl border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-[#81B93E]/50 transition-all duration-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#81B93E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-[#81B93E]/20 to-transparent border border-white/10 flex items-center justify-center mb-8 text-[#81B93E] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_0_30px_rgba(129,185,62,0.2)] group-hover:shadow-[0_0_40px_rgba(129,185,62,0.4)]">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}>
                  <Wind size={40} strokeWidth={1.5} />
                </motion.div>
              </div>
              <h4 className="text-2xl font-serif font-bold mb-6 relative z-10">Efficacité Prouvée</h4>
              <p className="text-white/70 font-medium text-lg leading-relaxed relative z-10">
                Des résultats mesurables et certifiés pour garantir la performance de vos installations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Méthodologie */}
      <section id="methodologie" className="py-32 px-6 relative overflow-hidden bg-white border-b border-blue-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/60 via-white to-white pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeUp} 
            className="text-center mb-24 flex flex-col items-center"
          >
            <img 
              src="https://puredigiweb.fr/wp-content/uploads/2026/04/Gemini_Generated_Image_jhc5q6jhc5q6jhc5-Photoroom.png" 
              alt="Logo Valoris CEE" 
              className="h-56 md:h-72 w-auto mb-8"
              referrerPolicy="no-referrer"
            />
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#81B93E] text-sm font-bold tracking-[0.3em] uppercase mb-6">Notre Démarche</h3>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-10 text-[#121212]">Un Processus Maîtrisé</h2>
            <div className="w-24 h-[3px] bg-gradient-to-r from-blue-400 to-[#81B93E] mx-auto"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 lg:gap-12 relative"
          >
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[48px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-blue-100 via-[#81B93E]/50 to-blue-100 z-0"></div>

            {[
              { num: "01", title: "Audit & Étude", desc: "Analyse approfondie de vos besoins et étude d'éligibilité." },
              { num: "02", title: "Ingénierie", desc: "Montage du dossier et optimisation du plan de financement." },
              { num: "03", title: "Réalisation", desc: "Assistance à maîtrise d'ouvrage et suivi des travaux." },
              { num: "04", title: "Valorisation", desc: "Obtention et valorisation de vos certificats d'économies d'énergie." }
            ].map((step, index) => (
              <motion.div key={index} variants={fadeUp} className="relative z-10 flex flex-col items-center text-center group">
                {/* Desktop Arrow */}
                {index < 3 && (
                  <div className="hidden md:flex absolute top-[36px] -right-[1.5rem] lg:-right-[2rem] translate-x-1/2 z-20 space-x-[-8px] lg:space-x-[-12px]">
                    <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}><ChevronRight className="text-blue-300" size={24} strokeWidth={2.5} /></motion.div>
                    <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}><ChevronRight className="text-blue-400" size={24} strokeWidth={2.5} /></motion.div>
                    <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}><ChevronRight className="text-[#81B93E]" size={24} strokeWidth={2.5} /></motion.div>
                  </div>
                )}
                
                <div className="w-24 h-24 rounded-full bg-white border border-blue-100 shadow-[0_10px_30px_rgba(59,130,246,0.1)] flex items-center justify-center mb-8 group-hover:border-[#81B93E] group-hover:shadow-[0_10px_30px_rgba(129,185,62,0.2)] group-hover:scale-110 transition-all duration-500 relative z-10">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="font-serif text-3xl font-bold text-blue-900 group-hover:text-[#81B93E] transition-colors duration-500 relative z-10">{step.num}</span>
                </div>
                <h4 className="text-2xl font-serif font-bold mb-4 text-[#121212]">{step.title}</h4>
                <p className="text-gray-600 font-medium text-base leading-relaxed px-2">
                  {step.desc}
                </p>

                {/* Mobile Arrow (Vertical) */}
                {index < 3 && (
                  <div className="md:hidden flex flex-col items-center justify-center mt-8 space-y-[-8px]">
                    <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}><ChevronRight className="text-blue-300 rotate-90" size={24} strokeWidth={2.5} /></motion.div>
                    <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}><ChevronRight className="text-blue-400 rotate-90" size={24} strokeWidth={2.5} /></motion.div>
                    <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}><ChevronRight className="text-[#81B93E] rotate-90" size={24} strokeWidth={2.5} /></motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 px-6 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/80 via-white to-white pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeUp} 
            className="text-center mb-24"
          >
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#81B93E] text-sm font-bold tracking-[0.3em] uppercase mb-6">Nos Domaines d'Intervention</h3>
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-10 text-[#121212]">Expertise & Services</h2>
            <div className="w-24 h-[3px] bg-gradient-to-r from-blue-400 to-[#81B93E] mx-auto"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
          >
            
            {/* Service 1 */}
            <motion.div variants={fadeUp} className="group relative bg-white p-10 md:p-14 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:-translate-y-2 transition-all duration-500 border border-blue-50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-[#81B93E] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-10 text-blue-500 group-hover:text-[#81B93E] group-hover:scale-110 transition-all duration-500 origin-center flex justify-center">
                <CheckCircle2 size={56} strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#121212] group-hover:text-blue-600 transition-colors duration-500 text-center">Dispositif CEE</h3>
              <p className="text-gray-700 font-medium leading-relaxed mb-10 text-lg text-center">
                <strong>Assistance administrative, technique et financière complète</strong>. Nous gérons l'étude d'éligibilité, le montage, le suivi et la valorisation de vos dossiers de Certificats d'Économies d'Énergie.
              </p>
              <ul className="space-y-5 text-base text-gray-800 font-semibold tracking-wide">
                <li className="flex items-center justify-center text-center"><ArrowRight size={20} className="mr-3 text-[#81B93E] shrink-0" strokeWidth={2} /> <span>Étude d'éligibilité des opérations</span></li>
                <li className="flex items-center justify-center text-center"><ArrowRight size={20} className="mr-3 text-[#81B93E] shrink-0" strokeWidth={2} /> <span>Montage et gestion des dossiers</span></li>
                <li className="flex items-center justify-center text-center"><ArrowRight size={20} className="mr-3 text-[#81B93E] shrink-0" strokeWidth={2} /> <span>Valorisation pour le compte de tiers</span></li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeUp} className="group relative bg-white p-10 md:p-14 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:-translate-y-2 transition-all duration-500 border border-blue-50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-[#81B93E] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="mb-10 text-blue-500 group-hover:text-[#81B93E] group-hover:scale-110 transition-all duration-500 origin-center flex justify-center">
                <LineChart size={56} strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#121212] group-hover:text-blue-600 transition-colors duration-500 text-center">Négoce & Intermédiation</h3>
              <p className="text-gray-700 font-medium leading-relaxed mb-10 text-lg text-center">
                En qualité de <strong>mandataire ou apporteur d'affaires</strong>, nous intervenons auprès des acteurs obligés et délégataires. Nous procédons également à <strong>l'achat, la vente et la gestion de CEE</strong>.
              </p>
              <ul className="space-y-5 text-base text-gray-800 font-semibold tracking-wide">
                <li className="flex items-center justify-center text-center"><ArrowRight size={20} className="mr-3 text-[#81B93E] shrink-0" strokeWidth={2} /> <span>Mandataire et intermédiaire</span></li>
                <li className="flex items-center justify-center text-center"><ArrowRight size={20} className="mr-3 text-[#81B93E] shrink-0" strokeWidth={2} /> <span>Achat et vente de certificats</span></li>
                <li className="flex items-center justify-center text-center"><ArrowRight size={20} className="mr-3 text-[#81B93E] shrink-0" strokeWidth={2} /> <span>Optimisation financière</span></li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeUp} className="group relative bg-white p-10 md:p-14 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:-translate-y-2 transition-all duration-500 border border-blue-50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-[#81B93E] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} className="mb-10 text-blue-500 group-hover:text-[#81B93E] group-hover:scale-110 transition-all duration-500 origin-center flex justify-center">
                <ThermometerSun size={56} strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#121212] group-hover:text-blue-600 transition-colors duration-500 text-center">Conseil & Audits</h3>
              <p className="text-gray-700 font-medium leading-relaxed mb-10 text-lg text-center">
                Notre <strong>expertise technique</strong> au service de votre performance. Nous réalisons des <strong>prestations de conseil pointues</strong> pour optimiser votre efficacité énergétique.
              </p>
              <ul className="space-y-5 text-base text-gray-800 font-semibold tracking-wide">
                <li className="flex items-center justify-center text-center"><ArrowRight size={20} className="mr-3 text-[#81B93E] shrink-0" strokeWidth={2} /> <span>Conseil en efficacité énergétique</span></li>
                <li className="flex items-center justify-center text-center"><ArrowRight size={20} className="mr-3 text-[#81B93E] shrink-0" strokeWidth={2} /> <span>Audits énergétiques réglementaires</span></li>
                <li className="flex items-center justify-center text-center"><ArrowRight size={20} className="mr-3 text-[#81B93E] shrink-0" strokeWidth={2} /> <span>Études techniques approfondies</span></li>
              </ul>
            </motion.div>

            {/* Service 4 */}
            <motion.div variants={fadeUp} className="group relative bg-white p-10 md:p-14 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] hover:-translate-y-2 transition-all duration-500 border border-blue-50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-[#81B93E] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} className="mb-10 text-blue-500 group-hover:text-[#81B93E] group-hover:scale-110 transition-all duration-500 origin-center flex justify-center">
                <Factory size={56} strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#121212] group-hover:text-blue-600 transition-colors duration-500 text-center">Assistance à Maîtrise d'Ouvrage</h3>
              <p className="text-gray-700 font-medium leading-relaxed mb-10 text-lg text-center">
                Un <strong>accompagnement sur-mesure</strong> pour <strong>sécuriser et mener à bien vos projets</strong> énergétiques, de la conception à la réalisation des travaux.
              </p>
              <ul className="space-y-5 text-base text-gray-800 font-semibold tracking-wide">
                <li className="flex items-center justify-center text-center"><ArrowRight size={20} className="mr-3 text-[#81B93E] shrink-0" strokeWidth={2} /> <span>AMO projets énergétiques</span></li>
                <li className="flex items-center justify-center text-center"><ArrowRight size={20} className="mr-3 text-[#81B93E] shrink-0" strokeWidth={2} /> <span>Mise en relation qualifiée</span></li>
                <li className="flex items-center justify-center text-center"><ArrowRight size={20} className="mr-3 text-[#81B93E] shrink-0" strokeWidth={2} /> <span>Coordination des acteurs</span></li>
              </ul>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Partenariats d'Excellence */}
      <section id="partenaires" className="py-32 px-6 bg-[#121212] text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#121212] to-[#121212] pointer-events-none z-0"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[#81B93E]/5 blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeUp} 
            className="text-center mb-24"
          >
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#81B93E] text-sm font-bold tracking-[0.3em] uppercase mb-6">Réseau de Confiance</h3>
            <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-10">Nos Partenaires d'Excellence</h2>
            <div className="w-24 h-[3px] bg-gradient-to-r from-blue-400 to-[#81B93E] mx-auto"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* DDER */}
            <motion.div variants={fadeUp} className="group relative bg-[#1A1A1A] border border-white/10 p-10 md:p-14 hover:border-blue-500/50 transition-all duration-700 overflow-hidden rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] text-center md:text-left">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-0"></div>
              <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full group-hover:bg-blue-500/10 transition-colors duration-700 pointer-events-none"></div>
              
              <div className="flex items-center justify-center md:justify-start space-x-4 mb-8 relative z-10">
                <Handshake className="text-blue-400 group-hover:text-blue-300 transition-colors duration-500" size={40} strokeWidth={1.5} />
                <div className="text-blue-400 text-sm tracking-[0.2em] uppercase font-bold group-hover:text-blue-300 transition-colors duration-500">Partenariat Exclusif</div>
              </div>
              
              <div className="mb-6 bg-white/95 p-4 rounded-xl inline-block shadow-lg relative z-10">
                <img 
                  src="https://dder.fr/wp-content/uploads/2018/05/logo-header-retina.png" 
                  alt="DDER Logo" 
                  className="h-10 md:h-12 w-auto mx-auto md:mx-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-gray-300 font-medium leading-loose mb-10 text-xl relative z-10 text-center md:text-left">
                Notre délégataire de confiance pour la valorisation de vos projets d'économies d'énergie.
              </p>
              
              <div className="bg-black/50 p-8 border-l-[4px] border-blue-500 backdrop-blur-sm rounded-r-lg relative z-10 group-hover:border-blue-400 transition-colors duration-500">
                <p className="text-lg text-white font-medium italic leading-relaxed">
                  "Coup de Pouce Chauffage des Bâtiments Résidentiels Collectifs et Tertiaires"
                </p>
              </div>
            </motion.div>

            {/* ENERGYZ */}
            <motion.div variants={fadeUp} className="group relative bg-[#1A1A1A] border border-white/10 p-10 md:p-14 hover:border-[#81B93E]/50 transition-all duration-700 overflow-hidden rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(129,185,62,0.15)] text-center md:text-left">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#81B93E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-0"></div>
              <div className="absolute inset-0 bg-[#81B93E]/5 blur-3xl rounded-full group-hover:bg-[#81B93E]/10 transition-colors duration-700 pointer-events-none"></div>
              
              <div className="flex items-center justify-center md:justify-start space-x-4 mb-8 relative z-10">
                <Handshake className="text-[#81B93E] group-hover:text-[#92d147] transition-colors duration-500" size={40} strokeWidth={1.5} />
                <div className="text-[#81B93E] text-sm tracking-[0.2em] uppercase font-bold group-hover:text-[#92d147] transition-colors duration-500">Partenaire Auditeur</div>
              </div>
              
              <img 
                src="https://energyz.fr/wp-content/uploads/2026/03/Calque-0-200x91.webp" 
                alt="ENERGYZ Logo" 
                className="h-12 md:h-16 w-auto mb-6 relative z-10 mx-auto md:mx-0"
                referrerPolicy="no-referrer"
              />
              <p className="text-gray-300 font-medium leading-loose mb-10 text-xl relative z-10 text-center md:text-left">
                Notre expert en performance énergétique, basé à Lyon, accompagnant les entreprises dans leur transition.
              </p>
              
              <div className="bg-black/50 p-8 border-l-[4px] border-[#81B93E] backdrop-blur-sm rounded-r-lg relative z-10 group-hover:border-[#92d147] transition-colors duration-500">
                <p className="text-lg text-white font-medium italic leading-relaxed">
                  "Audit énergétique réglementaire pour les entreprises à Lyon"
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-32 px-6 bg-white relative border-t border-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/60 via-white to-white pointer-events-none z-0"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#81B93E] text-sm font-bold tracking-[0.3em] uppercase mb-6">Contactez-nous</h3>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-[#121212]">Une question ? Un projet ?</h2>
            <div className="w-24 h-[3px] bg-gradient-to-r from-blue-400 to-[#81B93E] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
            {/* Contact Info */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-2 space-y-10"
            >
              <motion.div variants={fadeUp}>
                <p className="text-gray-600 font-medium text-xl leading-relaxed mb-10 text-center md:text-left">
                  Notre équipe d'experts est à votre disposition pour vous accompagner dans la réussite de vos projets de transition énergétique. Nous vous répondons sous 24 heures.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-500">
                  <Phone className="text-blue-600 group-hover:text-white transition-colors duration-500" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-2">Téléphone</h4>
                  <a href="tel:+33762909663" className="text-2xl font-serif font-bold text-[#121212] hover:text-blue-600 transition-colors">
                    +33 7 62 90 96 63
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#81B93E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#81B93E] transition-colors duration-500">
                  <Mail className="text-[#81B93E] group-hover:text-white transition-colors duration-500" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-2">Email</h4>
                  <a href="mailto:contact@valoriscee.com" className="text-xl font-medium text-[#121212] hover:text-[#81B93E] transition-colors">
                    contact@valoriscee.com
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start space-x-6 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#121212] transition-colors duration-500">
                  <MapPin className="text-gray-600 group-hover:text-white transition-colors duration-500" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-2">Adresse</h4>
                  <p className="text-xl font-medium text-[#121212]">
                    France
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="lg:col-span-3 bg-white p-10 md:p-14 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-[#81B93E]"></div>
              
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="firstName" className="text-sm font-bold uppercase tracking-wider text-gray-500">Prénom</label>
                    <input type="text" id="firstName" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-[#121212] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300" placeholder="Jean" />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="lastName" className="text-sm font-bold uppercase tracking-wider text-gray-500">Nom</label>
                    <input type="text" id="lastName" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-[#121212] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300" placeholder="Dupont" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-gray-500">Email</label>
                    <input type="email" id="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-[#121212] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300" placeholder="jean.dupont@email.com" />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wider text-gray-500">Téléphone</label>
                    <input type="tel" id="phone" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-[#121212] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300" placeholder="+33 6 12 34 56 78" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider text-gray-500">Sujet</label>
                  <select id="subject" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-[#121212] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 appearance-none">
                    <option value="">Sélectionnez un sujet</option>
                    <option value="cee">Certificats d'Économies d'Énergie (CEE)</option>
                    <option value="audit">Audit Énergétique</option>
                    <option value="amo">Assistance à Maîtrise d'Ouvrage</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-gray-500">Message</label>
                  <textarea id="message" rows={5} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-[#121212] focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 resize-none" placeholder="Décrivez votre projet ou votre besoin..."></textarea>
                </div>

                <button type="submit" className="w-full group flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-[#81B93E] text-white px-10 py-5 rounded-xl text-sm uppercase tracking-[0.2em] font-bold hover:shadow-[0_15px_30px_rgba(59,130,246,0.3)] transition-all duration-500 hover:-translate-y-1">
                  <span>Envoyer le message</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121212] text-white py-20 px-6 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-[#121212] to-[#121212] pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10 text-center md:text-left">
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
            <img src="https://puredigiweb.fr/wp-content/uploads/2026/04/Gemini_Generated_Image_jhc5q6jhc5q6jhc5-Photoroom.png" alt="Valoris CEE Logo" className="h-36 md:h-48 w-auto mb-6" referrerPolicy="no-referrer" />
            <p className="text-gray-400 font-bold md:font-medium leading-relaxed max-w-md text-xl md:text-lg text-center md:text-left">
              L'excellence en rénovation énergétique. Conseil, accompagnement et ingénierie financière pour la transition écologique.
            </p>
          </div>
          <div>
            <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#81B93E] font-bold uppercase tracking-widest mb-8 text-sm">Navigation</h4>
            <ul className="space-y-4 font-medium text-gray-400">
              <li><a href="#engagements" className="hover:text-blue-400 transition-colors">Engagements</a></li>
              <li><a href="#methodologie" className="hover:text-blue-400 transition-colors">Méthodologie</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#partenaires" className="hover:text-blue-400 transition-colors">Partenaires</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#81B93E] font-bold uppercase tracking-widest mb-8 text-sm">Contact</h4>
            <ul className="space-y-4 font-medium text-gray-400">
              <li><a href="mailto:contact@valoriscee.com" className="hover:text-blue-400 transition-colors">contact@valoriscee.com</a></li>
              <li>France</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-500 font-medium text-sm relative z-10">
          <p>&copy; {new Date().getFullYear()} Valoris CEE. Tous droits réservés.</p>
          <div className="space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
