import { MapPin, Mail } from "lucide-react";

export const contactCopy = {
  id: {
    info: {
      tagline: "Mulai Transformasi Anda",
      heading: "Hubungi Tim Konsultan Kami",
      description:
        "Membutuhkan layanan penjualan kendaraan listrik, penyewaan B2B, konsultasi kendaraan listrik, instalasi pengisi daya, atau sistem proteksi kebakaran ? Tim konsultan kami siap membantu Anda dari tahap perencanaan hingga eksekusi.",
      details: [
        {
          icon: MapPin,
          title: "Alamat",
          desc: "Tower One, TCC Batavia, 5th Floor, Jl. K.H. Mas Mansyur, Karet Tengsin, Kec. Tanah Abang, Kota Jakarta Pusat",
        },

        {
          icon: Mail,
          title: "Email",
          desc: "support@sinergisatudaya.com",
        },
      ],
    },
    form: {
      title: "Minta Penawaran Spesial",
      subtitle:
        "Isi data berikut dan tim kami akan menghubungi Anda dalam 1x24 jam.",
      fields: {
        name: "Nama Lengkap & Perusahaan",
        phone: "Nomor HP / WhatsApp",
        vehicleType: "Jenis Layanan yang Dibutuhkan",
        unitCount: "Estimasi Jumlah Unit",
        location: "Lokasi Pengadaan / Pangkalan Armada",
      },
      options: {
        placeholder: "Pilih Jenis Layanan",
        passenger: "Penjualan Kendaraan Listrik",
        commercial: "Penyewaan B2B",
        custom:
          "Konsultasi / Infrastruktur Kendaraan Listrik (Pengisi Daya & LFK)",
      },
      submit: "Kirim Permintaan",
    },
  },
  en: {
    info: {
      tagline: "Start Your Transformation",
      heading: "Contact Our Consulting Team",
      description:
        "Require EV sales, B2B rentals, EV consulting, charging station installations, or LFK fire safety systems? Our consulting team is ready to assist you from planning to execution.",
      details: [
        {
          icon: MapPin,
          title: "Address",
          desc: "Tower One, TCC Batavia, Lt.5, Jl. K.H. Mas Mansyur, Karet Tengsin, Kec. Tanah Abang, Kota Jakarta Pusat",
        },
        {
          icon: Mail,
          title: "Email",
          desc: "support@sinergisatudaya.com",
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
        location: "Procurement / Fleet Pool Location",
      },
      options: {
        placeholder: "Select Service Type",
        passenger: "EV Sales",
        commercial: "B2B Rentals",
        custom: "EV Consulting / Infrastructure (Chargers & LFK)",
      },
      submit: "Submit Request",
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
