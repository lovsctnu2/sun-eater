
const talentsData = [
  {
    id: 'feast',
    name: ".Feast",
    photo: "/talents/feast.png",
    link: "https://suneatercoven.com/artist/feast",
    genre: 'Alternative Rock, Art Rock',
    bio: `Grup musik ini terbentuk dari sekumpulan mahasiswa Fakultas Ilmu Sosial dan Ilmu Politik (FISIP) Universitas Indonesia.[2] Nama Feast dipilih karena dua alasan: pertama, mereka suka bekerja sama dengan orang lain dalam membuat musik, kedua, mereka menganggap musik mereka adalah suatu perayaan atas tragedi, kemenangan atau hal apapun.`,
    albums: [
      { title: 'Multiverses', year: 2017 },
      { title: 'Abdi Lara Insani', year: 2017 },
      { title: 'Membangun dan Menghancurkan', year: 2024 },
    ],
    socialMedia: {
      instagram: 'https://www.instagram.com/ffeastt/',
      spotify: 'https://open.spotify.com/artist/7Gy1PxqrgsiqWF6JNYPHeB?si=rOiLNAY_Q8GS6AW20hvHKQ',
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
      spotify: 'https://open.spotify.com/artist/51kyrUsAVqUBcoDEMFkX12?si=62AL4GgMQaSPrgN88qKu-w',
    },
  },
  {
    id: 'aldrian-risjad',
    name: "Aldrian Risjad",
    photo: "/talents/aldrian.png",
    link: "https://suneatercoven.com/artist/aldrian-risjad",
    genre: 'Alternative Rock, Grunge',
    bio: `Aldrian Risjad adalah musisi rock asal Jakarta yang memadukan semangat rock klasik dengan nuansa modern. Terinspirasi oleh nama-nama besar seperti Led Zeppelin, Kings of Leon, hingga Dewa, ia menyalurkan cerita personal dan isu keseharian lewat musik yang menggugah.`,
    albums: [
        { title: 'Interrobang', year: 2020 }
    ],
    socialMedia: {
      instagram: 'https://www.instagram.com/aldrianrisjad/',
      spotify: 'https://open.spotify.com/artist/0xAsnbVO1GP3HZjfOv9qd9?si=92pT9YHXRdqGQ-mIxWAoiA',
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
      spotify: 'https://open.spotify.com/artist/5j6EloCQDnZmMP3k6pATOd?si=8knLBlMCRGON5tu1fyNm1g',
    },
    bio: `Agatha Pricilla adalah penyanyi dan penulis lagu berbakat yang memulai karirnya sebagai bagian dari grup vokal Blink. Pada tahun 2006, Pricilla mengawali kariernya dengan mengikuti kursus vokal di Purwa Caraka Music Studio. Ia mulai bergabung dengan Paduan Suara Purwa Caraka Music Studio dua tahun setelahnya.`,
    albums: [
      { title: 'Adriana', year: 2023 },
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
      spotify: 'https://open.spotify.com/artist/5jLL1YM0DNKKhnLl0oSlUA?si=hat_xpcbRuqfacNeiERxMQ',
    },
    bio: `Rayhan Noor adalah musisi serba bisa yang dikenal sebagai gitaris dari beberapa band, mulai dari Gelas Kaca dan Lomba Sihir. Sebagai artis solo, ia menunjukkan sisi lain dari musikalitasnya dengan lagu-lagu pop indie yang easy-listening dan penuh melodi.`,
    albums: [
        { title: 'Menjelang Tiga Puluh', year: 2023 }
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
      spotify: 'https://open.spotify.com/artist/2aOcSZtVGcy3cs45euQqZ6?si=7RHbVPYhTF2wdsu1qMCYsQ',
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
      instagram: 'https://www.instagram.com/lombasihiryes/',
      spotify: 'https://open.spotify.com/artist/6wD3vtAV0P3gWB9zLs7I4j?si=LoCvkHc-S2yhR28_i8PUGw',
    },
    bio: `Lomba Sihir adalah supergrup pop asal Jakarta yang beranggotakan musisi-musisi populer dari skena independen. Mereka dikenal dengan musiknya yang catchy, lirik-lirik witty, dan eksplorasi sound synth-pop yang menyegarkan. Setiap penampilan Lomba Sihir selalu penuh energi dan keajaiban.`,
    albums: [
      { title: 'Selamat Datang di Ujung Dunia', year: 2021 },
      { title: 'Obrolan Jam 3 Pagi', year: 2025 },
    ],
  },
  {
    id: 'gate',
    name: "G/A/T/E",
    photo: "/talents/gate.png",
    link: "https://suneatercoven.com/artist/gate",
    genre: 'Electronic, Experimental',
    socialMedia: {
      instagram: 'https://www.instagram.com/giants.among.the.elders/',
      spotify: 'https://open.spotify.com/artist/27MsV4sxGbLMXXo3DPsGEm?si=Do0lesveTdyf4uyN6bePKA',
    },
    bio: `G/A/T/E adalah proyek musik eksperimental yang mengeksplorasi batas-batas suara elektronik. Dengan pendekatan avant-garde, mereka menciptakan lanskap suara yang unik dan menantang, menarik pendengar ke dalam pengalaman mendalam.`,
    albums: [
        { title: 'Giants Among The Elders', year: 2023 }
    ],
  }
];

export default talentsData;