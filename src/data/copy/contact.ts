import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const contactCopy = {
  id: {
    info: {
      tagline: "Mulai Transformasi Anda",
      heading: "Hubungi Tim Konsultan Kami",
      description:
        "Siap beralih ke armada bebas emisi atau butuh perhitungan ROI khusus untuk bisnis Anda? Tim ahli kami siap membantu Anda dari perencanaan hingga eksekusi.",
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
          desc: "+62 811-XXXX-XXXX (WhatsApp Available)",
        },
        { icon: Mail, title: "Email", desc: "b2b@sinergisatudaya.co.id" },
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
        vehicleType: "Jenis Armada yang Dibutuhkan",
        unitCount: "Estimasi Jumlah Unit",
        location: "Lokasi Pengadaan / Pool",
      },
      options: {
        placeholder: "Pilih Jenis Kendaraan",
        passenger: "Mobil Penumpang (Executive/Operasional)",
        commercial: "Kendaraan Niaga (Van/Kargo)",
        custom: "Custom / Konsultasi Dulu",
      },
      submit: "Kirim Permintaan Penawaran",
    },
  },
  en: {
    info: {
      tagline: "Start Your Transformation",
      heading: "Contact Our Consulting Team",
      description:
        "Ready to switch to a zero-emission fleet or need a custom ROI calculation for your business? Our expert team is ready to assist from planning to execution.",
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
        vehicleType: "Required Fleet Type",
        unitCount: "Estimated Number of Units",
        location: "Procurement / Pool Location",
      },
      options: {
        placeholder: "Select Vehicle Type",
        passenger: "Passenger Car (Executive/Operational)",
        commercial: "Commercial Vehicle (Van/Cargo)",
        custom: "Custom / Need Consultation First",
      },
      submit: "Send Quote Request",
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
