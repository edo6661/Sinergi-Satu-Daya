import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useAppLanguage } from '../../hooks/useAppLanguage';

interface FloatingWhatsAppProps {
  phoneNumber?: string; // Format: 62811xxxxxx
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = '628110000000',
}) => {
  const { lang } = useAppLanguage();

  // Terjemahan dinamis untuk pesan default & tooltip
  const defaultMessage = lang === 'id'
    ? 'Halo Tim SSD, saya ingin konsultasi mengenai layanan kendaraan listrik B2B (penjualan, rental, konsultasi, charger, atau LFK) untuk bisnis saya.'
    : 'Hello SSD Team, I would like to consult regarding B2B EV services (sales, rental, consulting, charger, or LFK) for my business.';

  const tooltipText = lang === 'id' ? 'Hubungi via WhatsApp' : 'Contact via WhatsApp';

  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-success text-surface-white rounded-full shadow-2xl hover:bg-success-hover transition-colors group animate-ripple"
      aria-label={tooltipText}
    >
      <MessageCircle className="w-7 h-7" />

      {/* Tooltip on Hover */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-surface-darker text-surface-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
        {tooltipText}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-surface-darker" />
      </div>
    </motion.a>
  );
};