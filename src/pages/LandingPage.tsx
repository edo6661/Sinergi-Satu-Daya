import React, { useCallback, Suspense, lazy, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppLanguage } from '../hooks/useAppLanguage'; // Gunakan custom hook

// HeroSection tetap import statis karena berada di Atas Lipatan (Above the Fold)
import { HeroSection } from '../components/sections/HeroSection';
import { Menu, X } from 'lucide-react';

// Gunakan lazy load untuk komponen di bawah lipatan (Below the Fold)
const CompanyProfileSection = lazy(() => import('../components/sections/CompanyProfileSection').then(m => ({ default: m.CompanyProfileSection })));
const BusinessBenefits = lazy(() => import('../components/sections/BusinessBenefits').then(m => ({ default: m.BusinessBenefits })));
const FleetShowcase = lazy(() => import('../components/sections/FleetShowcase').then(m => ({ default: m.FleetShowcase })));
const PricingSection = lazy(() => import('../components/sections/PricingSection').then(m => ({ default: m.PricingSection })));
const BusinessFaq = lazy(() => import('../components/sections/BusinessFaq').then(m => ({ default: m.BusinessFaq })));
const MediaHighlightsSection = lazy(() => import('../components/sections/MediaHighlightsSection').then(m => ({ default: m.MediaHighlightsSection })));
const ClientsPartnersSection = lazy(() => import('../components/sections/ClientsPartnersSection').then(m => ({ default: m.ClientsPartnersSection })));
const ContactSection = lazy(() => import('../components/sections/ContactSection').then(m => ({ default: m.ContactSection })));
const FloatingWhatsApp = lazy(() => import('../components/ui/FloatingWhatsApp').then(m => ({ default: m.FloatingWhatsApp })));

export const LandingPage: React.FC = () => {
  const { lang, i18n } = useAppLanguage(); // Ambil dari hook

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // 2. Tambahkan listener untuk event scroll
  useEffect(() => {
    const handleScroll = () => {
      // Header akan berubah wujud setelah di-scroll sejauh 50px
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToContact = useCallback(() => {
    scrollToSection('contact-section');
  }, [scrollToSection]);

  const navLinks = [
    { id: 'home-section', labelId: 'Beranda', labelEn: 'Home' },
    { id: 'layanan-section', labelId: 'Layanan', labelEn: 'Services' },
    { id: 'contact-section', labelId: 'Kontak', labelEn: 'Contact' },
  ] as const;

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(lang === 'id' ? 'en' : 'id');
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Helmet>
        <title>{lang === 'id' ? 'SSD Mobility | Solusi Ekosistem Kendaraan Listrik B2B' : 'SSD Mobility | B2B EV Ecosystem Solutions'}</title>

        {/* Standard SEO */}
        <meta name="description" content={lang === 'id' ? 'Solusi EV B2B terintegrasi dari PT Sinergi Satu Daya: penjualan kendaraan EV, rental B2B, konsultasi EV, pemasangan EV charger, & sistem fire safety LFK.' : 'Integrated B2B EV solutions from PT Sinergi Satu Daya: EV vehicle sales, B2B rental, EV consulting, EV charger installation, & LFK fire safety systems.'} />
        <meta name="keywords" content="EV B2B, penjualan kendaraan listrik, rental mobil listrik perusahaan, konsultasi EV, charging station EV, fire safety LFK, Sinergi Satu Daya" />

        {/* OpenGraph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SSD Mobility" />
        <meta property="og:url" content="https://www.sinergisatudaya.co.id" />
        <meta property="og:title" content={lang === 'id' ? 'SSD Mobility | Ekosistem Kendaraan Listrik B2B' : 'SSD Mobility | B2B Electric Vehicle Ecosystem'} />
        <meta property="og:description" content={lang === 'id' ? 'Penjualan kendaraan EV, rental B2B, konsultasi EV, pemasangan EV charger, dan sistem fire safety LFK untuk bisnis Anda.' : 'EV vehicle sales, B2B rental, EV consulting, EV charger installation, and LFK fire safety systems for your business.'} />
        <meta property="og:image" content="https://www.sinergisatudaya.co.id/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content={lang === 'id' ? 'id_ID' : 'en_US'} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={lang === 'id' ? 'SSD Mobility | Ekosistem Kendaraan Listrik B2B' : 'SSD Mobility | B2B Electric Vehicle Ecosystem'} />
        <meta name="twitter:description" content={lang === 'id' ? 'Penjualan kendaraan EV, rental B2B, konsultasi EV, pemasangan EV charger, dan sistem fire safety LFK untuk bisnis Anda.' : 'EV vehicle sales, B2B rental, EV consulting, EV charger installation, and LFK fire safety systems for your business.'} />
        <meta name="twitter:image" content="https://www.sinergisatudaya.co.id/og-image.jpg" />
      </Helmet>
      {/* Simple Sticky Header (Untuk Logo & Language Toggle) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled || isMobileMenuOpen
          ? 'bg-surface-darkest/75 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-2'
          : 'bg-transparent border-b border-transparent shadow-none py-5'
          }`}
      >
        <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img
              src="/logo/transparent-no-char.png"
              alt="SSD Mobility"
              className="h-14 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"

            />
            <div className="flex flex-col">
              <span className="text-surface-white font-black font-heading text-lg md:text-xl tracking-tight leading-none group-hover:text-accent transition-colors duration-300">MOBILITY</span>
              <span className="text-content-light/60 text-[9px] md:text-[10px] font-bold tracking-[0.3em] leading-none mt-1.5">BY SINERGI SATU DAYA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-xs font-bold text-content-light/70 hover:text-surface-white transition-colors tracking-widest"
                >
                  {lang === 'id' ? link.labelId : link.labelEn}
                </button>
              ))}
            </nav>
            <button onClick={toggleLanguage} className="text-xs font-bold text-content-light/70 hover:text-surface-white transition-colors tracking-widest flex items-center gap-1">
              <span className={lang === 'id' ? 'text-accent' : ''}>ID</span>
              <span className="text-white/20">/</span>
              <span className={lang === 'en' ? 'text-accent' : ''}>EN</span>
            </button>
            <button onClick={scrollToContact} className="relative items-center justify-center bg-white/5 hover:bg-accent text-surface-white hover:text-surface-darkest border border-white/10 hover:border-accent px-6 py-2.5 rounded-lg text-xs font-bold transition-all duration-300 overflow-hidden group animate-shimmer">
              <span className="relative z-10">{lang === 'id' ? 'HUBUNGI VIA WHATSAPP' : 'CONTACT VIA WHATSAPP'}</span>
            </button>
          </div>

          {/* 4. Mobile Menu Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center p-2 text-surface-white hover:text-accent transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* 5. Mobile Menu Dropdown (Animasi expand) */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-surface-darkest/95 backdrop-blur-xl border-b border-white/10 ${isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 border-transparent'}`}>
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="w-full text-left py-2 text-sm font-bold text-content-light hover:text-accent transition-colors tracking-widest"
              >
                {lang === 'id' ? link.labelId : link.labelEn}
              </button>
            ))}
            <button onClick={toggleLanguage} className="w-full text-left py-2 text-sm font-bold text-content-light hover:text-accent transition-colors tracking-widest flex items-center gap-2">
              <span>{lang === 'id' ? 'Bahasa:' : 'Language:'}</span>
              <span className={lang === 'id' ? 'text-accent' : 'text-content-muted'}>ID</span>
              <span className="text-white/20">/</span>
              <span className={lang === 'en' ? 'text-accent' : 'text-content-muted'}>EN</span>
            </button>
            <button onClick={() => { scrollToContact(); toggleMobileMenu(); }} className="w-full bg-accent text-surface-darkest py-3 rounded-lg text-sm font-bold tracking-widest animate-shimmer">
              {lang === 'id' ? 'HUBUNGI VIA WHATSAPP' : 'CONTACT VIA WHATSAPP'}
            </button>
          </div>
        </div>
      </header>
      <div id="home-section">
        <HeroSection
          onPrimaryClick={scrollToContact}
          onSecondaryClick={() => scrollToSection('profile-section')}
        />
      </div>
      <Suspense fallback={
        <div className="h-screen bg-surface-darkest flex flex-col items-center justify-center">
          <div className="relative w-16 h-16 flex items-center justify-center mb-4">
            <div className="absolute inset-0 border-4 border-accent/20 rounded-xl"></div>
            <div className="absolute inset-0 border-4 border-accent rounded-xl border-t-transparent animate-spin"></div>
            <span className="text-accent font-black text-xs">SSD</span>
          </div>
          <div className="text-content-light/70 font-bold tracking-[0.2em] text-xs uppercase animate-pulse">
            {lang === 'id' ? 'Memuat Ekosistem...' : 'Loading Ecosystem...'}
          </div>
        </div>
      }>
        <div id="profile-section">
          <CompanyProfileSection onCtaClick={scrollToContact} />
        </div>
        <BusinessBenefits onCalculateClick={scrollToContact} />
        <FleetShowcase onCheckAvailabilityClick={scrollToContact} />
        <div id="layanan-section">
          <PricingSection onPlanSelect={scrollToContact} />
        </div>
        <BusinessFaq onContactClick={scrollToContact} />
        <MediaHighlightsSection onCtaClick={scrollToContact} />
        <ClientsPartnersSection />

        <div id="contact-section">
          <ContactSection onSubmit={(data) => {
            console.log("Form Submitted:", data);
            alert(lang === 'id' ? 'Terima kasih, permintaan Anda telah kami terima.' : 'Thank you, your request has been received.');
          }} />
        </div>

        {/* Footer Minimalis */}
        <footer className="bg-surface-darkest text-content-muted pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">

              {/* Info Perusahaan */}
              <div className="md:col-span-5 flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-surface-darkest font-black">
                    SSD
                  </div>
                  <span className="text-surface-white font-heading font-black text-xl tracking-tighter">SSD MOBILITY</span>
                </div>
                <p className="text-sm max-w-sm text-center md:text-left leading-relaxed font-medium">
                  {lang === 'id'
                    ? 'Solusi EV terintegrasi untuk kebutuhan operasional perusahaan, mencakup kendaraan, konsultasi, manajemen operasional, dan infrastruktur pengisian daya.'
                    : 'Integrated B2B EV solutions: EV vehicle sales, B2B rental, EV consulting, EV charger installation, and LFK fire safety systems.'}
                </p>
              </div>

              {/* Tautan Footer */}
              <div className="md:col-span-3 flex flex-col items-center md:items-start gap-4">
                <h4 className="text-surface-white font-bold tracking-widest text-xs uppercase mb-2">
                  {lang === 'id' ? 'Tautan' : 'Links'}
                </h4>
                <a href="#" className="text-sm hover:text-accent transition-colors">{lang === 'id' ? 'Tentang Kami' : 'About Us'}</a>
                <a href="#" className="text-sm hover:text-accent transition-colors">{lang === 'id' ? 'Layanan Pemeliharaan' : 'Maintenance Services'}</a>
                <a href="#" className="text-sm hover:text-accent transition-colors">{lang === 'id' ? 'Galeri Proyek' : 'Project Gallery'}</a>
              </div>

              {/* Form Daftar Pembaruan (Diambil dari web lama) */}
              <div className="md:col-span-4 flex flex-col items-center md:items-start">
                <h4 className="text-surface-white font-bold tracking-widest text-xs uppercase mb-4">
                  {lang === 'id' ? 'Daftar untuk Pembaruan' : 'Sign Up for Updates'}
                </h4>
                <form className="w-full max-w-sm flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); alert('Terima kasih telah mendaftar!'); }}>
                  <input
                    type="text"
                    placeholder={lang === 'id' ? 'Masukkan nama lengkap Anda' : 'Enter your full name'}
                    required
                    className="w-full px-4 py-3 bg-surface-darker border border-white/10 rounded-lg focus:border-accent outline-none text-surface-white text-sm"
                  />
                  <input
                    type="email"
                    placeholder={lang === 'id' ? 'Email Anda' : 'Your email'}
                    required
                    className="w-full px-4 py-3 bg-surface-darker border border-white/10 rounded-lg focus:border-accent outline-none text-surface-white text-sm"
                  />
                  <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-surface-darkest font-bold py-3 rounded-lg text-sm transition-colors cursor-pointer">
                    {lang === 'id' ? 'Kirim Permintaan' : 'Send Request'}
                  </button>
                </form>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-widest text-surface-white/40">
              <span>© {new Date().getFullYear()} PT SINERGI SATU DAYA. {lang === 'id' ? 'HAK CIPTA DILINDUNGI.' : 'ALL RIGHTS RESERVED.'}</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {lang === 'id' ? 'DIRANCANG UNTUK EFISIENSI' : 'ENGINEERED FOR EFFICIENCY'}
              </span>
            </div>
          </div>
        </footer>

        {/* Global Persisten UI */}
        <FloatingWhatsApp />
      </Suspense>
    </div>
  );
};