import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const contactCopy = {
  id: {
    info: {
      tagline: "Mulai Transformasi Anda",
      heading: "Hubungi Tim Konsultan Kami",
      description:
        "Butuh penjualan kendaraan EV, rental B2B, konsultasi EV, pemasangan EV charger, atau sistem fire safety LFK? Tim konsultan kami siap membantu dari perencanaan hingga eksekusi.",
      details: [
        {
          icon: MapPin,
          title: "Kantor Pusat",
          desc: "Gedung SSD Tower, SCBD, Jakarta Selatan",
        },
        {
          icon: MapPin,
          title: "Gudang & Pool EV",
          desc: "Kawasan Industri Jatake, Tangerang, Banten",
        },
        {
          icon: Phone,
          title: "Hotline B2B",
          desc: "+62 812 3456 7890",
        },
        { icon: Mail, title: "Email", desc: "support@sinergisatudaya.com" },
        {
          icon: Clock,
          title: "Jam Operasional",
          desc: "Senin - Jumat: 08.00 - 17.00 WIB",
        },
      ],
    },
    form: {
      title: "Minta Penawaran Spesial",
      subtitle:
        "Isi data berikut dan kami akan menghubungi Anda dalam 1x24 jam.",
      fields: {
        name: "Nama Lengkap & Perusahaan",
        phone: "Nomor HP / WhatsApp",
        vehicleType: "Jenis Layanan yang Dibutuhkan",
        unitCount: "Estimasi Jumlah Unit",
        location: "Lokasi Pengadaan / Pool",
      },
      options: {
        placeholder: "Pilih Jenis Layanan",
        passenger: "Penjualan Kendaraan EV",
        commercial: "Rental B2B",
        custom: "Konsultasi EV / Infrastruktur (Charger & LFK)",
      },
      submit: "Daftar Sekarang",
    },
  },
  en: {
    info: {
      tagline: "Start Your Transformation",
      heading: "Contact Our Consulting Team",
      description:
        "Need EV vehicle sales, B2B rental, EV consulting, EV charger installation, or LFK fire safety systems? Our consulting team is ready to assist from planning to execution.",
      details: [
        {
          icon: MapPin,
          title: "Head Office",
          desc: "SSD Tower, SCBD, South Jakarta",
        },
        {
          icon: MapPin,
          title: "EV Warehouse & Pool",
          desc: "Jatake Industrial Estate, Tangerang, Banten",
        },
        {
          icon: Phone,
          title: "B2B Hotline",
          desc: "+62 811-XXXX-XXXX (WhatsApp Available)",
        },
        { icon: Mail, title: "Email", desc: "b2b@sinergisatudaya.co.id" },
        {
          icon: Clock,
          title: "Business Hours",
          desc: "Monday - Friday: 08.00 - 17.00 WIB",
        },
      ],
    },
    form: {
      title: "Request a Special Quote",
      subtitle:
        "Fill out the details below and we will contact you within 24 hours.",
      fields: {
        name: "Full Name & Company",
        phone: "Phone / WhatsApp Number",
        vehicleType: "Required Service Type",
        unitCount: "Estimated Number of Units",
        location: "Procurement / Pool Location",
      },
      options: {
        placeholder: "Select Service Type",
        passenger: "EV Vehicle Sales",
        commercial: "B2B Rental",
        custom: "EV Consulting / Infrastructure (Charger & LFK)",
      },
      submit: "Register Now",
    },
  },
} as const;

export type ContactLanguage = keyof typeof contactCopy;

// Tipe data untuk form submission
export interface LeadFormData {
  name: string;
  phone: string;
  vehicleType: string;
  unitCount: string;
  location: string;
}
