import { categoryToServiceSlug, resolveServiceSlug } from "./services";

export interface LayananCategory {
  id: string;
  slug: string;
  name: { id: string; en: string };
  description: { id: string; en: string };
}

export interface LayananProduct {
  id: string;
  slug: string;
  categoryId: string;
  brand?: string;
  title: { id: string; en: string };
  description: { id: string; en: string };
  image: string;
  images?: {
    front: string;
    back: string;
    left: string;
    right: string;
  };
}

const img = (path: string) => encodeURI(path);

const makaCavalryDescription = {
  id: `Motor listrik tangguh yang dirancang khusus untuk efisiensi operasional usaha Anda dan kelestarian lingkungan. Memadukan performa dinamo 12 HP dengan torsi melimpah 251 Nm, motor ini siap melibas tanjakan hingga 30° dengan akselerasi yang responsif. Ditenagai oleh baterai tanam Intercellar™ berkapasitas 4 kWh, MAKA Cavalry mampu menempuh jarak ekstra jauh hingga 160 km dalam sekali pengisian penuh, serta mendukung opsi fast charging yang super cepat.

Keandalan harian Anda semakin terjamin berkat sertifikasi IP67 yang tahan debu dan aman menerjang genangan air hingga kedalaman 60 cm. Dilengkapi dengan kapasitas bagasi luas 20 Liter dan USB charging port terintegrasi, MAKA Cavalry bukan sekadar kendaraan operasional, melainkan mitra bisnis modern yang siap menekan biaya pengeluaran dan meningkatkan produktivitas usaha Anda setiap hari.`,
  en: `A rugged electric motorcycle specially designed to improve your business's operational efficiency while supporting environmental sustainability. Combining a 12 HP motor with an ample 251 Nm of torque, it can handle inclines of up to 30° with responsive acceleration. Powered by a built-in 4 kWh Intercellar™ battery, the MAKA Cavalry can travel up to 160 km on a full charge and supports ultra-fast charging.

Daily reliability is further assured by IP67 certification, providing dust protection and safe performance through water puddles up to 60 cm deep. With a spacious 20-liter storage compartment and an integrated USB charging port, the MAKA Cavalry is more than an operational vehicle—it is a modern business partner ready to reduce operating costs and improve your business productivity every day.`,
};

const volta401Description = {
  id: `Volta 401 hadir sebagai solusi motor listrik yang andal, ekonomis, dan ramah lingkungan untuk mendukung mobilitas bisnis harian Anda. Dibekali daya motor maksimum 1500 Watt hingga 1900 Watt, skutik listrik ini mampu melaju dengan kecepatan maksimum 60 km/jam dan memiliki daya angkut tangguh hingga 150 kg - 200 kg.

Keunggulan utama Volta 401 terletak pada fitur Double Battery Slot yang menggunakan baterai Lithium tahan panas (LiFePO4). Dengan satu baterai, motor ini dapat menempuh jarak 60 km, dan dapat ditingkatkan hingga 120 km menggunakan dua baterai sekaligus untuk produktivitas operasional tanpa henti. Didukung dengan Sistem Ganti Baterai (SGB) yang praktis, fitur modern seperti LCD Digital Speedometer, USB Charging Port, serta gigi mundur (Reverse Function), Volta 401 siap menjadi mitra bisnis terbaik untuk menekan biaya pengeluaran harian usaha Anda secara signifikan.`,
  en: `The Volta 401 is a reliable, economical, and eco-friendly electric motorcycle designed to support your daily business mobility. With a maximum motor output of 1,500 to 1,900 Watts, this electric scooter can reach speeds of up to 60 km/h and carry a substantial load of 150–200 kg.

The Volta 401's key advantage is its Double Battery Slot, which uses heat-resistant Lithium (LiFePO4) batteries. One battery provides a range of 60 km, extendable to 120 km with two batteries for uninterrupted operational productivity. Supported by a practical Battery Swap System (SGB), an LCD Digital Speedometer, USB Charging Port, and Reverse Function, the Volta 401 is ready to become your ideal business partner for significantly reducing daily operating expenses.`,
};

const voltaMandalaXDescription = {
  id: `Volta Mandala X adalah perpaduan sempurna antara desain skuter klasik yang timeless dan teknologi masa depan yang ramah lingkungan. Dikembangkan untuk mobilitas urban dan bisnis yang ingin tampil beda, motor listrik ini dibekali dengan daya maksimum (peak power) hingga 4000 Watt yang responsif. Berkat fitur inovatif Double Slot Battery berkapasitas 73.6V 27Ah SGB LiFePO4 (Lithium tahan panas), Volta Mandala X siap menemani perjalanan Anda dengan jarak tempuh impresif hingga 150 km serta estimasi kecepatan maksimum mencapai 70 km/jam.

Tidak hanya bertenaga, kenyamanan dan keamanan berkendara Anda juga didukung oleh sistem pengereman Combi Brake System (CBS) untuk meminimalkan risiko slip, kapasitas daya angkut tangguh hingga 150 kg, serta fitur modern seperti penguncian pintar via NFC Lock. Volta Mandala X adalah pilihan cerdas untuk efisiensi biaya operasional harian Anda tanpa harus mengorbankan gaya bergaya premium.`,
  en: `The Volta Mandala X is a perfect blend of timeless classic scooter design and eco-friendly future technology. Developed for urban mobility and businesses that want to stand out, this electric motorcycle delivers responsive peak power of up to 4,000 Watts. With an innovative Double Slot Battery featuring a 73.6V 27Ah SGB LiFePO4 heat-resistant Lithium battery, the Volta Mandala X offers an impressive range of up to 150 km and an estimated top speed of 70 km/h.

Beyond its power, riding comfort and safety are supported by a Combi Brake System (CBS) to minimize the risk of slipping, a robust load capacity of up to 150 kg, and modern features such as NFC Lock smart locking. The Volta Mandala X is a smart choice for improving daily operating cost efficiency without compromising on premium style.`,
};

const voltaPatriotXDescription = {
  id: `Volta Patriot X hadir sebagai jawaban bagi Anda yang menginginkan performa tangguh, kenyamanan maksimal, dan tampilan sporty yang modern. Dirancang untuk mobilitas urban maupun kebutuhan operasional yang dinamis, motor listrik premium ini dibekali dengan daya maksimum (peak power) hingga 4000 Watt. Didukung oleh teknologi Double Slot Battery berkapasitas 73.6V 27Ah LiFePO4 (Lithium tahan panas), Volta Patriot X siap melaju dengan kecepatan maksimum hingga 70 km/jam dan mampu menempuh jarak ekstra jauh hingga 150 km saat kedua slot baterai terisi penuh.

Kenyamanan berkendara di berbagai medan jalan dipastikan oleh suspensi yang empuk, daya angkut kuat hingga 150 kg, serta efisiensi pengisian daya dengan opsi sistem ganti baterai (SGB) yang praktis. Dilengkapi dengan fitur keamanan canggih berbasis NFC Lock dan sistem pengereman yang pakem, Volta Patriot X adalah pilihan investasi cerdas untuk operasional bisnis yang super efisien tanpa kehilangan kesan gagah dan profesional di jalanan.`,
  en: `The Volta Patriot X is the answer for those seeking strong performance, maximum comfort, and a modern sporty look. Designed for urban mobility and dynamic operational needs, this premium electric motorcycle delivers peak power of up to 4,000 Watts. Supported by Double Slot Battery technology with a 73.6V 27Ah LiFePO4 heat-resistant Lithium battery, the Volta Patriot X can reach speeds of up to 70 km/h and travel up to 150 km when both battery slots are fully charged.

Comfort across a variety of roads is assured by soft suspension, a strong load capacity of up to 150 kg, and efficient charging with a practical Battery Swap System (SGB) option. Equipped with advanced NFC Lock security and responsive braking, the Volta Patriot X is a smart investment for highly efficient business operations without losing its bold, professional presence on the road.`,
};

const yadeaGs70Description = {
  id: `Yadea GS70 hadir membawa revolusi mobilitas urban lewat bahasa desain Mech-Bionic yang agresif, kokoh, dan modern. Mengusung semangat kendaraan komuter masa depan, motor listrik premium ini dibekali dinamo hub-motor bertenaga nominal 1.500 Watt dengan daya puncak hingga 2.800 Watt dan torsi instan melimpah 105 Nm. Didukung oleh baterai tangguh 72V 30Ah LFP (Lithium Ferro Phosphate), Yadea GS70 mampu melaju dengan kecepatan maksimum hingga 65 km/jam dan menempuh jarak ekstra jauh hingga 100+ km dalam sekali pengisian penuh.

Kenyamanan berkendara Anda semakin naik kelas berkat integrasi fitur keamanan digital mutakhir seperti sistem penguncian instan tanpa kunci fisik (One-Second Smart Unlock), GPS Tracking, hingga kontrol traksi (TCS). Dilengkapi pula dengan lampu depan LED ultra-wide 120 derajat bersensor gelap otomatis serta sasis baja berkekuatan tinggi, Yadea GS70 adalah kombinasi sempurna antara performa stabil, efisiensi operasional tinggi, dan gaya hidup cerdas yang siap diandalkan setiap hari.`,
  en: `The Yadea GS70 brings a revolution in urban mobility through its aggressive, sturdy, and modern Mech-Bionic design language. Built in the spirit of the commuter vehicle of the future, this premium electric motorcycle features a hub motor with a nominal output of 1,500 Watts, peak power of up to 2,800 Watts, and abundant instant torque of 105 Nm. Powered by a robust 72V 30Ah LFP (Lithium Ferro Phosphate) battery, the Yadea GS70 can reach speeds of up to 65 km/h and travel over 100 km on a full charge.

Riding comfort is elevated by advanced digital safety features such as keyless One-Second Smart Unlock, GPS Tracking, and Traction Control (TCS). It also features an ultra-wide 120-degree LED headlamp with an automatic darkness sensor and a high-strength steel chassis. The Yadea GS70 is the perfect combination of stable performance, high operational efficiency, and a smart lifestyle you can rely on every day.`,
};

const yadeaGt20Description = {
  id: `Yadea GT20 hadir sebagai skuter listrik bergaya sporty dan modern yang dirancang khusus untuk menghadapi dinamika serta cuaca ekstrem di perkotaan. Dibekali dengan Wheel Hub Motor bertenaga 1.500 Watt dengan daya puncak instan hingga 2.700 Watt, motor ini menawarkan akselerasi awal yang responsif, kecepatan maksimal 51 km/jam, serta torsi melimpah 135 Nm yang andal melibas tanjakan. Keunggulan utamanya terletak pada penggunaan teknologi Baterai Graphene TTFAR (72V 23Ah) yang memiliki daya tahan hingga 3 kali lebih lama dibanding baterai biasa dan mampu menempuh jarak hingga 80 km dalam sekali pengisian penuh.

Ketangguhan Yadea GT20 semakin teruji berkat komponen utama yang dirancang kedap air, membuatnya aman menerjang genangan air hingga kedalaman 300 mm. Kenyamanan harian Anda didukung oleh ruang kaki (pedal) yang luas sepanjang 350 mm, lampu utama LED yang terang, serta panel instan Digital Tub yang minimalis. Ditambah fitur keamanan pintar seperti Bluetooth dan App Remote Unlock, Yadea GT20 adalah kendaraan operasional yang praktis, trendi, dan sangat efisien untuk jangka panjang.`,
  en: `The Yadea GT20 is a sporty, modern electric scooter designed specifically to handle the dynamics and extreme weather of urban environments. Equipped with a 1,500-Watt Wheel Hub Motor and instant peak power of up to 2,700 Watts, it offers responsive initial acceleration, a top speed of 51 km/h, and ample 135 Nm torque for confidently handling inclines. Its key advantage is TTFAR Graphene Battery technology (72V 23Ah), which lasts up to three times longer than standard batteries and provides a range of up to 80 km on a full charge.

The Yadea GT20's durability is reinforced by waterproof main components, allowing it to safely pass through puddles up to 300 mm deep. Daily comfort is supported by a spacious 350 mm footboard, bright LED headlights, and an instant Digital Tub panel with a minimalist design. With smart security features such as Bluetooth and App Remote Unlock, the Yadea GT20 is a practical, trendy, and highly efficient operational vehicle for the long term.`,
};

const yadeaVelaxDescription = {
  id: `Yadea Velax hadir menetapkan standar baru mobilitas urban melalui perpaduan desain modern yang lebar, posisi jok ergonomis yang lega, serta deck kaki luas yang sangat fungsional untuk membawa barang harian. Skutik listrik premium ini ditenagai dinamo tangguh berkapasitas 2000 Watt hingga 3200 Watt yang responsif, serta didukung oleh fitur keselamatan canggih bersertifikasi IPX7 Waterproof untuk ketenangan berkendara saat musim hujan atau menerjang genangan air.

Daya jelajah Yadea Velax menjadi salah satu yang terbaik di kelasnya, mampu menempuh jarak impresif mulai dari 90 km hingga 130 km dalam sekali pengisian penuh berkat efisiensi opsi baterai berkualitas tinggi (tersedia varian Graphene, Lithium, hingga teknologi Fast Charging). Kenyamanan berkendara harian Anda semakin disempurnakan oleh ekosistem digital mutakhir yang terintegrasi langsung ke ponsel pintar Anda—mulai dari fitur penguncian praktis (Bluetooth & App Remote Unlock), pelacakan posisi via GPS Tracking, hingga sistem keamanan antikaling Motion Detection Alert. Yadea Velax adalah investasi cerdas untuk gaya hidup modern dan operasional bisnis yang menginginkan kemewahan sekaligus efisiensi maksimal.`,
  en: `The Yadea Velax sets a new standard for urban mobility through its combination of a wide modern design, a spacious ergonomic seat position, and a broad, highly functional footboard for carrying daily goods. This premium electric scooter is powered by a responsive 2,000- to 3,200-Watt motor and supported by advanced safety features with IPX7 Waterproof certification for peace of mind during rainy seasons or when passing through puddles.

The Yadea Velax offers one of the best ranges in its class, traveling an impressive 90 to 130 km on a full charge through its efficient, high-quality battery options, including Graphene, Lithium, and Fast Charging variants. Daily riding comfort is further enhanced by an advanced digital ecosystem integrated with your smartphone, including convenient locking through Bluetooth and App Remote Unlock, GPS Tracking, and an anti-theft Motion Detection Alert system. The Yadea Velax is a smart investment for modern lifestyles and business operations seeking both luxury and maximum efficiency.`,
};

export const layananCategories: LayananCategory[] = [
  {
    id: "two-wheel",
    slug: "two-wheel",
    name: { id: "Roda 2", en: "2-Wheelers" },
    description: {
      id: "Motor listrik untuk operasional harian dan pengiriman jarak pendek.",
      en: "Electric motorcycles for daily operations and short-range delivery.",
    },
  },
  {
    id: "passenger",
    slug: "passenger",
    name: { id: "Mobil Penumpang", en: "Passenger Cars" },
    description: {
      id: "Mobil listrik penumpang untuk kebutuhan korporat dan operasional bisnis.",
      en: "Passenger EVs for corporate and business operational needs.",
    },
  },
  {
    id: "commercial",
    slug: "commercial",
    name: { id: "Niaga & Logistik", en: "Commercial & Logistics" },
    description: {
      id: "Armada niaga dan logistik listrik untuk distribusi dan transportasi barang.",
      en: "Electric commercial and logistics fleets for distribution and cargo transport.",
    },
  },
  {
    id: "charger",
    slug: "charger",
    name: { id: "Pengisi Daya Kendaraan Listrik", en: "EV Chargers" },
    description: {
      id: "Stasiun pengisian daya AC dan DC untuk infrastruktur kendaraan listrik.",
      en: "AC and DC charging stations for EV infrastructure.",
    },
  },
  {
    id: "project",
    slug: "project",
    name: { id: "Proyek Berhasil", en: "Successful Projects" },
    description: {
      id: "Implementasi armada listrik berskala besar yang telah kami dukung.",
      en: "Large-scale EV fleet implementations we have supported.",
    },
  },
  {
    id: "proteksi",
    slug: "proteksi",
    name: { id: "Proteksi Kebakaran LFK", en: "LFK Fire Protection" },
    description: {
      id: "Pemadam api litium Lithium Fire Killer (LFK) untuk proteksi area armada dan charging station.",
      en: "Lithium Fire Killer (LFK) extinguishers for fleet pool and charging station protection.",
    },
  },
];

export const layananProducts: LayananProduct[] = [
  // Roda 2 — MAKA
  {
    id: "maka-cavalry-ocean-blue",
    slug: "maka-cavalry-ocean-blue",
    categoryId: "two-wheel",
    brand: "MAKA",
    title: { id: "MAKA Cavalry — Ocean Blue", en: "MAKA Cavalry — Ocean Blue" },
    description: makaCavalryDescription,
    image: img("/products/Roda 2/MAKA/Ocean-Blue-Maka-Cavalry.webp"),
  },
  {
    id: "maka-cavalry-royal-white",
    slug: "maka-cavalry-royal-white",
    categoryId: "two-wheel",
    brand: "MAKA",
    title: {
      id: "MAKA Cavalry — Royal White",
      en: "MAKA Cavalry — Royal White",
    },
    description: makaCavalryDescription,
    image: img("/products/Roda 2/MAKA/Royal-White-Maka-Cavalry.webp"),
  },
  {
    id: "maka-cavalry-victory-red",
    slug: "maka-cavalry-victory-red",
    categoryId: "two-wheel",
    brand: "MAKA",
    title: {
      id: "MAKA Cavalry — Victory Red",
      en: "MAKA Cavalry — Victory Red",
    },
    description: makaCavalryDescription,
    image: img("/products/Roda 2/MAKA/Victory-Red-Maka-Cavalry.webp"),
  },
  // Roda 2 — Volta
  {
    id: "volta-mandala-x",
    slug: "volta-mandala-x",
    categoryId: "two-wheel",
    brand: "Volta",
    title: { id: "Volta Mandala X", en: "Volta Mandala X" },
    description: voltaMandalaXDescription,
    image: img("/products/Roda 2/Volta/Mandala X.jpg"),
  },
  {
    id: "volta-patriot-x",
    slug: "volta-patriot-x",
    categoryId: "two-wheel",
    brand: "Volta",
    title: { id: "Volta Patriot X", en: "Volta Patriot X" },
    description: voltaPatriotXDescription,
    image: img("/products/Roda 2/Volta/Patriot X.jpg"),
  },
  {
    id: "volta-401",
    slug: "volta-401",
    categoryId: "two-wheel",
    brand: "Volta",
    title: { id: "Volta 401", en: "Volta 401" },
    description: volta401Description,
    image: img("/products/Roda 2/Volta/Volta_401.png"),
  },
  // Roda 2 — Yadea
  {
    id: "yadea-gs70",
    slug: "yadea-gs70",
    categoryId: "two-wheel",
    brand: "Yadea",
    title: { id: "Yadea GS70", en: "Yadea GS70" },
    description: yadeaGs70Description,
    image: img("/products/Roda 2/Yadea/Yadea_GS70.png"),
  },
  {
    id: "yadea-gt20",
    slug: "yadea-gt20",
    categoryId: "two-wheel",
    brand: "Yadea",
    title: { id: "Yadea GT20", en: "Yadea GT20" },
    description: yadeaGt20Description,
    image: img("/products/Roda 2/Yadea/Yadea_GT20.png"),
  },
  {
    id: "yadea-velax",
    slug: "yadea-velax",
    categoryId: "two-wheel",
    brand: "Yadea",
    title: { id: "Yadea Velax", en: "Yadea Velax" },
    description: yadeaVelaxDescription,
    image: img("/products/Roda 2/Yadea/Yadea_Velax.png"),
  },
  // Mobil Penumpang — MG
  {
    id: "mg-4-ev",
    slug: "mg-4-ev",
    categoryId: "passenger",
    brand: "MG",
    title: { id: "MG 4 EV", en: "MG 4 EV" },
    description: {
      id: "Mobil penumpang listrik MG 4 EV untuk kebutuhan korporat dan eksekutif.",
      en: "MG 4 EV passenger electric car for corporate and executive needs.",
    },
    image: img("/products/Passanger Roda 4/MG/mg-4-ev-color-163696.png"),
  },
  {
    id: "mg-zs-ev",
    slug: "mg-zs-ev",
    categoryId: "passenger",
    brand: "MG",
    title: { id: "MG ZS EV", en: "MG ZS EV" },
    description: {
      id: "SUV listrik MG ZS EV dengan jarak tempuh optimal untuk operasional bisnis.",
      en: "MG ZS EV electric SUV with optimal range for business operations.",
    },
    image: img("/products/Passanger Roda 4/MG/MG ZS EV.png"),
  },
  // Mobil Penumpang — Wuling
  {
    id: "wuling-air-ev",
    slug: "wuling-air-ev",
    categoryId: "passenger",
    brand: "Wuling",
    title: { id: "Wuling Air EV Long Range", en: "Wuling Air EV Long Range" },
    description: {
      id: "Mobil listrik kompak Wuling Air EV untuk mobilitas perkotaan perusahaan.",
      en: "Wuling Air EV compact electric car for corporate urban mobility.",
    },
    image: img("/products/Passanger Roda 4/Wuling/Air EV Long Range.png"),
  },
  {
    id: "wuling-binguo-ev",
    slug: "wuling-binguo-ev",
    categoryId: "passenger",
    brand: "Wuling",
    title: { id: "Wuling Binguo EV", en: "Wuling Binguo EV" },
    description: {
      id: "Mobil listrik Wuling Binguo EV dengan desain stylish untuk armada korporat.",
      en: "Wuling Binguo EV electric car with stylish design for corporate fleets.",
    },
    image: img("/products/Passanger Roda 4/Wuling/Binguo EV.png"),
  },
  {
    id: "wuling-cloud-ev",
    slug: "wuling-cloud-ev",
    categoryId: "passenger",
    brand: "Wuling",
    title: { id: "Wuling Cloud EV", en: "Wuling Cloud EV" },
    description: {
      id: "Mobil listrik Wuling Cloud EV untuk kebutuhan transportasi penumpang bisnis.",
      en: "Wuling Cloud EV electric car for business passenger transport needs.",
    },
    image: img("/products/Passanger Roda 4/Wuling/Cloud EV.png"),
  },
  {
    id: "wuling-mitra-ev-passenger",
    slug: "wuling-mitra-ev-passenger",
    categoryId: "passenger",
    brand: "Wuling",
    title: { id: "Wuling Mitra EV Passenger", en: "Wuling Mitra EV Passenger" },
    description: {
      id: "Mobil penumpang listrik Wuling Mitra EV untuk layanan transportasi B2B.",
      en: "Wuling Mitra EV passenger electric car for B2B transport services.",
    },
    image: img("/products/Passanger Roda 4/Wuling/Mitra EV Passanger.png"),
  },
  // Niaga & Logistik — Foton Roda 4
  {
    id: "foton-e-truckmate",
    slug: "foton-e-truckmate",
    categoryId: "commercial",
    brand: "Foton",
    title: { id: "Foton E-Truckmate", en: "Foton E-Truckmate" },
    description: {
      id: "Kendaraan niaga listrik Foton E-Truckmate untuk distribusi dan logistik.",
      en: "Foton E-Truckmate electric commercial vehicle for distribution and logistics.",
    },
    image: img(
      "/products/Niaga.LogistikCommercial/Foton/Roda 4/E-Truckmate.png",
    ),
  },
  {
    id: "foton-e-tunland",
    slug: "foton-e-tunland",
    categoryId: "commercial",
    brand: "Foton",
    title: { id: "Foton E-Tunland", en: "Foton E-Tunland" },
    description: {
      id: "Pick-up listrik Foton E-Tunland untuk operasional niaga dan konstruksi.",
      en: "Foton E-Tunland electric pickup for commercial and construction operations.",
    },
    image: img("/products/Niaga.LogistikCommercial/Foton/Roda 4/E-Tunland.png"),
  },
  {
    id: "foton-e-view-connect",
    slug: "foton-e-view-connect",
    categoryId: "commercial",
    brand: "Foton",
    title: { id: "Foton E-View Connect", en: "Foton E-View Connect" },
    description: {
      id: "Van listrik Foton E-View Connect untuk transportasi penumpang komersial.",
      en: "Foton E-View Connect electric van for commercial passenger transport.",
    },
    image: img(
      "/products/Niaga.LogistikCommercial/Foton/Roda 4/E-View Connect.png",
    ),
  },
  {
    id: "foton-e-miler",
    slug: "foton-e-miler",
    categoryId: "commercial",
    brand: "Foton",
    title: { id: "Foton E-Miler", en: "Foton E-Miler" },
    description: {
      id: "Kendaraan listrik Foton E-Miler untuk armada logistik jarak menengah.",
      en: "Foton E-Miler electric vehicle for mid-range logistics fleets.",
    },
    image: img(
      "/products/Niaga.LogistikCommercial/Foton/Roda 4/Foton E-Miler.png",
    ),
  },
  // Niaga & Logistik — Foton Roda 6
  {
    id: "foton-e-aumark-14t",
    slug: "foton-e-aumark-14t",
    categoryId: "commercial",
    brand: "Foton",
    title: { id: "Foton E-Aumark 14T", en: "Foton E-Aumark 14T" },
    description: {
      id: "Truk listrik Foton E-Aumark 14T untuk distribusi barang berskala besar.",
      en: "Foton E-Aumark 14T electric truck for large-scale cargo distribution.",
    },
    image: img(
      "/products/Niaga.LogistikCommercial/Foton/Roda 6/E-Aumark 14T.png",
    ),
  },
  {
    id: "foton-e-aumark-85t",
    slug: "foton-e-aumark-85t",
    categoryId: "commercial",
    brand: "Foton",
    title: { id: "Foton E-Aumark 8.5T", en: "Foton E-Aumark 8.5T" },
    description: {
      id: "Truk listrik Foton E-Aumark 8.5T untuk logistik dan distribusi regional.",
      en: "Foton E-Aumark 8.5T electric truck for regional logistics and distribution.",
    },
    image: img(
      "/products/Niaga.LogistikCommercial/Foton/Roda 6/E-Aumark 8.5T.png",
    ),
  },
  {
    id: "foton-e-aumark",
    slug: "foton-e-aumark",
    categoryId: "commercial",
    brand: "Foton",
    title: { id: "Foton E-Aumark", en: "Foton E-Aumark" },
    description: {
      id: "Truk listrik Foton E-Aumark untuk kebutuhan armada niaga dan logistik.",
      en: "Foton E-Aumark electric truck for commercial and logistics fleet needs.",
    },
    image: img("/products/Niaga.LogistikCommercial/Foton/Roda 6/E-Aumark.png"),
  },
  // Niaga & Logistik — MAB
  {
    id: "mab-dtw-60t",
    slug: "mab-dtw-60t",
    categoryId: "commercial",
    brand: "MAB",
    title: { id: "MAB DTW 60T", en: "MAB DTW 60T" },
    description: {
      id: "Kendaraan niaga listrik MAB DTW 60T untuk transportasi barang berat.",
      en: "MAB DTW 60T electric commercial vehicle for heavy cargo transport.",
    },
    image: img("/products/Niaga.LogistikCommercial/MAB/DTW 60T.png"),
  },
  {
    id: "mab-eth-6",
    slug: "mab-eth-6",
    categoryId: "commercial",
    brand: "MAB",
    title: { id: "MAB ETH 6", en: "MAB ETH 6" },
    description: {
      id: "Bus listrik MAB ETH 6 untuk transportasi penumpang komersial.",
      en: "MAB ETH 6 electric bus for commercial passenger transport.",
    },
    image: img("/products/Niaga.LogistikCommercial/MAB/ETH 6.png"),
  },
  {
    id: "mab-8-nf",
    slug: "mab-8-nf",
    categoryId: "commercial",
    brand: "MAB",
    title: { id: "MAB 8 NF", en: "MAB 8 NF" },
    description: {
      id: "Bus listrik MAB 8 NF untuk armada transportasi penumpang B2B.",
      en: "MAB 8 NF electric bus for B2B passenger transport fleets.",
    },
    image: img("/products/Niaga.LogistikCommercial/MAB/MAB 8 NF.png"),
  },
  {
    id: "mab-md-12-e",
    slug: "mab-md-12-e",
    categoryId: "commercial",
    brand: "MAB",
    title: { id: "MAB MD 12-E", en: "MAB MD 12-E" },
    description: {
      id: "Bus listrik MAB MD 12-E dengan lantai normal untuk operasional komersial.",
      en: "MAB MD 12-E electric bus with normal floor for commercial operations.",
    },
    image: img(
      "/products/Niaga.LogistikCommercial/MAB/MAB MD 12-E Nromal Floor.png",
    ),
  },
  {
    id: "mab-md-8-e",
    slug: "mab-md-8-e",
    categoryId: "commercial",
    brand: "MAB",
    title: { id: "MAB MD 8 E", en: "MAB MD 8 E" },
    description: {
      id: "Bus listrik medium MAB MD 8 E untuk transportasi korporat.",
      en: "MAB MD 8 E medium electric bus for corporate transport.",
    },
    image: img("/products/Niaga.LogistikCommercial/MAB/MAB MD 8 E.png"),
  },
  // Niaga & Logistik — Wuling
  {
    id: "wuling-mitra-ev-bv",
    slug: "wuling-mitra-ev-bv",
    categoryId: "commercial",
    brand: "Wuling",
    title: { id: "Wuling Mitra EV BV", en: "Wuling Mitra EV BV" },
    description: {
      id: "Van niaga listrik Wuling Mitra EV BV untuk distribusi dan logistik.",
      en: "Wuling Mitra EV BV electric commercial van for distribution and logistics.",
    },
    image: img(
      "/products/Niaga.LogistikCommercial/Wuling/Wuling Mitra EV BV.png",
    ),
  },
  // EV Charger
  {
    id: "ac-11-kwh",
    slug: "ac-11-kwh",
    categoryId: "charger",
    brand: "SSD",
    title: { id: "AC Charger 11 kWh", en: "AC Charger 11 kWh" },
    description: {
      id: "Stasiun pengisian daya AC 11 kWh untuk instalasi kantor dan fasilitas bisnis.",
      en: "AC 11 kWh charging station for office and business facility installations.",
    },
    image: img("/products/Charger Device/ev_power.png"),
  },
  {
    id: "dc-60-360-kwh",
    slug: "dc-60-360-kwh",
    categoryId: "charger",
    brand: "SSD",
    title: { id: "DC Charger 60–360 kWh", en: "DC Charger 60–360 kWh" },
    description: {
      id: "Stasiun pengisian daya DC cepat 60–360 kWh untuk armada dan hub charging.",
      en: "DC fast charging station 60–360 kWh for fleets and charging hubs.",
    },
    image: img("/products/Charger Device/DC 60-360 kWh.png"),
  },
  {
    id: "dc-120-360-kwh",
    slug: "dc-120-360-kwh",
    categoryId: "charger",
    brand: "SSD",
    title: { id: "DC Charger 120–360 kWh", en: "DC Charger 120–360 kWh" },
    description: {
      id: "Stasiun pengisian daya DC ultra-cepat 120–360 kWh untuk operasional skala besar.",
      en: "DC ultra-fast charging station 120–360 kWh for large-scale operations.",
    },
    image: img("/products/Charger Device/DC 120-360 kWh.png"),
  },
  // Proyek Berhasil
  {
    id: "double-decker",
    slug: "double-decker",
    categoryId: "project",
    brand: "SSD",
    title: { id: "Armada Double Decker", en: "Double Decker Fleet" },
    description: {
      id: "Implementasi armada bus listrik double decker berskala besar.",
      en: "Large-scale double decker electric bus fleet implementation.",
    },
    image: img("/products/Project Berhasil/Double Decker.png"),
  },
  {
    id: "panoramic",
    slug: "panoramic",
    categoryId: "project",
    brand: "SSD",
    title: { id: "Armada Panoramic", en: "Panoramic Fleet" },
    description: {
      id: "Proyek armada bus panoramic listrik untuk transportasi komersial.",
      en: "Panoramic electric bus fleet project for commercial transport.",
    },
    image: img("/products/Project Berhasil/Panoramic.png"),
  },
  // Proteksi — LFK
  {
    id: "lfk-af31-1kg",
    slug: "lfk-af31-1kg",
    categoryId: "proteksi",
    brand: "LFK HARTINDO",
    title: { id: "LFK AF31 Portable — 1 KG", en: "LFK AF31 Portable — 1 KG" },
    description: {
      id: "Pemadam api litium portabel 1 kg, ideal untuk kendaraan listrik pribadi dan area kompak di pangkalan armada.",
      en: "1 kg portable lithium fire extinguisher, ideal for personal EVs and compact areas in fleet pools.",
    },
    image: img("/products/Proteksi/LFK_1_KG_[Font].avif"),
    images: {
      front: img("/products/Proteksi/LFK_1_KG_[Font].avif"),
      back: img("/products/Proteksi/LFK_1_KG_[Back].avif"),
      left: img("/products/Proteksi/LFK_1_KG_[Left].avif"),
      right: img("/products/Proteksi/LFK_1_KG_[Right].avif"),
    },
  },
  {
    id: "lfk-af31-3kg",
    slug: "lfk-af31-3kg",
    categoryId: "proteksi",
    brand: "LFK HARTINDO",
    title: { id: "LFK AF31 Portable — 3 KG", en: "LFK AF31 Portable — 3 KG" },
    description: {
      id: "Pemadam api litium 3 kg untuk garasi kendaraan listrik, server room, dan ruang komersial di fasilitas bisnis.",
      en: "3 kg lithium fire extinguisher for EV garages, server rooms, and commercial spaces in business facilities.",
    },
    image: img("/products/Proteksi/LFK_3_KG_[Font].avif"),
    images: {
      front: img("/products/Proteksi/LFK_3_KG_[Font].avif"),
      back: img("/products/Proteksi/LFK_3_KG_[Back].avif"),
      left: img("/products/Proteksi/LFK_3_KG_[Left].avif"),
      right: img("/products/Proteksi/LFK_3_KG_[Right].avif"),
    },
  },
];

export function getLayananProductPath(
  product: Pick<LayananProduct, "slug" | "categoryId">,
): string {
  const serviceSlug = categoryToServiceSlug[product.categoryId];
  return `/layanan/${serviceSlug}/${product.slug}`;
}

export function getProductsForService(serviceSlug: string): LayananProduct[] {
  const resolved = resolveServiceSlug(serviceSlug);
  return layananProducts.filter(
    (p) => categoryToServiceSlug[p.categoryId] === resolved,
  );
}

export function getCategoriesForService(
  serviceSlug: string,
): LayananCategory[] {
  const resolved = resolveServiceSlug(serviceSlug);
  const categoryIds = Object.entries(categoryToServiceSlug)
    .filter(([, slug]) => slug === resolved)
    .map(([catId]) => catId);
  return layananCategories.filter((c) => categoryIds.includes(c.id));
}

export function getServiceSlugForProduct(
  product: Pick<LayananProduct, "categoryId">,
): string | undefined {
  return categoryToServiceSlug[product.categoryId];
}

export function getLayananProductBySlug(
  slug: string,
): LayananProduct | undefined {
  return layananProducts.find((p) => p.slug === slug);
}

export function getLayananCategoryById(
  id: string,
): LayananCategory | undefined {
  return layananCategories.find((c) => c.id === id);
}
