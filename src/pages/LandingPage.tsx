import React, { useCallback, Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppLanguage } from '../hooks/useAppLanguage'; // Gunakan custom hook

// HeroSection tetap import statis karena berada di Atas Lipatan (Above the Fold)
import { HeroSection } from '../components/sections/HeroSection';

// Gunakan lazy load untuk komponen di bawah lipatan (Below the Fold)
const CompanyProfileSection = lazy(() => import('../components/sections/CompanyProfileSection').then(m => ({ default: m.CompanyProfileSection })));
const BusinessBenefits = lazy(() => import('../components/sections/BusinessBenefits').then(m => ({ default: m.BusinessBenefits })));
const FleetShowcase = lazy(() => import('../components/sections/FleetShowcase').then(m => ({ default: m.FleetShowcase })));
const PricingSection = lazy(() => import('../components/sections/PricingSection').then(m => ({ default: m.PricingSection })));
const BusinessFaq = lazy(() => import('../components/sections/BusinessFaq').then(m => ({ default: m.BusinessFaq })));
const TestimonialSection = lazy(() => import('../components/sections/TestimonialSection').then(m => ({ default: m.TestimonialSection })));
const ContactSection = lazy(() => import('../components/sections/ContactSection').then(m => ({ default: m.ContactSection })));
const FloatingWhatsApp = lazy(() => import('../components/ui/FloatingWhatsApp').then(m => ({ default: m.FloatingWhatsApp })));

export const LandingPage: React.FC = () => {
  const { lang, i18n } = useAppLanguage(); // Ambil dari hook

  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(lang === 'id' ? 'en' : 'id');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Helmet>
        <title>{lang === 'id' ? 'SSD Mobility | Solusi Ekosistem Kendaraan Listrik B2B' : 'SSD Mobility | B2B EV Ecosystem Solutions'}</title>

        {/* Standard SEO */}
        <meta name="description" content={lang === 'id' ? 'Transformasi armada bisnis Anda dengan ekosistem EV terintegrasi dari PT Sinergi Satu Daya. Pengadaan unit, infrastruktur charging, & sistem keselamatan LFK.' : 'Transform your business fleet with an integrated EV ecosystem from PT Sinergi Satu Daya. Fleet procurement, charging infrastructure, & LFK safety systems.'} />
        <meta name="keywords" content="EV B2B, sewa mobil listrik perusahaan, charging station EV, ekosistem kendaraan listrik, Sinergi Satu Daya" />

        {/* OpenGraph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SSD Mobility" />
        <meta property="og:url" content="https://www.sinergisatudaya.co.id" />
        <meta property="og:title" content={lang === 'id' ? 'SSD Mobility | Ekosistem Kendaraan Listrik B2B' : 'SSD Mobility | B2B Electric Vehicle Ecosystem'} />
        <meta property="og:description" content={lang === 'id' ? 'Solusi lengkap transisi armada EV untuk operasional bisnis dan logistik dengan sistem keselamatan LFK.' : 'Complete EV fleet transition solutions for business and logistics operations with LFK safety systems.'} />
        <meta property="og:image" content="https://www.sinergisatudaya.co.id/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content={lang === 'id' ? 'id_ID' : 'en_US'} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={lang === 'id' ? 'SSD Mobility | Ekosistem Kendaraan Listrik B2B' : 'SSD Mobility | B2B Electric Vehicle Ecosystem'} />
        <meta name="twitter:description" content={lang === 'id' ? 'Solusi lengkap transisi armada EV untuk operasional bisnis dan logistik.' : 'Complete EV fleet transition solutions for business and logistics operations.'} />
        <meta name="twitter:image" content="https://www.sinergisatudaya.co.id/og-image.jpg" />
      </Helmet>
      {/* Simple Sticky Header (Untuk Logo & Language Toggle) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface-darkest/90 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-surface-darkest font-black shadow-lg group-hover:rotate-12 transition-transform">
              SSD
            </div>
            <div className="flex flex-col">
              <span className="text-surface-white font-black font-heading text-lg tracking-tighter leading-none">MOBILITY</span>
              <span className="text-accent text-[10px] font-bold tracking-[0.3em] leading-none mt-1">BY SINERGI SATU DAYA</span>
            </div>
          </div>
          {/* Language Toggle & CTA Header */}
          <div className="flex items-center gap-6">
            <button onClick={toggleLanguage} className="text-xs font-black text-content-light hover:text-accent transition-colors tracking-widest">
              {lang === 'id' ? 'ID' : 'EN'}
            </button>
            <button onClick={scrollToContact} className="hidden md:block bg-white/5 hover:bg-white/10 text-surface-white border border-white/10 px-6 py-2.5 rounded-lg text-xs font-bold transition-all">
              GET CONSULTATION
            </button>
          </div>
        </div>
      </header>
      <HeroSection
        onPrimaryClick={scrollToContact}
        onSecondaryClick={() => document.getElementById('profile-section')?.scrollIntoView({ behavior: 'smooth' })}
      />
      <Suspense fallback={<div className="h-screen flex items-center justify-center font-semibold text-primary">Loading ecosystem...</div>}>
        <div id="profile-section">
          <CompanyProfileSection onCtaClick={scrollToContact} />
        </div>
        <BusinessBenefits onCalculateClick={scrollToContact} />
        <FleetShowcase onCheckAvailabilityClick={scrollToContact} />
        <PricingSection onPlanSelect={scrollToContact} />
        <BusinessFaq onContactClick={scrollToContact} />
        <TestimonialSection onCtaClick={scrollToContact} />

        <div id="contact-section">
          <ContactSection onSubmit={(data) => {
            console.log("Form Submitted:", data);
            alert(lang === 'id' ? 'Terima kasih, permintaan Anda telah kami terima.' : 'Thank you, your request has been received.');
          }} />
        </div>

        {/* Footer Minimalis */}
        <footer className="bg-surface-darkest text-content-muted py-16 border-t border-white/5">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-surface-white font-heading font-bold text-xl mb-2">SSD Mobility</span>
                <p className="text-xs max-w-xs text-center md:text-left leading-relaxed">
                  Penyedia Solusi Ekosistem Kendaraan Listrik (EV) B2B Terintegrasi di Indonesia.
                </p>
              </div>
              <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-accent transition-colors">ESG Report</a>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/5 text-center text-[10px] font-medium tracking-widest opacity-30 text-surface-white">
              © {new Date().getFullYear()} PT SINERGI SATU DAYA. ALL RIGHTS RESERVED. ENGINEERED FOR EFFICIENCY.
            </div>
          </div>
        </footer>

        {/* Global Persisten UI */}
        <FloatingWhatsApp />
      </Suspense>
    </div>
  );
};