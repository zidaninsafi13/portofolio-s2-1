# E-Portofolio PPG Prajabatan — Zidan Insafi

Portofolio reflektif berbasis Next.js dengan arah visual **Athletic Blueprint** untuk mendokumentasikan perjalanan akademik, praktik mengajar, inovasi pendidikan, dan rencana pengembangan profesional selama PPG Prajabatan.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

Pemeriksaan sebelum deployment:

```bash
npm run lint
npm run typecheck
npm run build
```

## Struktur utama

```text
app/                    App Router, metadata, dan global design tokens
components/             Komponen section, navigasi, modal, dan UI reusable
components/providers/   State bahasa dan tema
components/ui/          Primitive presentasional dan motion wrapper
data/portfolio.ts       Seluruh konten bilingual dan data mata kuliah
lib/portfolio-types.ts  Kontrak TypeScript untuk konten
public/assets/          Gambar serta dokumen yang dapat diganti tanpa mengubah komponen
```

## Memperbarui konten dan aset

- Ubah narasi, terjemahan, mata kuliah, dan tautan dokumen di `data/portfolio.ts`.
- Simpan gambar di `public/assets/image/` dan PDF di `public/assets/document/`.
- Data enam mata kuliah Semester II berada di array `courses` dengan kode `S2-01` sampai `S2-06`.
- Properti `image` dan `pdf` bersifat opsional. Kartu memakai visual bawaan dan modal menampilkan status yang jelas selama aset belum tersedia.
- Saat aset Semester II siap, isi misalnya `image: "/assets/image/s2-1.png"` dan `pdf: "/assets/document/s2-1.pdf"` pada mata kuliah terkait.
- Pertahankan rasio gambar mata kuliah mendekati 15:9 agar crop kartu konsisten.

## Motion specification

- Opening sequence: rute Tactical Journey menghubungkan node Belajar–Praktik–Refleksi sambil panel Identity Scan menampilkan profil; setelah 3,4 detik intro memakai fade-through lift dan memicu entrance hero di belakangnya, sedangkan reduced motion memakai fade singkat.
- Background: garis grid kotak diganti kontur organik, orbit elips, dan cahaya radial yang tetap terhubung dengan jalur progres halaman.
- Jalur taktik utama: path SVG pada blueprint lapangan terisi secara kontinu berdasarkan progres scroll halaman; spring `stiffness 78`, `damping 24`, dan `mass 0,35`.
- Progres halaman: garis vertikal di desktop dan horizontal di mobile mengikuti nilai scroll yang sama dengan spring lebih responsif.
- Hero entrance: opacity dan translate 34 px, 0,78–0,9 detik, sekali saat halaman dibuka.
- Hero heading: setiap kata muncul berurutan dengan interval 0,045 detik, disertai fade, blur ringan, dan translate 26 px.
- Heading section: reveal per kata dengan stagger 0,045 detik saat 55% area heading masuk viewport.
- Section reveal: opacity dan translate 28 px, 0,72 detik, sekali saat masuk viewport.
- Isi section: judul kartu, paragraf, tab, tombol, dan media memakai urutan reveal 70–250 milidetik setelah container terlihat.
- Kartu playbook: masuk bergantian dari kiri/kanan dengan translate 68 px, scale 0,94, blur ringan, dan accent sweep; setiap kartu di-stagger 80–100 milidetik serta tetap memakai image scale 1,035 pada hover/focus.
- Modal: backdrop fade 0,24 detik dan panel scale/translate 0,42 detik.
- Isi modal: judul, ringkasan, dan empat bagian 4C muncul berurutan setiap 55 milidetik.
- Timeline/tab: crossfade 0,34–0,38 detik.
- Diagram Kelas Bermakna: jalur strategi tergambar selama 1,7 detik ketika panel masuk viewport, hanya sekali.
- `prefers-reduced-motion` menampilkan jalur dalam kondisi akhir serta menonaktifkan perpindahan besar dan smooth scroll.

## Deployment

Proyek siap digunakan pada Vercel sebagai aplikasi Next.js standar. Build command: `npm run build`.
