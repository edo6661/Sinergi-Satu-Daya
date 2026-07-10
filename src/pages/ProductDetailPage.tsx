import { useEffect, useLayoutEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ChevronRight, MessageSquare } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { PageLayout } from '../components/layout/PageLayout';
import {
  getLayananProductBySlug,
  getLayananCategoryById,
  getServiceSlugForProduct,
  type LayananProduct,
} from '../data/catalog/layanan';
import { getServiceBySlug } from '../data/catalog/services';
import { layananPageCopy } from '../data/copy/layananPage';
import { useAppLanguage } from '../hooks/useAppLanguage';

const WHATSAPP_NUMBER = '628110000000';

type ProductView = 'front' | 'back' | 'left' | 'right';

type ProductImageGalleryProps = {
  product: LayananProduct;
  lang: 'id' | 'en';
};

const ProductImageGallery = ({ product, lang }: ProductImageGalleryProps) => {
  const [activeView, setActiveView] = useState<ProductView>('front');

  return (
    <div className="rounded-3xl bg-surface-dark/40 border border-white/10 overflow-hidden shadow-xl backdrop-blur-md">
      <div className="aspect-square bg-white/5 flex flex-col items-center justify-center p-8">
        <img
          src={product.images ? product.images[activeView] : product.image}
          alt={product.title[lang]}
          className="w-full h-full object-contain flex-1"
        />
        {product.images && (
          <div className="flex gap-2 w-full mt-4">
            {(['front', 'back', 'left', 'right'] as const).map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 flex-1 cursor-pointer ${activeView === view
                    ? 'bg-accent text-surface-darkest'
                    : 'bg-surface-darkest border border-white/10 text-content-light/70 hover:text-surface-white'
                  }`}
              >
                {view}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ProductDetailPage = () => {
  const { serviceSlug, productSlug } = useParams();
  const { lang } = useAppLanguage();
  const content = layananPageCopy[lang];

  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const product = productSlug ? getLayananProductBySlug(productSlug) : undefined;
  const category = product ? getLayananCategoryById(product.categoryId) : undefined;
  const expectedServiceSlug = product ? getServiceSlugForProduct(product) : undefined;
  const isValid = Boolean(service && product && service.slug === expectedServiceSlug);
  const pageTitle = product
    ? `${product.title[lang]} | SSD Mobility`
    : `${lang === 'id' ? 'Produk tidak ditemukan' : 'Product not found'} | SSD Mobility`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productSlug]);

  useLayoutEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  if (!isValid || !service || !product) {
    return (
      <PageLayout>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        <Navigate to="/layanan" replace />
      </PageLayout>
    );
  }

  const whatsappMessage = encodeURIComponent(
    lang === 'id'
      ? `Halo Tim SSD, saya tertarik dengan ${product.title.id}. Mohon informasi lebih lanjut.`
      : `Hello SSD Team, I'm interested in ${product.title.en}. Please provide more information.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <PageLayout>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={product.description[lang]} />
      </Helmet>

      <div className="pb-24 pt-32 bg-surface-darkest min-h-screen relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-surface-dark via-surface-darkest to-surface-darkest z-0" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
          <div className="mb-8 flex items-center gap-2 text-sm text-content-light/60 flex-wrap">
            <Link to="/" className="hover:text-accent transition-colors">
              {content.breadcrumbHome}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/layanan" className="hover:text-accent transition-colors">
              {content.breadcrumbLayanan}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              to={`/layanan/${service.slug}`}
              className="hover:text-accent transition-colors"
            >
              {service.title[lang]}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-accent font-semibold">{product.title[lang]}</span>
          </div>

          <div className="mb-12 text-center flex flex-col items-center">
            {category && (
              <span className="inline-block bg-surface-dark border border-white/10 text-accent text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                {category.name[lang]}
              </span>
            )}
            {product.brand && (
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-content-light/50 mb-2">
                {product.brand}
              </p>
            )}
            <h1 className="text-3xl md:text-5xl font-black font-heading text-surface-white tracking-tight">
              {product.title[lang]}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ProductImageGallery key={productSlug} product={product} lang={lang} />

            <div>
              <p className="text-content-light/80 font-light leading-relaxed text-lg mb-10">
                {product.description[lang]}
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-surface-darkest px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_12px_24px_rgba(245,158,11,0.25)] transform hover:-translate-y-1"
              >
                <MessageSquare className="w-5 h-5" />
                {content.contactCta}
              </a>

              <div className="mt-8">
                <Link
                  to={`/layanan/${service.slug}`}
                  className="text-sm text-content-light/60 hover:text-accent transition-colors"
                >
                  ← {content.backToLayanan}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductDetailPage;
