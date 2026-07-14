import { useEffect, useLayoutEffect, useState } from 'react';
import { Link, useParams, Navigate, useSearchParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, MessageSquare } from 'lucide-react';
import { SeoHead } from '../components/seo/SeoHead';
import { PageLayout } from '../components/layout/PageLayout';
import { getServiceBySlug, getServicePath, resolveServiceSlug } from '../data/catalog/services';
import {
  getLayananProductPath,
  getProductsForService,
  getCategoriesForService,
  layananCategories,
  type LayananCategory,
  type LayananProduct,
} from '../data/catalog/layanan';
import { layananPageCopy } from '../data/copy/layananPage';
import { useAppLanguage } from '../hooks/useAppLanguage';
import { restoreScrollPosition, saveScrollPosition } from '../utils/scrollRestoration';
import { scrollToSectionWithRetry } from '../utils/scrollToSection';

const WHATSAPP_NUMBER = '628110000000';

type ServiceProductCatalogProps = {
  serviceProducts: LayananProduct[];
  serviceCategories: LayananCategory[];
  catalogTitle: string;
  catalogDesc: string;
  content: (typeof layananPageCopy)[keyof typeof layananPageCopy];
  lang: 'id' | 'en';
  onProductNavigate: () => void;
  initialCategory?: string | null;
};

const ServiceProductCatalog = ({
  serviceProducts,
  serviceCategories,
  catalogTitle,
  catalogDesc,
  content,
  lang,
  onProductNavigate,
  initialCategory,
}: ServiceProductCatalogProps) => {
  const resolvedInitialCategory =
    initialCategory && serviceCategories.some((cat) => cat.id === initialCategory)
      ? initialCategory
      : 'all';
  const [activeCategory, setActiveCategory] = useState<string>(resolvedInitialCategory);
  const showCategoryFilters = serviceCategories.length > 1;

  useEffect(() => {
    if (resolvedInitialCategory === 'all') return;
    scrollToSectionWithRetry('ev-product-catalog');
  }, [resolvedInitialCategory]);

  const filteredProducts =
    activeCategory === 'all'
      ? serviceProducts
      : serviceProducts.filter((p) => p.categoryId === activeCategory);

  return (
    <div id="ev-product-catalog">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-black font-heading text-surface-white mb-4">
          {catalogTitle}
        </h2>
        <p className="text-content-light/60 max-w-2xl mx-auto">{catalogDesc}</p>
      </div>

      {showCategoryFilters && (
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${activeCategory === 'all'
              ? 'bg-accent text-surface-darkest shadow-[0_0_15px_rgba(245,158,11,0.4)]'
              : 'bg-surface-dark border border-white/10 text-content-light/70 hover:text-surface-white hover:border-white/30'
              }`}
          >
            {content.allProducts}
          </button>
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${activeCategory === cat.id
                ? 'bg-accent text-surface-darkest shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                : 'bg-surface-dark border border-white/10 text-content-light/70 hover:text-surface-white hover:border-white/30'
                }`}
            >
              {cat.name[lang]}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => {
          const category = layananCategories.find((c) => c.id === product.categoryId);

          return (
            <Link
              to={getLayananProductPath(product)}
              onClick={onProductNavigate}
              key={product.id}
              className="group relative rounded-3xl bg-surface-dark/40 border border-white/10 hover:bg-surface-dark/80 transition-all duration-500 shadow-xl backdrop-blur-md overflow-hidden flex flex-col"
            >
              <div className="h-56 overflow-hidden relative bg-white/5">
                <img
                  src={product.image}
                  alt={product.title[lang]}
                  className="w-full h-full object-contain p-4 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-darkest via-surface-darkest/20 to-transparent pointer-events-none" />

                {category && showCategoryFilters && (
                  <div className="absolute top-4 left-4 bg-surface-darkest/80 backdrop-blur-md border border-white/10 text-xs font-bold px-3 py-1.5 rounded-full text-accent z-20">
                    {category.name[lang]}
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow relative z-10 bg-surface-darkest/90 -mt-6 rounded-b-3xl">
                {product.brand && (
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-content-light/50 mb-1">
                    {product.brand}
                  </span>
                )}
                <h3 className="text-xl font-bold text-surface-white mb-2 group-hover:text-accent transition-colors duration-300 font-heading">
                  {product.title[lang]}
                </h3>
                <p className="text-content-light/70 font-light leading-relaxed mb-4 flex-grow text-sm line-clamp-2">
                  {product.description[lang]}
                </p>

                <div className="inline-flex items-center justify-between w-full pt-3 border-t border-white/10 text-sm font-semibold text-surface-white group-hover:text-accent transition-colors">
                  {content.viewDetails}
                  <ArrowRight
                    size={16}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const ServiceDetailPage = () => {
  const { serviceSlug } = useParams();
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const { lang } = useAppLanguage();
  const content = layananPageCopy[lang];

  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const resolvedServiceSlug = serviceSlug ? resolveServiceSlug(serviceSlug) : undefined;
  const serviceProducts = resolvedServiceSlug ? getProductsForService(resolvedServiceSlug) : [];
  const serviceCategories = resolvedServiceSlug ? getCategoriesForService(resolvedServiceSlug) : [];
  const pageTitle = service
    ? `${service.title[lang]} | SSD Mobility`
    : `${lang === 'id' ? 'Layanan tidak ditemukan' : 'Service not found'} | SSD Mobility`;

  useEffect(() => {
    if (!serviceSlug || categoryParam) return;

    const path = `/layanan/${resolvedServiceSlug ?? serviceSlug}`;
    if (!restoreScrollPosition(path)) {
      window.scrollTo(0, 0);
    }
  }, [serviceSlug, resolvedServiceSlug, categoryParam]);

  useLayoutEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  const handleProductNavigate = () => {
    if (resolvedServiceSlug) {
      saveScrollPosition(`/layanan/${resolvedServiceSlug}`);
    }
  };

  if (!service) {
    return (
      <PageLayout>
        <SeoHead
          title={
            `${lang === 'id' ? 'Layanan tidak ditemukan' : 'Service not found'} | SSD Mobility`
          }
          description={
            lang === 'id'
              ? 'Halaman layanan tidak ditemukan.'
              : 'Service page not found.'
          }
          path="/layanan"
          noIndex
          locale={lang === 'id' ? 'id_ID' : 'en_US'}
        />
        <Navigate to="/layanan" replace />
      </PageLayout>
    );
  }

  const whatsappMessage = encodeURIComponent(
    lang === 'id'
      ? `Halo Tim SSD, saya tertarik dengan layanan ${service.title.id}. Mohon informasi lebih lanjut.`
      : `Hello SSD Team, I'm interested in ${service.title.en} service. Please provide more information.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const Icon = service.icon;
  const catalogTitle =
    (service.catalogCategoryIds.length === 1
      ? layananCategories.find((c) => c.id === service.catalogCategoryIds[0])?.name[lang]
      : content.productCatalog) ?? content.productCatalog;
  const catalogDesc =
    (service.catalogCategoryIds.length === 1
      ? layananCategories.find((c) => c.id === service.catalogCategoryIds[0])?.description[lang]
      : content.productCatalogDesc) ?? content.productCatalogDesc;

  return (
    <PageLayout>
      <SeoHead
        title={pageTitle}
        description={service.longDescription[lang]}
        path={getServicePath(service)}
        image={service.image}
        locale={lang === 'id' ? 'id_ID' : 'en_US'}
      />

      <div className="pb-24 pt-32 bg-surface-darkest min-h-screen relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-surface-dark via-surface-darkest to-surface-darkest z-0" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
          <div className="mb-8 flex items-center gap-2 text-sm text-content-light/60 flex-wrap">
            <Link to="/" className="hover:text-accent transition-colors">
              {content.breadcrumbHome}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/layanan" className="hover:text-accent transition-colors">
              {content.breadcrumbLayanan}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-accent font-semibold">{service.title[lang]}</span>
          </div>

          <div className="mb-12 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-accent font-bold tracking-widest uppercase text-sm">
                {content.badge}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black font-heading text-surface-white tracking-tight">
              {service.title[lang]}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="rounded-3xl bg-surface-dark/40 border border-white/10 overflow-hidden shadow-xl">
              <div className="aspect-[4/3] bg-white/5">
                <img
                  src={service.image}
                  alt={service.title[lang]}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-content-light/80 font-light leading-relaxed text-lg mb-8">
                {service.longDescription[lang]}
              </p>

              <ul className="space-y-3 mb-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-content-light/80 text-sm">{feature[lang]}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-surface-darkest px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_12px_24px_rgba(245,158,11,0.25)] transform hover:-translate-y-1"
              >
                <MessageSquare className="w-5 h-5" />
                {content.contactCta}
              </a>
            </div>
          </div>

          {service.hasProductCatalog && serviceProducts.length > 0 && (
            <ServiceProductCatalog
              key={`${resolvedServiceSlug}-${categoryParam ?? 'all'}`}
              serviceProducts={serviceProducts}
              serviceCategories={serviceCategories}
              catalogTitle={catalogTitle}
              catalogDesc={catalogDesc}
              content={content}
              lang={lang}
              onProductNavigate={handleProductNavigate}
              initialCategory={categoryParam}
            />
          )}

          <div className="mt-12">
            <Link
              to="/layanan"
              className="text-sm text-content-light/60 hover:text-accent transition-colors"
            >
              ← {content.backToLayanan}
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ServiceDetailPage;
