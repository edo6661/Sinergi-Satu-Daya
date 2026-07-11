import React, { useCallback, Suspense, lazy, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppLanguage } from '../hooks/useAppLanguage';
import { SiteHeader } from '../components/layout/SiteHeader';
import { HeroSection } from '../components/sections/HeroSection';
import { HOME_SECTIONS, scrollToSectionId, scrollToSectionWithRetry } from '../utils/scrollToSection';

// Gunakan lazy load untuk komponen di bawah lipatan (Below the Fold)
const CompanyProfileSection = lazy(() => import('../components/sections/CompanyProfileSection').then(m => ({ default: m.CompanyProfileSection })));
const BusinessBenefits = lazy(() => import('../components/sections/BusinessBenefits').then(m => ({ default: m.BusinessBenefits })));
const FleetShowcase = lazy(() => import('../components/sections/FleetShowcase').then(m => ({ default: m.FleetShowcase })));
const PricingSection = lazy(() => import('../components/sections/PricingSection').then(m => ({ default: m.PricingSection })));
const BusinessFaq = lazy(() => import('../components/sections/BusinessFaq').then(m => ({ default: m.BusinessFaq })));
const ProjectSuccessSection = lazy(() => import('../components/sections/ProjectSuccessSection').then(m => ({ default: m.ProjectSuccessSection })));
const ClientsPartnersSection = lazy(() => import('../components/sections/ClientsPartnersSection').then(m => ({ default: m.ClientsPartnersSection })));
const ContactSection = lazy(() => import('../components/sections/ContactSection').then(m => ({ default: m.ContactSection })));
const FloatingWhatsApp = lazy(() => import('../components/ui/FloatingWhatsApp').then(m => ({ default: m.FloatingWhatsApp })));

export const LandingPage: React.FC = () => {
  const { lang } = useAppLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTo) return;

    scrollToSectionWithRetry(scrollTo, () => {
      navigate('.', { replace: true, state: {} });
    });
  }, [location.state, navigate]);

  const scrollToSection = useCallback((sectionId: string) => {
    scrollToSectionId(sectionId);
  }, []);

  const scrollToContact = useCallback(() => {
    scrollToSection(HOME_SECTIONS.contact);
  }, [scrollToSection]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Helmet>
        <title>{lang === 'id' ? 'SSD Mobility | Solusi Ekosistem Kendaraan Listrik B2B' : 'SSD Mobility | B2B EV Ecosystem Solutions'}</title>

        {/* Standard SEO */}
        <meta name="description" content={lang === 'id' ? 'Solusi Kendaraan Listrik B2B terintegrasi dari PT Sinergi Satu Daya: penjualan kendaraan listrik, rental B2B, konsultasi kendaraan listrik, pemasangan pengisi daya kendaraan listrik, & sistem fire safety LFK.' : 'Integrated B2B EV solutions from PT Sinergi Satu Daya: EV sales, B2B rental, EV consulting, EV charger installation, & LFK fire safety systems.'} />
        <meta name="keywords" content="Kendaraan Listrik B2B, penjualan kendaraan listrik, rental mobil listrik perusahaan, konsultasi kendaraan listrik, stasiun pengisian daya kendaraan listrik, fire safety LFK, Sinergi Satu Daya" />

        {/* OpenGraph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SSD Mobility" />
        <meta property="og:url" content="https://www.sinergisatudaya.co.id" />
        <meta property="og:title" content={lang === 'id' ? 'SSD Mobility | Ekosistem Kendaraan Listrik B2B' : 'SSD Mobility | B2B Electric Vehicle Ecosystem'} />
        <meta property="og:description" content={lang === 'id' ? 'Penjualan kendaraan listrik, rental B2B, konsultasi kendaraan listrik, pemasangan pengisi daya kendaraan listrik, dan sistem fire safety LFK untuk bisnis Anda.' : 'EV sales, B2B rental, EV consulting, EV charger installation, and LFK fire safety systems for your business.'} />
        <meta property="og:image" content="https://www.sinergisatudaya.co.id/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content={lang === 'id' ? 'id_ID' : 'en_US'} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={lang === 'id' ? 'SSD Mobility | Ekosistem Kendaraan Listrik B2B' : 'SSD Mobility | B2B Electric Vehicle Ecosystem'} />
        <meta name="twitter:description" content={lang === 'id' ? 'Penjualan kendaraan listrik, rental B2B, konsultasi kendaraan listrik, pemasangan pengisi daya kendaraan listrik, dan sistem fire safety LFK untuk bisnis Anda.' : 'EV sales, B2B rental, EV consulting, EV charger installation, and LFK fire safety systems for your business.'} />
        <meta name="twitter:image" content="https://www.sinergisatudaya.co.id/og-image.jpg" />
      </Helmet>
      <SiteHeader />
      <div id={HOME_SECTIONS.home}>
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
        <div id={HOME_SECTIONS.layanan}>
          <PricingSection onPlanSelect={scrollToContact} />
        </div>
        <ProjectSuccessSection onCtaClick={scrollToContact} />
        <ClientsPartnersSection />
        <BusinessFaq onContactClick={scrollToContact} />

        <div id={HOME_SECTIONS.contact}>
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
              <div className="md:col-span-5 flex flex-col items-center md:items-start gap-4">
                <div>
                  <img
                    src="/logo/ssd-official.png"
                    alt="SSD Mobility"
                    className="h-14 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"

                  />
                </div>
                <p className="text-sm max-w-sm text-center md:text-left leading-relaxed font-medium">
                  {lang === 'id'
                    ? 'Solusi Kendaraan Listrik terintegrasi untuk kebutuhan operasional perusahaan, mencakup kendaraan, konsultasi, manajemen operasional, dan infrastruktur pengisian daya.'
                    : 'Integrated electric vehicle solutions for corporate operational needs, covering vehicles, consulting, operational management, and charging infrastructure.'}
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
                <form className="w-full max-w-sm flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); alert(lang === 'id' ? 'Terima kasih telah mendaftar!' : 'Thank you for signing up!'); }}>
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