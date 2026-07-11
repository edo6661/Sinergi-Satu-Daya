import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAppLanguage } from '../../hooks/useAppLanguage';
import { HOME_SECTIONS, type HomeSectionId, scrollToSectionId } from '../../utils/scrollToSection';

const navLinks = [
  { type: 'section' as const, id: HOME_SECTIONS.home, labelId: 'Beranda', labelEn: 'Home' },
  { type: 'page' as const, href: '/layanan', labelId: 'Layanan', labelEn: 'Services' },
  { type: 'section' as const, id: HOME_SECTIONS.contact, labelId: 'Kontak', labelEn: 'Contact' },
];

function isNavLinkActive(
  link: (typeof navLinks)[number],
  pathname: string,
  landingActiveSection: string,
) {
  if (link.type === 'page') {
    return pathname === link.href || pathname.startsWith(`${link.href}/`);
  }

  if (pathname !== '/') return false;

  if (link.id === HOME_SECTIONS.contact) {
    return landingActiveSection === HOME_SECTIONS.contact;
  }

  return landingActiveSection !== HOME_SECTIONS.contact;
}

const navLinkClass = (active: boolean, mobile = false) =>
  [
    mobile ? 'w-full text-left py-2 text-sm' : 'text-xs',
    'font-bold tracking-widest transition-colors',
    active
      ? 'text-accent'
      : mobile
        ? 'text-content-light hover:text-accent'
        : 'text-content-light/70 hover:text-surface-white',
  ].join(' ');

export const SiteHeader: React.FC = () => {
  const { lang, i18n } = useAppLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isLanding = location.pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [landingActiveSection, setLandingActiveSection] = useState<HomeSectionId>(HOME_SECTIONS.home);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (!isLanding) {
      setLandingActiveSection(HOME_SECTIONS.home);
      return;
    }

    let observer: IntersectionObserver | null = null;
    let attempts = 0;

    const setupObserver = () => {
      const contactEl = document.getElementById(HOME_SECTIONS.contact);
      if (!contactEl) {
        if (attempts++ < 40) {
          requestAnimationFrame(setupObserver);
        }
        return;
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          setLandingActiveSection(
            entry.isIntersecting ? HOME_SECTIONS.contact : HOME_SECTIONS.home,
          );
        },
        { rootMargin: '-35% 0px -45% 0px', threshold: 0 },
      );

      observer.observe(contactEl);
    };

    setupObserver();
    return () => observer?.disconnect();
  }, [isLanding, location.pathname]);

  const navigateToSection = useCallback(
    (sectionId: string) => {
      setIsMobileMenuOpen(false);

      if (isLanding) {
        scrollToSectionId(sectionId);
        return;
      }

      navigate('/', { state: { scrollTo: sectionId } });
    },
    [isLanding, navigate],
  );

  const handleNavClick = useCallback(
    (link: (typeof navLinks)[number]) => {
      setIsMobileMenuOpen(false);

      if (link.type === 'page') {
        navigate(link.href);
        return;
      }

      navigateToSection(link.id);
    },
    [navigate, navigateToSection],
  );

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);

    if (isLanding) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate('/');
  };

  const scrollToContact = () => navigateToSection(HOME_SECTIONS.contact);

  const toggleLanguage = () => {
    i18n.changeLanguage(lang === 'id' ? 'en' : 'id');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((open) => !open);
  };

  const showSolidHeader = !isLanding || isScrolled || isMobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${showSolidHeader
        ? 'bg-surface-darkest/75 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] py-2'
        : 'bg-transparent border-b border-transparent shadow-none py-5'
        }`}
    >
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <button type="button" className="group cursor-pointer" onClick={handleLogoClick}>
          <img
            src="/logo/transparent-no-char.png"
            alt="SSD Mobility"
            className="h-14 md:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </button>

        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => {
              const active = isNavLinkActive(link, location.pathname, landingActiveSection);

              return (
                <button
                  key={link.type === 'page' ? link.href : link.id}
                  type="button"
                  onClick={() => handleNavClick(link)}
                  aria-current={active ? 'page' : undefined}
                  className={navLinkClass(active)}
                >
                  {lang === 'id' ? link.labelId : link.labelEn}
                </button>
              );
            })}
          </nav>
          <button
            type="button"
            onClick={toggleLanguage}
            className="text-xs font-bold text-content-light/70 hover:text-surface-white transition-colors tracking-widest flex items-center gap-1"
          >
            <span className={lang === 'id' ? 'text-accent' : ''}>ID</span>
            <span className="text-white/20">/</span>
            <span className={lang === 'en' ? 'text-accent' : ''}>EN</span>
          </button>
          <button
            type="button"
            onClick={scrollToContact}
            className="relative items-center justify-center bg-white/5 hover:bg-accent text-surface-white hover:text-surface-darkest border border-white/10 hover:border-accent px-6 py-2.5 rounded-lg text-xs font-bold transition-all duration-300 overflow-hidden group animate-shimmer"
          >
            <span className="relative z-10">
              {lang === 'id' ? 'HUBUNGI VIA WHATSAPP' : 'CONTACT VIA WHATSAPP'}
            </span>
          </button>
        </div>

        <button
          type="button"
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center justify-center p-2 text-surface-white hover:text-accent transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-surface-darkest/95 backdrop-blur-xl border-b border-white/10 ${isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 border-transparent'
          }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const active = isNavLinkActive(link, location.pathname, landingActiveSection);

            return (
              <button
                key={link.type === 'page' ? link.href : link.id}
                type="button"
                onClick={() => handleNavClick(link)}
                aria-current={active ? 'page' : undefined}
                className={navLinkClass(active, true)}
              >
                {lang === 'id' ? link.labelId : link.labelEn}
              </button>
            );
          })}
          <button
            type="button"
            onClick={toggleLanguage}
            className="w-full text-left py-2 text-sm font-bold text-content-light hover:text-accent transition-colors tracking-widest flex items-center gap-2"
          >
            <span>{lang === 'id' ? 'Bahasa:' : 'Language:'}</span>
            <span className={lang === 'id' ? 'text-accent' : 'text-content-muted'}>ID</span>
            <span className="text-white/20">/</span>
            <span className={lang === 'en' ? 'text-accent' : 'text-content-muted'}>EN</span>
          </button>
          <button
            type="button"
            onClick={() => {
              scrollToContact();
              setIsMobileMenuOpen(false);
            }}
            className="w-full bg-accent text-surface-darkest py-3 rounded-lg text-sm font-bold tracking-widest animate-shimmer"
          >
            {lang === 'id' ? 'HUBUNGI VIA WHATSAPP' : 'CONTACT VIA WHATSAPP'}
          </button>
        </div>
      </div>
    </header>
  );
};
