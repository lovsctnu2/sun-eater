
const talentsData = [
  {
    id: 'feast',
    name: ".Feast",
    photo: "/talents/feast.png",
    link: "https://suneatercoven.com/artist/feast",
    genre: 'Alternative Rock, Art Rock',
    bio: `Kuintet rock asal Jakarta yang terbentuk pada tahun 2012 ini dikenal dengan musiknya yang enerjik dan lirik-lirik yang provokatif, seringkali menyuarakan kritik sosial dan politik. .Feast telah merilis beberapa album dan EP yang selalu berhasil menarik perhatian, dengan karya-karya seperti "Beberapa Orang Memaafkan" dan "Dalam Doa". Penampilan panggung mereka yang intens menjadikan mereka salah satu band live terbaik di Indonesia.`,
    albums: [
      { title: 'Multiverses', year: 2017 },
      { title: 'Membangun dan Menghancurkan', year: 2019 },
      { title: 'Vampire', year: 2020 },
    ],
    socialMedia: {
      instagram: 'https://www.instagram.com/weare.feast/',
      spotify: 'https://open.spotify.com/artist/3Pye1S2mF3BfD60pX7m0Xf',
    },
  },
  {
    id: 'hindia',
    name: "Hindia",
    photo: "/talents/hindia.png",
    link: "https://suneatercoven.com/artist/hindia",
    genre: 'Pop, Indie Pop',
    bio: `Baskara Putra, lebih dikenal dengan nama panggung Hindia, adalah musisi, penyanyi, dan penulis lagu asal Jakarta. Dikenal dengan lirik-lirik introspektif dan relevan dengan isu-isu sosial, Hindia telah menjadi salah satu suara terkemuka di skena musik independen Indonesia. Album debutnya, "Menari Dengan Bayangan", sukses secara kritis dan komersial, mengukuhkan posisinya sebagai ikon generasi.`,
    albums: [
      { title: 'Menari Dengan Bayangan', year: 2019 },
      { title: 'Lagipula Hidup Akan Berakhir', year: 2023 },
    ],
    socialMedia: {
      instagram: 'https://www.instagram.com/wordfangs/',
      spotify: 'https://open.spotify.com/artist/4X9NqRgyS4yN0R3QxQzR6J',
    },
  },
  {
    id: 'aldrian-risjad',
    name: "Aldrian Risjad",
    photo: "/talents/aldrian.png",
    link: "https://suneatercoven.com/artist/aldrian-risjad",
    genre: 'Pop, Soul',
    bio: `Aldrian Risjad adalah seorang penyanyi dan penulis lagu dengan karakter vokal yang kuat dan soulful. Karyanya seringkali menggabungkan unsur pop modern dengan sentuhan soul dan R&B. Dengan penulisan lagu yang jujur, Aldrian berhasil menciptakan koneksi emosional dengan para pendengarnya.`,
    albums: [
        { title: 'CCTV', year: 2023 }
    ],
    socialMedia: {
      instagram: 'https://www.instagram.com/aldrianrisjad/',
      spotify: 'https://open.spotify.com/artist/0F4U4S03wY3b3A7qC0G3Qf',
    },
  },
  {
    id: 'agatha-pricilla',
    name: "Agatha Pricilla",
    photo: "/talents/agatha.png",
    link: "https://suneatercoven.com/artist/agatha-pricilla",
    genre: 'Pop, R&B',
    socialMedia: {
      instagram: 'https://www.instagram.com/agthpricilla/',
      spotify: 'https://open.spotify.com/artist/6S4g0f3T3zD4B1C5Yf2W6N',
    },
    bio: `Agatha Pricilla adalah penyanyi dan penulis lagu berbakat yang memulai karirnya sebagai bagian dari grup vokal. Kini meniti karir solo, Pricilla dikenal dengan vokalnya yang lembut namun berkarakter, serta lagu-lagu pop R&B yang emosional. Ia terus bereksperimen dengan suaranya, menciptakan musik yang personal dan relatable bagi pendengarnya.`,
    albums: [
      { title: 'Adriana', year: 2022 },
      { title: 'EP Colors', year: 2020 },
    ],
  },
  {
    id: 'rayhan-noor',
    name: "Rayhan Noor",
    photo: "/talents/rayhan.png",
    link: "https://suneatercoven.com/artist/rayhan-noor",
    genre: 'Pop, Indie Pop',
    socialMedia: {
      instagram: 'https://www.instagram.com/rayhannoor/',
      spotify: 'https://open.spotify.com/artist/5P0D71Z0R8J6E5W4A1U2Z7',
    },
    bio: `Rayhan Noor adalah musisi serba bisa yang dikenal sebagai gitaris dari beberapa band. Sebagai artis solo, ia menunjukkan sisi lain dari musikalitasnya dengan lagu-lagu pop indie yang easy-listening dan penuh melodi.`,
    albums: [
        { title: 'The Old House', year: 2022 }
    ],
  },
  {
    id: 'mantra-vutura',
    name: "Mantra Vutura",
    photo: "/talents/mantra.png",
    link: "https://suneatercoven.com/artist/mantra-vutura",
    genre: 'Electronic, Pop, Ambient',
    socialMedia: {
      instagram: 'https://www.instagram.com/mantravutura/',
      spotify: 'https://open.spotify.com/artist/57476qS9o8yN85J5sT7dD5',
    },
    bio: `Duo elektronik Mantra Vutura menciptakan musik yang imersif dan meditatif, menggabungkan elemen elektronik, pop, dan ambient. Dengan sentuhan etnik dan aransemen yang kompleks, karya mereka mengajak pendengar dalam perjalanan sonik yang unik dan mendalam.`,
    albums: [
      { title: 'Human', year: 2019 },
    ],
  },
  {
    id: 'lomba-sihir',
    name: "Lomba Sihir",
    photo: "/talents/lomba.png",
    link: "https://suneatercoven.com/artist/lomba-sihir",
    genre: 'Indie Pop, Synth-Pop',
    socialMedia: {
      instagram: 'https://www.instagram.com/lombasihir/',
      spotify: 'https://open.spotify.com/artist/7z5Gv3qB9f1V5l921b7Q5t',
    },
    bio: `Lomba Sihir adalah supergrup pop asal Jakarta yang beranggotakan musisi-musisi populer dari skena independen. Mereka dikenal dengan musiknya yang catchy, lirik-lirik witty, dan eksplorasi sound synth-pop yang menyegarkan. Setiap penampilan Lomba Sihir selalu penuh energi dan keajaiban.`,
    albums: [
      { title: 'Selamat Datang di Ujung Dunia', year: 2021 },
    ],
  },
  {
    id: 'gate',
    name: "G/A/T/E",
    photo: "/talents/gate.png",
    link: "https://suneatercoven.com/artist/gate",
    genre: 'Electronic, Experimental',
    socialMedia: {
      instagram: 'https://www.instagram.com/g_a_t_e_official/',
      spotify: 'https://open.spotify.com/artist/1G2N2S11Q6H6E0N7Z3M0C5',
    },
    bio: `G/A/T/E adalah proyek musik eksperimental yang mengeksplorasi batas-batas suara elektronik. Dengan pendekatan avant-garde, mereka menciptakan lanskap suara yang unik dan menantang, menarik pendengar ke dalam pengalaman mendalam.`,
    albums: [
        { title: 'Phase One', year: 2024 }
    ],
  }
];

export default talentsData;