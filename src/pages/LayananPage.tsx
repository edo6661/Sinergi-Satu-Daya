import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Grid } from 'lucide-react';
import { SeoHead } from '../components/seo/SeoHead';
import { PageLayout } from '../components/layout/PageLayout';
import { services, getServicePath } from '../data/catalog/services';
import { layananPageCopy } from '../data/copy/layananPage';
import { useAppLanguage } from '../hooks/useAppLanguage';

const LayananPage = () => {
  const { lang } = useAppLanguage();
  const content = layananPageCopy[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <SeoHead
        title={
          lang === 'id'
            ? 'Layanan Kendaraan Listrik B2B | SSD Mobility'
            : 'B2B EV Services | SSD Mobility'
        }
        description={
          lang === 'id'
            ? 'Layanan SSD: penjualan kendaraan listrik, penyewaan B2B, konsultasi kendaraan listrik, instalasi charger, dan proteksi keamanan kendaraan listrik.'
            : 'SSD services: EV sales, B2B rentals, EV consulting, charger installation, and EV safety protection.'
        }
        path="/layanan"
        locale={lang === 'id' ? 'id_ID' : 'en_US'}
      />

      <div className="pb-24 pt-32 bg-surface-darkest min-h-screen relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-surface-dark via-surface-darkest to-surface-darkest z-0" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
          <div className="mb-8 flex items-center gap-2 text-sm text-content-light/60">
            <Link to="/" className="hover:text-accent transition-colors">
              {content.breadcrumbHome}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-accent font-semibold">{content.breadcrumbLayanan}</span>
          </div>

          <div className="mb-16 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <Grid className="text-accent" size={24} />
              <span className="text-accent font-bold tracking-widest uppercase text-sm">
                {content.badge}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black font-heading mb-6 text-surface-white tracking-tight">
              {content.title}{' '}
              <span className="text-accent">
                {content.titleHighlight}
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  to={getServicePath(service)}
                  key={service.id}
                  className="group relative rounded-3xl bg-surface-dark/40 border border-white/10 hover:bg-surface-dark/80 transition-all duration-500 shadow-xl backdrop-blur-md overflow-hidden flex flex-col"
                >
                  <div className="h-56 overflow-hidden relative bg-white/5">
                    <img
                      src={service.image}
                      alt={service.title[lang]}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-darkest via-surface-darkest/30 to-transparent pointer-events-none" />

                    <div className="absolute top-4 left-4 bg-surface-darkest/80 backdrop-blur-md border border-white/10 w-10 h-10 rounded-xl flex items-center justify-center z-20">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow relative z-10 bg-surface-darkest/90 -mt-6  rounded-b-3xl">
                    <h3 className="text-2xl font-bold text-surface-white mb-3 group-hover:text-accent transition-colors duration-300 font-heading">
                      {service.title[lang]}
                    </h3>
                    <p className="text-content-light/70 font-light leading-relaxed mb-6 flex-grow text-sm">
                      {service.description[lang]}
                    </p>

                    <div className="inline-flex items-center justify-between w-full pt-4 border-t border-white/10 text-sm font-semibold text-surface-white group-hover:text-accent transition-colors">
                      {content.viewDetails}
                      <ArrowRight
                        size={18}
                        className="transform group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LayananPage;
