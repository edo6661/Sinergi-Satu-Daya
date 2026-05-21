import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { contactCopy, type ContactLanguage, type LeadFormData } from '../../data/copy/contact';
import { useAppLanguage } from '../../hooks/useAppLanguage';

interface ContactSectionProps {
  lang?: ContactLanguage;
  onSubmit?: (data: LeadFormData) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onSubmit
}) => {
  const { lang } = useAppLanguage();
  const content = contactCopy[lang];

  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    vehicleType: '',
    unitCount: '',
    location: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (onSubmit) onSubmit(formData);

    const waNumber = '628110000000';
    const message = `Halo Tim SSD, saya ingin meminta penawaran dengan detail berikut:\n
*Nama/Perusahaan:* ${formData.name}\n
*No HP/WA:* ${formData.phone}\n
*Jenis Armada:* ${formData.vehicleType}\n
*Jumlah Unit:* ${formData.unitCount} Unit\n
*Lokasi:* ${formData.location}\n
\nMohon informasi lebih lanjut. Terima kasih.`;

    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setTimeout(() => {
      setFormData({ name: '', phone: '', vehicleType: '', unitCount: '', location: '' });
      setIsSubmitting(false);
    }, 1000);
  }, [formData, onSubmit]);

  const inputClass = "w-full px-5 py-3.5 rounded-xl bg-surface-light border border-border-light hover:border-primary/20 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/5 transition-all duration-300 outline-none text-content-main text-sm font-semibold placeholder:text-content-muted/40 shadow-inner";

  return (
    <section className="py-24 bg-surface-light text-content-main relative">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Main Split Layout Panel */}
        <div className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.07)] flex flex-col lg:flex-row border border-border-light/40 bg-white">

          {/* Left Block: Corporate Info Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12 bg-surface-darkest text-content-inverse p-10 md:p-14 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Tech Mesh Lighting Effects */}
            <div className="absolute top-0 right-0 -mr-24 -mt-24 w-80 h-80 bg-accent/15 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-electric/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <span className="text-accent font-black tracking-[0.25em] text-[10px] uppercase mb-5 block border-l-2 border-accent pl-4 leading-none">
                {content.info.tagline}
              </span>
              <h2 className="text-3xl md:text-4xl font-black font-heading mb-6 leading-[1.2] tracking-tight">
                {content.info.heading.split(' ').map((word, i) => i === content.info.heading.split(' ').length - 1 ? <span key={i} className="text-gradient-accent">{word}</span> : word + ' ')}
              </h2>
              <p className="text-content-light/70 text-sm leading-relaxed mb-12 max-w-sm font-medium">
                {content.info.description}
              </p>

              <div className="space-y-6">
                {content.info.details.map((detail, index) => {
                  const Icon = detail.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="mt-0.5 bg-white/5 p-2.5 rounded-xl border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300 shadow-inner">
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-surface-white font-bold text-sm tracking-tight mb-0.5">{detail.title}</h4>
                        <p className="text-content-light/50 text-xs font-semibold leading-relaxed">{detail.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Block: Interactive Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-7/12 p-10 md:p-14 bg-white"
          >
            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-black text-primary mb-2 font-heading tracking-tight">{content.form.title}</h3>
              <p className="text-content-muted text-sm font-medium">{content.form.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-[10px] font-black text-primary uppercase tracking-widest mb-2">{content.form.fields.name}</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Cth: Budi Santoso - PT Sinergi"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-black text-primary uppercase tracking-widest mb-2">{content.form.fields.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="0812-XXXX-XXXX"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-primary uppercase tracking-widest mb-2">{content.form.fields.unitCount}</label>
                  <input
                    type="number"
                    name="unitCount"
                    min="1"
                    required
                    value={formData.unitCount}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Cth: 10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-primary uppercase tracking-widest mb-2">{content.form.fields.vehicleType}</label>
                <select
                  name="vehicleType"
                  required
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="" disabled>{content.form.options.placeholder}</option>
                  <option value="passenger">{content.form.options.passenger}</option>
                  <option value="commercial">{content.form.options.commercial}</option>
                  <option value="custom">{content.form.options.custom}</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-black text-primary uppercase tracking-widest mb-2">{content.form.fields.location}</label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Cth: Kawasan Industri Pulogadung"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full mt-4 group flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300 overflow-hidden relative border border-transparent cursor-pointer ${isSubmitting
                    ? 'bg-surface-light text-content-muted cursor-not-allowed border-border-light'
                    : 'bg-primary hover:bg-primary-hover text-surface-white shadow-[0_12px_30px_rgba(30,41,59,0.18)] hover:-translate-y-0.5'
                  }`}
              >
                {!isSubmitting && <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />}
                <Send className={`w-4 h-4 relative z-10 ${isSubmitting ? 'animate-pulse text-content-muted' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-accent'}`} />
                <span className="relative z-10">{isSubmitting ? (lang === 'id' ? 'Memproses...' : 'Processing...') : content.form.submit}</span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};