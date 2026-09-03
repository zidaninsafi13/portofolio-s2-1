import type { Course, Locale, SiteContent } from "@/lib/portfolio-types";

export const defaultLocale: Locale = "id";

export const siteContent: Record<Locale, SiteContent> = {
  id: {
    skipLink: "Langsung ke konten utama",
    brand: {
      title: "PPG Prajabatan",
      subtitle: "Universitas Nusantara PGRI Kediri",
    },
    navigation: [
      { href: "#identitas", label: "Identitas" },
      { href: "#refleksi", label: "Refleksi" },
      { href: "#mata-kuliah", label: "Mata Kuliah" },
      { href: "#pengalaman", label: "Pengalaman" },
      { href: "#inovasi", label: "Inovasi" },
      { href: "#rencana", label: "Rencana" },
    ],
    controls: {
      menuOpen: "Buka menu navigasi",
      menuClose: "Tutup menu navigasi",
      themeDark: "Aktifkan tema gelap",
      themeLight: "Aktifkan tema terang",
      languageLabel: "Pilih bahasa",
    },
    hero: {
      badge: "PPG PRAJABATAN · PJOK · 2026",
      heading: {
        leading: "Refleksi menjadi",
        accent: "calon guru",
        trailing: "yang bermakna, kontekstual, dan berdampak.",
      },
      description:
        "Sebuah dokumentasi reflektif atas perjalanan akademik dan profesional saya selama Program PPG Prajabatan—bukan sekadar kumpulan artefak, melainkan proses berpikir yang sadar, terstruktur, dan bertumbuh.",
      primaryCta: "Jelajahi Refleksi",
      secondaryCta: "Lihat Mata Kuliah",
      role: "Mahasiswa PPG Prajabatan",
      focusOne: "Teknologi",
      focusOneLabel: "Eksplorasi hobi",
      focusTwo: "Inovasi",
      focusTwoLabel: "Pendekatan",
      scrollHint: "Gulir untuk mengikuti perjalanan",
    },
    identity: {
      eyebrow: "Identitas Diri",
      heading: {
        leading: "Sebuah visi yang",
        accent: "tumbuh",
        trailing: "dari ruang kelas menuju ekosistem pendidikan.",
      },
      cards: [
        {
          index: "Visi 01",
          title: "Pendidikan Indonesia",
          description:
            "Saya mempercayai bahwa pendidikan Indonesia yang bermutu lahir dari ruang kelas yang reflektif, inklusif, dan kontekstual—di mana setiap pembelajaran dirancang bukan untuk menghafal, melainkan untuk menumbuhkan kesadaran berpikir dan keberpihakan pada siswa.",
          icon: "globe",
          tone: "accent",
        },
        {
          index: "Visi 02",
          title: "Sebagai Calon Guru",
          description:
            "Menjadi guru yang mendidik dengan kesadaran—memahami siapa yang diajar, mengapa materi diajarkan, dan bagaimana pembelajaran itu memengaruhi cara siswa memandang dunia.",
          icon: "teacher",
          tone: "gold",
        },
      ],
    },
    learning: {
      eyebrow: "Refleksi Belajar",
      heading: {
        leading: "Dua semester, satu benang merah:",
        accent: "menyadari",
        trailing: "apa yang saya pelajari dan mengapa itu penting.",
      },
      intro:
        "Perjalanan PPG saya dibangun sebagai rangkaian refleksi. Setiap semester menjadi ruang untuk menghubungkan teori, pengalaman lapangan, dan perubahan praktik mengajar.",
      semesters: [
        {
          label: "Semester",
          title: "Semester I",
          count: "06",
          countLabel: "mata kuliah",
          description:
            "Semester pertama adalah fase peletakan fondasi. Saya belajar bahwa menjadi guru bukan sekadar menguasai materi, melainkan membangun kesadaran tentang siapa yang saya didik dan bagaimana saya mendidik mereka.",
          status: "Dokumentasi tersedia",
          available: true,
        },
        {
          label: "Semester",
          title: "Semester II",
          count: "06",
          countLabel: "mata kuliah",
          description:
            "Semester kedua memperdalam kemampuan saya mengelola aspek sosial emosional, asesmen, praktik lapangan, kepemimpinan, pemecahan masalah, dan komunikasi profesional sebagai calon guru PJOK.",
          status: "Dokumentasi tersedia",
          available: true,
        },
      ],
    },
    courses: {
      eyebrow: "Refleksi per Mata Kuliah",
      heading: {
        leading: "Setiap mata kuliah meninggalkan",
        accent: "jejak perubahan",
        trailing: "dalam cara saya mendidik.",
      },
      description:
        "Pilih mata kuliah untuk membaca refleksi Connection, Challenge, Concept, dan Change serta membuka dokumen pendukungnya.",
      semesterOne: "Semester I",
      semesterTwo: "Semester II",
      viewDetail: "Baca refleksi 4C",
      unavailableTitle: "Cerita Semester II sedang disiapkan",
      unavailableDescription:
        "Struktur dan ruang konten sudah tersedia. Mata kuliah, refleksi, serta artefak dapat ditambahkan tanpa mengubah komponen halaman.",
      dataReadyLabel: "Struktur siap menerima data",
    },
    modal: {
      close: "Tutup refleksi",
      artifactPreview: "Dokumen refleksi",
      openPdf: "Buka PDF",
      artifactUnavailable: "PDF belum tersedia",
      artifactUnavailableHint: "Sampul dan dokumen refleksi akan ditambahkan pada pembaruan berikutnya.",
      connection: "Connection",
      challenge: "Challenge",
      concept: "Concept",
      change: "Change",
    },
    experience: {
      eyebrow: "Pengalaman PPG",
      heading: {
        leading: "PPG bukan sekadar program—ia adalah",
        accent: "cermin",
        trailing: "yang menunjukkan siapa saya sebagai guru.",
      },
      description:
        "Perubahan tidak terjadi sekaligus. Ia tumbuh dari pemahaman, diuji dalam praktik, lalu diperdalam melalui refleksi yang terus berulang.",
      evidenceLabel: "Makna bagi praktik",
      items: [
        {
          index: "01",
          title: "Membangun kesadaran reflektif",
          description:
            "Selama mengikuti PPG Prajabatan, saya menemukan bahwa kesenjangan terbesar dalam diri saya bukanlah penguasaan materi, melainkan kemampuan untuk reflektif. Guru yang baik terus mempertanyakan dan memperbaiki praktiknya sendiri.",
          evidence:
            "Refleksi kini menjadi bagian dari siklus mengajar, bukan sekadar kegiatan penutup.",
        },
        {
          index: "02",
          title: "Melihat kelas sebagai ruang perubahan",
          description:
            "Setelah PPG, saya melihat pendidikan Indonesia dengan lensa yang lebih realistis sekaligus penuh harapan. Setiap ruang kelas adalah titik intervensi dan setiap guru dapat memulai perubahan tanpa menunggu kebijakan sempurna.",
          evidence:
            "Keputusan kecil di kelas dapat membentuk pengalaman belajar yang lebih adil dan bermakna.",
        },
        {
          index: "03",
          title: "Bertumbuh sebagai profesional",
          description:
            "Saya berkomitmen membangun praktik refleksi rutin, mengembangkan diri melalui riset tindakan kelas, dan aktif berkolaborasi dalam komunitas guru untuk mendorong perubahan sistemik dari level mikro.",
          evidence:
            "Profesionalisme saya tempatkan sebagai praktik harian yang terbuka terhadap evaluasi.",
        },
      ],
    },
    innovation: {
      eyebrow: "Inovasi Pendidikan",
      heading: {
        leading: "Arah praktik yang tumbuh dari",
        accent: "pengalaman siswa",
        trailing: "di ruang kelas.",
      },
      title: "Kelas Bermakna.",
      status: "Arah praktik mengajar",
      description:
        "Fokus pengembangan saya adalah menciptakan pembelajaran yang kontekstual, aktif, dan berpihak pada kebutuhan siswa. Saya ingin menghubungkan materi dengan pengalaman sehari-hari, memberi ruang bagi siswa untuk bertanya dan mencoba, serta menggunakan refleksi sederhana untuk memahami proses belajar mereka. Pendekatan ini menjadi arah praktik yang akan terus saya pelajari, uji, dan perbaiki di kelas.",
      frameworkLabel: "Alur pembelajaran",
      framework: ["Kenali", "Hubungkan", "Praktikkan", "Refleksikan"],
    },
    roadmap: {
      eyebrow: "Rencana Tindak Lanjut",
      heading: {
        leading: "Tiga langkah konkret untuk",
        accent: "memulai karier",
        trailing: "sebagai guru.",
      },
      stepLabel: "Langkah",
      items: [
        {
          index: "01",
          title: "Merancang pembelajaran yang berpusat pada siswa",
          description:
            "Memulai setiap satuan pembelajaran dengan memetakan profil siswa, memilih pendekatan yang sesuai, dan menyusun asesmen autentik yang mengukur pemahaman, bukan sekadar ingatan.",
          icon: "target",
        },
        {
          index: "02",
          title: "Membangun ikatan yang aman, adil, dan bermakna",
          description:
            "Mengenal setiap siswa sebagai individu, membangun rutinitas sapaan, mendengarkan tanpa menghakimi, dan menciptakan ruang kelas di mana kegagalan adalah bagian dari belajar.",
          icon: "heart",
        },
        {
          index: "03",
          title: "Tumbuh melalui komunitas dan riset",
          description:
            "Bergabung dengan komunitas guru, menjalankan sedikitnya satu siklus riset tindakan kelas per semester, serta terbuka untuk mengevaluasi dan dievaluasi.",
          icon: "growth",
        },
      ],
    },
    footer: {
      quote:
        "Jangan terlalu bergantung pada siapa pun di dunia ini, bahkan bayanganmu sendiri akan meninggalkanmu ketika kamu berada dalam kegelapan.",
      author: "Ibnu Taimiyah",
      closing: "Terus belajar. Terus merefleksi. Terus berpihak pada peserta didik.",
      copyright: "© 2026 PPG PRAJABATAN · UNIVERSITAS NUSANTARA PGRI KEDIRI",
      backToTop: "Kembali ke atas",
    },
  },
  en: {
    skipLink: "Skip to main content",
    brand: {
      title: "Pre-Service Teacher Program",
      subtitle: "Universitas Nusantara PGRI Kediri",
    },
    navigation: [
      { href: "#identitas", label: "Identity" },
      { href: "#refleksi", label: "Reflection" },
      { href: "#mata-kuliah", label: "Courses" },
      { href: "#pengalaman", label: "Experience" },
      { href: "#inovasi", label: "Innovation" },
      { href: "#rencana", label: "Roadmap" },
    ],
    controls: {
      menuOpen: "Open navigation menu",
      menuClose: "Close navigation menu",
      themeDark: "Use dark theme",
      themeLight: "Use light theme",
      languageLabel: "Choose language",
    },
    hero: {
      badge: "PRE-SERVICE TEACHER · PHYSICAL EDUCATION · 2026",
      heading: {
        leading: "A reflection on becoming a",
        accent: "future teacher",
        trailing: "who is meaningful, contextual, and impactful.",
      },
      description:
        "A reflective record of my academic and professional journey throughout the Pre-Service Teacher Program—not merely a collection of artifacts, but a conscious, structured, and evolving way of thinking.",
      primaryCta: "Explore Reflections",
      secondaryCta: "View Courses",
      role: "Pre-Service Teacher Student",
      focusOne: "Technology",
      focusOneLabel: "Personal exploration",
      focusTwo: "Innovation",
      focusTwoLabel: "Teaching approach",
      scrollHint: "Scroll to follow the journey",
    },
    identity: {
      eyebrow: "Personal Identity",
      heading: {
        leading: "A vision that",
        accent: "grows",
        trailing: "from the classroom into the wider education ecosystem.",
      },
      cards: [
        {
          index: "Vision 01",
          title: "Indonesian Education",
          description:
            "I believe quality education in Indonesia begins in reflective, inclusive, and contextual classrooms—where learning is designed not for memorisation, but to cultivate critical awareness and genuine care for every student.",
          icon: "globe",
          tone: "accent",
        },
        {
          index: "Vision 02",
          title: "As a Future Teacher",
          description:
            "To become a teacher who educates with intention—understanding who is being taught, why the material matters, and how learning shapes the way students see the world.",
          icon: "teacher",
          tone: "gold",
        },
      ],
    },
    learning: {
      eyebrow: "Learning Reflection",
      heading: {
        leading: "Two semesters, one common thread:",
        accent: "realising",
        trailing: "what I learned and why it matters.",
      },
      intro:
        "My PPG journey is structured as a sequence of reflections. Each semester connects theory, field experience, and meaningful changes in teaching practice.",
      semesters: [
        {
          label: "Semester",
          title: "Semester I",
          count: "06",
          countLabel: "courses",
          description:
            "The first semester established the foundation. I learned that becoming a teacher is not only about mastering content, but also understanding who I teach and how I support their growth.",
          status: "Documentation available",
          available: true,
        },
        {
          label: "Semester",
          title: "Semester II",
          count: "06",
          countLabel: "courses",
          description:
            "The second semester deepened my ability to address social-emotional learning, assessment, field practice, leadership, problem-solving, and professional communication as a prospective physical-education teacher.",
          status: "Documentation available",
          available: true,
        },
      ],
    },
    courses: {
      eyebrow: "Course Reflections",
      heading: {
        leading: "Every course leaves a",
        accent: "trace of change",
        trailing: "in the way I teach.",
      },
      description:
        "Select a course to read its Connection, Challenge, Concept, and Change reflection and open the supporting document.",
      semesterOne: "Semester I",
      semesterTwo: "Semester II",
      viewDetail: "Read the 4C reflection",
      unavailableTitle: "The Semester II story is being prepared",
      unavailableDescription:
        "The content structure is already in place. Courses, reflections, and artifacts can be added without changing the page components.",
      dataReadyLabel: "Data-ready structure",
    },
    modal: {
      close: "Close reflection",
      artifactPreview: "Reflection document",
      openPdf: "Open PDF",
      artifactUnavailable: "PDF not yet available",
      artifactUnavailableHint: "The cover and reflection document will be added in a future update.",
      connection: "Connection",
      challenge: "Challenge",
      concept: "Concept",
      change: "Change",
    },
    experience: {
      eyebrow: "PPG Experience",
      heading: {
        leading: "PPG is more than a program—it is a",
        accent: "mirror",
        trailing: "that reveals who I am as a teacher.",
      },
      description:
        "Change does not happen all at once. It grows from understanding, is tested through practice, and deepens through continuous reflection.",
      evidenceLabel: "Meaning for practice",
      items: [
        {
          index: "01",
          title: "Building reflective awareness",
          description:
            "During the Pre-Service Teacher Program, I discovered that my greatest gap was not content mastery but reflective capacity. A good teacher continually questions and improves their own practice.",
          evidence:
            "Reflection is now part of my teaching cycle, not merely a closing activity.",
        },
        {
          index: "02",
          title: "Seeing the classroom as a place for change",
          description:
            "After PPG, I see Indonesian education through a more realistic yet hopeful lens. Every classroom is an intervention point, and every teacher can initiate change without waiting for perfect policy.",
          evidence:
            "Small classroom decisions can create a fairer and more meaningful learning experience.",
        },
        {
          index: "03",
          title: "Growing as a professional",
          description:
            "I am committed to routine reflection, classroom action research, and active collaboration in teacher communities to encourage systemic change from the classroom level.",
          evidence:
            "I approach professionalism as a daily practice that remains open to evaluation.",
        },
      ],
    },
    innovation: {
      eyebrow: "Educational Innovation",
      heading: {
        leading: "A teaching direction shaped by",
        accent: "students' experiences",
        trailing: "in the classroom.",
      },
      title: "Kelas Bermakna.",
      status: "Teaching practice direction",
      description:
        "My development focus is creating contextual, active learning that responds to students' needs. I aim to connect subject matter with everyday experiences, give students room to ask questions and try, and use simple reflection to understand their learning process. This approach is a direction for my teaching practice that I will continue to study, test, and improve in the classroom.",
      frameworkLabel: "Learning flow",
      framework: ["Recognize", "Connect", "Practice", "Reflect"],
    },
    roadmap: {
      eyebrow: "Future Roadmap",
      heading: {
        leading: "Three concrete steps to",
        accent: "begin my career",
        trailing: "as a teacher.",
      },
      stepLabel: "Step",
      items: [
        {
          index: "01",
          title: "Design student-centred learning",
          description:
            "Begin each learning unit by mapping student profiles, choosing appropriate approaches, and creating authentic assessments that measure understanding rather than memory alone.",
          icon: "target",
        },
        {
          index: "02",
          title: "Build safe, fair, and meaningful bonds",
          description:
            "Know every student as an individual, establish welcoming routines, listen without judgement, and create a classroom where failure is recognised as part of learning.",
          icon: "heart",
        },
        {
          index: "03",
          title: "Grow through community and research",
          description:
            "Join teacher communities, complete at least one classroom action-research cycle each semester, and remain open to giving and receiving constructive evaluation.",
          icon: "growth",
        },
      ],
    },
    footer: {
      quote:
        "Do not rely too much on anyone in this world, for even your own shadow leaves you when you are in darkness.",
      author: "Ibn Taymiyyah",
      closing: "Keep learning. Keep reflecting. Keep standing with every learner.",
      copyright: "© 2026 PRE-SERVICE TEACHER PROGRAM · UNIVERSITAS NUSANTARA PGRI KEDIRI",
      backToTop: "Back to top",
    },
  },
};

export const courses: Course[] = [
  {
    code: "S1-01",
    semester: 1,
    image: "/assets/image/mk-1.png",
    pdf: "/assets/document/mk-1.pdf",
    tag: { id: "Semester 1", en: "Semester 1" },
    name: { id: "Filosofi Pendidikan", en: "Educational Philosophy" },
    summary: {
      id: "Menyadarkan bahwa substansi pendidik bukan sekadar mentransfer pengetahuan, melainkan menuntun bertumbuhnya potensi bawaan peserta didik.",
      en: "Understanding that an educator does not merely transfer knowledge, but guides the holistic growth of each learner's potential.",
    },
    reflection: {
      connection: {
        id: "Mata kuliah ini menyadarkan saya bahwa substansi pendidik bukan sekadar mentransfer pengetahuan, melainkan menuntun bertumbuhnya potensi bawaan peserta didik secara utuh. Saat observasi di SDN 1 Setonopande, terlihat nyata keberagaman gaya belajar dan keunikan tiap anak.",
        en: "This course helped me understand that an educator does not merely transfer knowledge, but guides the holistic growth of each learner's potential. My observation at SDN 1 Setonopande revealed the diversity of learning styles and each child's uniqueness.",
      },
      challenge: {
        id: "Sebelum mendalami mata kuliah ini, orientasi saya cenderung berfokus pada ketuntasan pencapaian materi akademis. Pemikiran Ki Hajar Dewantara meyakinkan saya bahwa inti pembelajaran terletak pada pembebasan ruang eksplorasi peserta didik.",
        en: "Before this course, my orientation focused mainly on completing academic material. Ki Hajar Dewantara's ideas convinced me that the essence of learning lies in creating space for students to explore freely.",
      },
      concept: {
        id: "Landasan filosofis Ki Hajar Dewantara, khususnya trilogi kepemimpinan pendidikan—Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani—serta esensi pendidikan yang memerdekakan.",
        en: "Ki Hajar Dewantara's educational philosophy, particularly Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, and Tut Wuri Handayani, alongside the essence of liberating education.",
      },
      change: {
        id: "Saya berkomitmen menjadi pendidik yang adaptif, reflektif, dan berempati tinggi dengan menggeser pola mengajar konvensional menuju ruang instruksional yang partisipatif, khususnya dalam bidang PJOK.",
        en: "I commit to becoming an adaptive, reflective, and empathetic educator by moving from conventional instruction towards participatory learning, particularly in physical education.",
      },
    },
  },
  {
    code: "S1-02",
    semester: 1,
    image: "/assets/image/mk-2.png",
    pdf: "/assets/document/mk-2.pdf",
    tag: { id: "Semester 1", en: "Semester 1" },
    name: { id: "Growth Mindset", en: "Growth Mindset" },
    summary: {
      id: "Merestrukturisasi cara menilai potensi belajar siswa: kemampuan tidak bersifat statis, melainkan dapat terus ditempa.",
      en: "Restructuring how I assess learning potential: ability is not static and can continue to grow through deliberate effort.",
    },
    reflection: {
      connection: {
        id: "Perkuliahan ini memberi sudut pandang bahwa kapabilitas seseorang tidak bersifat statis, melainkan dapat terus ditempa melalui latihan dan kegigihan. Dalam PJOK, pemahaman ini penting untuk membangun keyakinan siswa terhadap kemampuan geraknya.",
        en: "This course showed me that ability is not static and can be developed through practice and persistence. In physical education, this perspective is essential for strengthening students' confidence in their movement abilities.",
      },
      challenge: {
        id: "Dahulu saya berpatokan kuat pada performa akhir atau skor. Setelah membedah konsep Growth Mindset, fokus saya bergeser pada apresiasi terhadap proses, konsistensi, dan daya tahan belajar siswa.",
        en: "I previously relied heavily on final performance or scores. Growth Mindset shifted my focus towards appreciating students' process, consistency, and learning resilience.",
      },
      concept: {
        id: "Perbedaan Growth Mindset dan Fixed Mindset, efektivitas umpan balik konstruktif, pemetaan zona nyaman belajar, serta pembentukan ekosistem kelas yang ramah terhadap kekeliruan.",
        en: "The distinction between Growth and Fixed Mindsets, constructive feedback, mapping learning comfort zones, and building a classroom environment where mistakes support growth.",
      },
      change: {
        id: "Saya akan mengintegrasikan penguatan motivasi secara rasional dan suportif dalam setiap sesi olahraga. Siswa akan dibimbing untuk melihat kegagalan gerak sebagai batu pijakan, bukan batasan mutlak.",
        en: "I will integrate rational and supportive encouragement into every sports session, guiding students to see movement failure as a stepping stone rather than a fixed limitation.",
      },
    },
  },
  {
    code: "S1-03",
    semester: 1,
    image: "/assets/image/mk-3.png",
    pdf: "/assets/document/mk-3.pdf",
    tag: { id: "Semester 1", en: "Semester 1" },
    name: { id: "Pembelajaran Mendalam dan Asesmen", en: "Deep Learning and Assessment" },
    summary: {
      id: "Membekali kemampuan merancang alur belajar yang substansial dan menjadikan penilaian sebagai instrumen reflektif.",
      en: "Building the ability to design substantial learning journeys and use assessment as a reflective instrument.",
    },
    reflection: {
      connection: {
        id: "Materi ini membekali saya merancang alur belajar yang substansial agar siswa tidak sekadar menghafal, melainkan mampu mengolaborasi dan menerapkannya dalam konteks nyata.",
        en: "This course equipped me to design substantial learning journeys so students move beyond memorisation and can connect and apply ideas in real contexts.",
      },
      challenge: {
        id: "Sebelumnya, penilaian identik dengan ujian di akhir bab. Pembelajaran ini membuka wawasan mengenai urgensi asesmen diagnostik dan pemantauan formatif selama proses belajar.",
        en: "Assessment once meant an end-of-unit test to me. This course revealed the importance of diagnostic assessment and ongoing formative monitoring throughout learning.",
      },
      concept: {
        id: "Prinsip pembelajaran mendalam, diferensiasi asesmen diagnostik, formatif, dan sumatif, perancangan rubrik kualitatif, serta teknik umpan balik konstruktif.",
        en: "Deep-learning principles, diagnostic, formative, and summative assessment, qualitative rubric design, and constructive feedback techniques.",
      },
      change: {
        id: "Saya hendak mendesain pembelajaran PJOK yang mendorong diskusi taktis, refleksi diri, dan penerapan keterampilan motorik secara adaptif. Asesmen awal akan menentukan titik mula pembelajaran.",
        en: "I intend to design physical-education lessons that encourage tactical discussion, self-reflection, and adaptive motor-skill application, using initial assessment to establish each learning starting point.",
      },
    },
  },
  {
    code: "S1-04",
    semester: 1,
    image: "/assets/image/mk-4.png",
    pdf: "/assets/document/mk-4.pdf",
    tag: { id: "Semester 1", en: "Semester 1" },
    name: { id: "Pemahaman tentang Peserta Didik", en: "Understanding Students" },
    summary: {
      id: "Mengenali latar belakang biologis, psikologis, dan sosial setiap individu sebagai fondasi utama pembelajaran.",
      en: "Recognising each learner's biological, psychological, and social background as a foundation for learning.",
    },
    reflection: {
      connection: {
        id: "Mata kuliah ini menjadi pijakan untuk mengenali latar belakang biologis, psikologis, dan sosial setiap individu. Praktik di SDN 1 Setonopande memperlihatkan bahwa penerimaan instruksi gerak dipengaruhi kesiapan fisik dan emosional siswa.",
        en: "This course established the importance of understanding each learner's biological, psychological, and social background. Practice at SDN 1 Setonopande showed how physical and emotional readiness shapes movement learning.",
      },
      challenge: {
        id: "Orientasi mengajar saya dahulu cenderung menggunakan metode penyamarataan. Saya kini memahami bahwa persiapan mengajar harus bertumpu pada pemetaan profil dan keunikan peserta didik.",
        en: "My teaching once leaned towards a one-size-fits-all approach. I now understand that planning must begin with mapping student profiles and individual characteristics.",
      },
      concept: {
        id: "Tahapan perkembangan anak, keanekaragaman modalitas belajar, pengondisian lingkungan inklusif, serta pentingnya asesmen profil awal siswa.",
        en: "Stages of child development, diverse learning modalities, inclusive learning environments, and the importance of initial student-profile assessment.",
      },
      change: {
        id: "Saya akan mengawali perencanaan dengan pemetaan karakter siswa. Variasi permainan dan tingkat kesulitan gerak akan disesuaikan agar tidak ada siswa yang terasingkan.",
        en: "I will begin planning by mapping learner characteristics and adapt games and movement difficulty so that no student feels excluded.",
      },
    },
  },
  {
    code: "S1-05",
    semester: 1,
    image: "/assets/image/mk-5.png",
    pdf: "/assets/document/mk-5.pdf",
    tag: { id: "Semester 1", en: "Semester 1" },
    name: { id: "PPL 1", en: "Teaching Practicum 1" },
    summary: {
      id: "Wadah pengujian seluruh konsep teoretis ke dalam realitas persekolahan secara langsung.",
      en: "A direct testing ground for translating theoretical concepts into the reality of school life.",
    },
    reflection: {
      connection: {
        id: "PPL 1 merupakan wadah pengujian konsep teoretis dalam realitas persekolahan. Di SDN 1 Setonopande, saya mengasah manajemen kelas, penyusunan perangkat kontekstual, dan interaksi pedagogis.",
        en: "Teaching Practicum 1 tested theoretical ideas in real school settings. At SDN 1 Setonopande, I developed classroom management, contextual planning, and pedagogical interaction.",
      },
      challenge: {
        id: "Skenario di ruang kuliah tersusun ideal secara teoretis. Di sekolah, saya dituntut luwes dan cepat beradaptasi dengan cuaca, keterbatasan waktu, serta kondisi emosional siswa.",
        en: "University teaching scenarios were theoretically ideal. At school, I had to adapt quickly to weather, limited time, and students' changing emotional conditions.",
      },
      concept: {
        id: "Siklus pembelajaran terpadu—perancangan, pelaksanaan, evaluasi, dan refleksi—pengondisian kelas, komunikasi efektif, serta kolaborasi dengan guru pamong dan dosen pembimbing.",
        en: "The integrated learning cycle—planning, delivery, evaluation, and reflection—along with classroom dynamics, effective communication, and collaboration with mentors.",
      },
      change: {
        id: "Saya ingin membentuk identitas sebagai pendidik PJOK yang adaptif, komunikatif, dan reflektif. Setiap sesi mengajar akan diikuti evaluasi metode dan permintaan umpan balik.",
        en: "I want to become an adaptive, communicative, and reflective physical-education teacher. Every lesson will be followed by method evaluation and a request for feedback.",
      },
    },
  },
  {
    code: "S1-06",
    semester: 1,
    image: "/assets/image/mk-6.png",
    pdf: "/assets/document/mk-6.pdf",
    tag: { id: "Semester 1", en: "Semester 1" },
    name: { id: "Pembelajaran Berdiferensiasi", en: "Differentiated Instruction" },
    summary: {
      id: "Memahami bahwa kesiapan, minat, dan profil belajar yang beragam membutuhkan strategi diferensiasi.",
      en: "Understanding how diverse readiness, interests, and learning profiles require differentiated strategies.",
    },
    reflection: {
      connection: {
        id: "Mata kuliah ini menunjukkan bahwa setiap siswa memiliki kesiapan, minat, dan profil belajar yang berbeda. Dalam PJOK, diferensiasi penting agar seluruh siswa berpartisipasi sesuai kapasitasnya tanpa merasa minder.",
        en: "This course showed that every student has different levels of readiness, interests, and learning profiles. In physical education, differentiation enables everyone to participate confidently at an appropriate level.",
      },
      challenge: {
        id: "Dahulu saya menganggap satu instruksi dan standar tugas yang sama sudah cukup. Kini saya memahami bahwa fleksibilitas konten, proses, produk, dan lingkungan adalah kunci keadilan dalam mengajar.",
        en: "I once thought one instruction and one standard were enough. I now understand that flexibility in content, process, product, and environment is essential for fairness.",
      },
      concept: {
        id: "Empat elemen diferensiasi—konten, proses, produk, lingkungan—tiga pemandu diferensiasi, serta pemanfaatan Zone of Proximal Development untuk memberikan scaffolding gerak yang tepat.",
        en: "Four elements of differentiation—content, process, product, and environment—three differentiation guides, and the Zone of Proximal Development for appropriate movement scaffolding.",
      },
      change: {
        id: "Dalam praktik PJOK, saya akan menyiapkan variasi sarana dan tingkat kesulitan gerak—seperti ukuran bola, jarak target, dan pilihan unjuk kemampuan—agar seluruh siswa terlibat.",
        en: "In physical education, I will vary equipment and movement difficulty—such as ball size, target distance, and performance options—so every student can participate.",
      },
    },
  },
  {
    code: "S2-01",
    semester: 2,
    image: "/assets/image/S2-01.jpg",
    pdf: "/assets/document/S2-01.pdf",
    tag: { id: "Semester 2", en: "Semester 2" },
    name: { id: "Pembelajaran Sosial Emosional", en: "Social-Emotional Learning" },
    summary: {
      id: "Memahami bahwa rasa aman, hubungan yang sehat, dan kesiapan emosi merupakan fondasi partisipasi serta pembelajaran PJOK.",
      en: "Understanding that safety, healthy relationships, and emotional readiness are foundations for participation and learning in physical education.",
    },
    reflection: {
      connection: {
        id: "Saya memahami bahwa rasa aman, hubungan yang sehat, dan kesiapan emosi sangat memengaruhi keterlibatan siswa dalam pembelajaran PJOK.",
        en: "I learned that safety, healthy relationships, and emotional readiness strongly influence student participation in physical education.",
      },
      challenge: {
        id: "Saya tidak lagi melihat perilaku siswa hanya sebagai masalah disiplin, tetapi juga sebagai tanda kebutuhan sosial dan emosional yang perlu dipahami.",
        en: "I no longer view student behavior only as a discipline issue, but also as a sign of social and emotional needs that should be understood.",
      },
      concept: {
        id: "Konsep utamanya meliputi kesadaran diri, manajemen diri, kesadaran sosial, keterampilan berelasi, dan pengambilan keputusan yang bertanggung jawab.",
        en: "The main concepts are self-awareness, self-management, social awareness, relationship skills, and responsible decision-making.",
      },
      change: {
        id: "Saya akan menggunakan pemeriksaan emosi sederhana, aturan interaksi yang disepakati, dan refleksi singkat setelah kegiatan PJOK.",
        en: "I will use simple emotional check-ins, agreed interaction rules, and brief reflection after physical-education activities.",
      },
    },
  },
  {
    code: "S2-02",
    semester: 2,
    image: "/assets/image/S2-02.jpg",
    pdf: "/assets/document/S2-02.pdf",
    tag: { id: "Semester 2", en: "Semester 2" },
    name: { id: "Pembelajaran Mendalam dan Asesmen Lanjut", en: "Deep Learning and Advanced Assessment" },
    summary: {
      id: "Merancang pembelajaran bermakna dengan tujuan, bukti belajar, umpan balik, dan tindak lanjut yang saling selaras.",
      en: "Designing meaningful learning through aligned goals, evidence, feedback, and follow-up actions.",
    },
    reflection: {
      connection: {
        id: "Mata kuliah ini membantu saya merancang PJOK yang menghubungkan tujuan gerak, pengalaman belajar, dan bukti asesmen secara utuh.",
        en: "This course helped me connect movement goals, learning experiences, and assessment evidence within physical education.",
      },
      challenge: {
        id: "Saya belajar bahwa asesmen bukan hanya skor akhir, melainkan bagian dari proses untuk membaca kesiapan, memberi umpan balik, dan menentukan tindak lanjut.",
        en: "I learned that assessment is not only a final score, but a process for understanding readiness, giving feedback, and deciding follow-up.",
      },
      concept: {
        id: "Konsep pentingnya adalah keselarasan tujuan, kegiatan, dan asesmen; penggunaan rubrik; umpan balik; serta pembelajaran yang berkesadaran, bermakna, dan menggembirakan.",
        en: "The key concepts are alignment among goals, activities, and assessment; rubrics; feedback; and mindful, meaningful, and joyful learning.",
      },
      change: {
        id: "Saya akan menentukan bukti ketercapaian sejak awal, melakukan asesmen selama proses, dan memakai hasilnya untuk merancang latihan lanjutan.",
        en: "I will define evidence of achievement early, assess throughout the process, and use the results to plan further practice.",
      },
    },
  },
  {
    code: "S2-03",
    semester: 2,
    image: "/assets/image/S2-03.jpg",
    pdf: "/assets/document/S2-03.pdf",
    tag: { id: "Semester 2", en: "Semester 2" },
    name: { id: "Praktik Pengalaman Lapangan (PPL) Mandiri", en: "Independent Teaching Practicum" },
    summary: {
      id: "Mempertemukan teori dengan keputusan nyata melalui perencanaan, pelaksanaan, asesmen, adaptasi, dan refleksi di sekolah.",
      en: "Connecting theory with real decisions through planning, teaching, assessment, adaptation, and reflection at school.",
    },
    reflection: {
      connection: {
        id: "PPL Mandiri mempertemukan teori perkuliahan dengan keputusan nyata dalam merencanakan, melaksanakan, menilai, dan merefleksikan pembelajaran.",
        en: "The independent practicum connected university theory with real decisions in planning, teaching, assessment, and reflection.",
      },
      challenge: {
        id: "Saya dituntut lebih mandiri dan fleksibel menghadapi perubahan alat, cuaca, waktu, serta kesiapan siswa tanpa mengabaikan tujuan dan keselamatan.",
        en: "I had to become more independent and flexible when equipment, weather, time, or student readiness changed without compromising goals or safety.",
      },
      concept: {
        id: "Konsep utamanya mencakup perencanaan kontekstual, manajemen kelas dan lapangan, keselamatan, asesmen autentik, adaptasi, serta refleksi berkelanjutan.",
        en: "The main concepts include contextual planning, classroom and field management, safety, authentic assessment, adaptation, and continuous reflection.",
      },
      change: {
        id: "Saya akan menyiapkan rencana utama dan alternatif, memberi instruksi singkat dengan demonstrasi, lalu mencatat kendala serta perbaikannya setelah mengajar.",
        en: "I will prepare primary and alternative plans, give concise instructions with demonstrations, and record obstacles and improvements after teaching.",
      },
    },
  },
  {
    code: "S2-04",
    semester: 2,
    image: "/assets/image/S2-04.jpg",
    pdf: "/assets/document/S2-04.pdf",
    tag: { id: "Semester 2", en: "Semester 2" },
    name: { id: "Projek Kepemimpinan", en: "Leadership Project" },
    summary: {
      id: "Belajar menggerakkan perubahan melalui pemetaan kebutuhan, tujuan bersama, kolaborasi, dan keberlanjutan.",
      en: "Learning to mobilize change through needs mapping, shared goals, collaboration, and sustainability.",
    },
    reflection: {
      connection: {
        id: "Projek Kepemimpinan menunjukkan bahwa guru dapat menggerakkan perubahan bersama warga sekolah, bukan hanya mengajar di dalam kelas.",
        en: "The Leadership Project showed that teachers can drive change with the school community, not only teach inside the classroom.",
      },
      challenge: {
        id: "Saya memahami bahwa kepemimpinan bukan sekadar mengarahkan kelompok, tetapi membaca kebutuhan, membangun tujuan bersama, dan membuka ruang kontribusi.",
        en: "I learned that leadership is not merely directing a group, but understanding needs, building shared goals, and enabling contribution.",
      },
      concept: {
        id: "Konsep utamanya meliputi kepemimpinan kolaboratif, pemetaan kebutuhan dan aset, pembagian peran, komunikasi, evaluasi, dan keberlanjutan projek.",
        en: "The main concepts include collaborative leadership, needs and asset mapping, role distribution, communication, evaluation, and project sustainability.",
      },
      change: {
        id: "Saya akan memulai kegiatan dari kebutuhan nyata, menyepakati peran dan indikator keberhasilan, serta menyiapkan tindak lanjut agar projek berkelanjutan.",
        en: "I will begin with real needs, agree on roles and success indicators, and prepare follow-up so each project can continue.",
      },
    },
  },
  {
    code: "S2-05",
    semester: 2,
    image: "/assets/image/S2-05.jpg",
    pdf: "/assets/document/S2-05.pdf",
    tag: { id: "Semester 2", en: "Semester 2" },
    name: { id: "Computational Thinking", en: "Computational Thinking" },
    summary: {
      id: "Menggunakan dekomposisi, pola, abstraksi, dan algoritma untuk memecahkan masalah pembelajaran PJOK secara sistematis.",
      en: "Using decomposition, pattern recognition, abstraction, and algorithms to solve physical-education learning problems systematically.",
    },
    reflection: {
      connection: {
        id: "Computational Thinking membantu saya memecahkan masalah pembelajaran PJOK secara sistematis, tidak terbatas pada komputer atau pemrograman.",
        en: "Computational Thinking helps me solve physical-education learning problems systematically and is not limited to computers or programming.",
      },
      challenge: {
        id: "Saya belajar untuk tidak hanya mengandalkan intuisi, tetapi mengurai masalah, menemukan pola, memilih informasi penting, dan menyusun langkah penyelesaian.",
        en: "I learned not to rely only on intuition, but to break down problems, find patterns, select important information, and arrange solution steps.",
      },
      concept: {
        id: "Empat fondasi utamanya adalah dekomposisi, pengenalan pola, abstraksi, dan algoritma yang dapat diterapkan tanpa selalu memakai perangkat digital.",
        en: "Its four foundations are decomposition, pattern recognition, abstraction, and algorithms, which can be applied without always using digital devices.",
      },
      change: {
        id: "Saya akan merumuskan masalah secara spesifik, memecah keterampilan gerak, membaca pola kesalahan, lalu menguji dan memperbaiki instruksi.",
        en: "I will define problems specifically, break down movement skills, identify error patterns, and then test and improve instructions.",
      },
    },
  },
  {
    code: "S2-06",
    semester: 2,
    image: "/assets/image/S2-06.jpg",
    pdf: "/assets/document/S2-06.pdf",
    tag: { id: "Semester 2", en: "Semester 2" },
    name: { id: "Seminar", en: "Seminar" },
    summary: {
      id: "Mengkurasi artefak dan mengomunikasikan perkembangan profesional melalui refleksi, bukti, serta tindak lanjut.",
      en: "Curating artifacts and communicating professional growth through reflection, evidence, and follow-up action.",
    },
    reflection: {
      connection: {
        id: "Mata kuliah Seminar membantu saya menyatukan pengalaman belajar, praktik lapangan, artefak, dan rencana pengembangan diri secara utuh.",
        en: "The Seminar course helped me connect learning experiences, field practice, artifacts, and professional-development plans.",
      },
      challenge: {
        id: "Saya tidak lagi melihat tugas sebagai produk terpisah; refleksi perlu menunjukkan hubungan antara masalah, tindakan, bukti, pembelajaran, dan perbaikan.",
        en: "I no longer see assignments as separate products; reflection should connect the problem, action, evidence, learning, and improvement.",
      },
      concept: {
        id: "Konsep utamanya meliputi refleksi kritis, kurasi artefak, argumentasi berbasis bukti, komunikasi profesional, umpan balik, dan rencana tindak lanjut.",
        en: "The main concepts include critical reflection, artifact curation, evidence-based argument, professional communication, feedback, and follow-up planning.",
      },
      change: {
        id: "Saya akan menata artefak berdasarkan perjalanan belajar, memberi konteks dan alasan pemilihan, lalu menunjukkan perbaikan setelah menerima umpan balik.",
        en: "I will organize artifacts around the learning journey, explain their context and selection, and show improvements made after feedback.",
      },
    },
  },
];
