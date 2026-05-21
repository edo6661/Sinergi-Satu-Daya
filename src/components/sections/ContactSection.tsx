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

  // State untuk form
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

    if (onSubmit) {
      onSubmit(formData);
    }

    const waNumber = '628110000000';
    // Gunakan \n biasa untuk enter
    const message = `Halo Tim SSD, saya ingin meminta penawaran dengan detail berikut:\n
*Nama/Perusahaan:* ${formData.name}\n
*No HP/WA:* ${formData.phone}\n
*Jenis Armada:* ${formData.vehicleType}\n
*Jumlah Unit:* ${formData.unitCount} Unit\n
*Lokasi:* ${formData.location}\n
\nMohon informasi lebih lanjut. Terima kasih.`;

    // Lakukan encodeURIComponent untuk memastikan karakter spesial aman di URL parsing
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, '_blank');

    setTimeout(() => {
      setFormData({ name: '', phone: '', vehicleType: '', unitCount: '', location: '' });
      setIsSubmitting(false);
    }, 1000);
  }, [formData, onSubmit]);

  const inputClass = "w-full px-5 py-4 rounded-xl bg-surface-light border border-border-light focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 transition-all outline-none text-content-main font-medium placeholder:text-content-muted/50 shadow-sm";

  return (
    <section className="py-24 bg-surface-light text-content-main relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">

          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12 bg-surface-darkest text-content-inverse p-12 md:p-16 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Aksen Tech Glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-electric/10 rounded-full blur-[60px]" />

            <div className="relative z-10">
              <span className="text-accent font-black tracking-[0.2em] text-xs uppercase mb-6 block border-l-2 border-accent pl-4">
                {content.info.tagline}
              </span>
              <h2 className="text-4xl font-black font-heading mb-6 leading-tight tracking-tighter">
                {content.info.heading.split(' ').map((word, i) => i === content.info.heading.split(' ').length - 1 ? <span key={i} className="text-accent">{word}</span> : word + ' ')}
              </h2>
              <p className="text-content-light/60 text-base leading-relaxed mb-12 max-w-sm">
                {content.info.description}
              </p>

              <div className="space-y-8">
                {content.info.details.map((detail, index) => {
                  const Icon = detail.icon;
                  return (
                    <div key={index} className="flex items-start gap-5 group">
                      <div className="mt-1 bg-white/5 p-3 rounded-xl border border-white/10 group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-surface-white font-bold text-sm mb-1 tracking-tight">{detail.title}</h4>
                        <p className="text-content-light/50 text-sm font-medium">{detail.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-7/12 bg-surface-white p-10 md:p-12"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">{content.form.title}</h3>
              <p className="text-content-muted text-sm">{content.form.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-content-main/80 mb-1.5">{content.form.fields.name}</label>
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
                  <label className="block text-sm font-semibold text-content-main/80 mb-1.5">{content.form.fields.phone}</label>
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
                  <label className="block text-sm font-semibold text-content-main/80 mb-1.5">{content.form.fields.unitCount}</label>
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
                <label className="block text-sm font-semibold text-content-main/80 mb-1.5">{content.form.fields.vehicleType}</label>
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
                <label className="block text-sm font-semibold text-content-main/80 mb-1.5">{content.form.fields.location}</label>
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
                disabled={isSubmitting} // Disable saat loading
                className={`w-full mt-4 flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold transition-all transform shadow-lg ${isSubmitting
                  ? 'bg-border-light text-content-muted cursor-not-allowed shadow-none'
                  : 'bg-accent hover:bg-accent-hover text-content-main hover:-translate-y-0.5 shadow-accent/30'
                  }`}
              >
                <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                {isSubmitting ? (lang === 'id' ? 'Memproses...' : 'Processing...') : content.form.submit}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};