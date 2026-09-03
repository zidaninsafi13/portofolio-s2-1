# PRD Upgrade E-Portofolio PPG Prajabatan — Zidan Insafi

## 1. Overview

Dokumen ini menjadi acuan upgrade template e-portofolio PPG Prajabatan.

Template awal sudah memiliki identitas visual yang kuat dan akan dikembangkan menjadi website portofolio profesional dengan pengalaman pengguna yang lebih modern, rapi, dan mudah dikembangkan.

Fokus utama bukan menambahkan fitur AI gimmick, tetapi meningkatkan:

- kualitas desain
- struktur kode
- performa
- maintainability
- storytelling perjalanan PPG

---

# Product Vision

Membangun e-portofolio calon guru yang terasa seperti website profesional institusi pendidikan modern.

Website harus menggambarkan:

- perjalanan belajar selama dua semester PPG
- refleksi pedagogis
- perkembangan sebagai calon pendidik
- inovasi pendidikan
- rencana masa depan sebagai guru

---

# Current Template Strength

Template saat ini sudah memiliki:

- Editorial visual style
- Dark/light mode
- Responsive layout
- Bilingual ID/EN
- Reflection modal 4C
- PDF preview
- Course cards
- Animation reveal
- Structured sections

Upgrade harus mempertahankan karakter tersebut.

---

# Goals

## Primary Goals

1. Migrasi dari single HTML besar menjadi arsitektur modern.
2. Membuat komponen reusable.
3. Memisahkan data dan tampilan.
4. Memperbaiki pengalaman scroll dan interaksi.
5. Membuat website mudah diperbarui ketika asset siap.

---

# Recommended Tech Stack

## Frontend

- Next.js App Router
- React
- Tailwind CSS

## Animation

- Framer Motion
- GSAP (opsional)

## Deployment

- Vercel

---

# Information Architecture

```text
Home
|
├── Hero
├── Identity
├── Learning Reflection
├── Course Reflection
│   ├── Semester 1
│   └── Semester 2
├── Teaching Experience
├── Educational Innovation
└── Future Roadmap
```

---

# Component Structure

```text
components/

Navbar
Hero
ProfileCard
SectionHeader
CourseCard
ReflectionModal
Timeline
InnovationSection
Footer
```

---

# Course Reflection System

Setiap mata kuliah menggunakan framework:

## 4C Reflection

### Connection

Hubungan pengalaman pribadi dengan materi.

### Challenge

Tantangan selama memahami atau menerapkan konsep.

### Concept

Konsep utama yang dipelajari.

### Change

Perubahan pemikiran atau praktik setelah belajar.

---

# Design Direction

## Vibe Coding

Keyword:

> Premium educator portfolio. Editorial. Minimal. Thoughtful. Modern education.

Referensi rasa desain:

- jurnal akademik modern
- website universitas premium
- personal portfolio profesional

---

# Visual Rules

## Typography

Gunakan kombinasi:

- Serif untuk storytelling dan heading
- Sans-serif untuk body text

Kesan:

- reflektif
- dewasa
- profesional

---

## Color

Pertahankan:

- deep navy
- soft blue accent
- neutral background
- clean contrast

Hindari:

- warna terlalu ramai
- efek berlebihan
- tampilan seperti dashboard aplikasi

---

# Interaction Direction

Tambahkan:

- smooth page transition
- refined scroll animation
- hover states
- elegant modal transition
- timeline interaction

Animasi harus mendukung cerita, bukan menjadi pusat perhatian.

---

# Refactor Rules for Codex

Jangan mengubah:

- identitas visual
- konten utama
- filosofi desain
- struktur cerita PPG

Yang boleh diubah:

- architecture
- component structure
- styling system
- performance optimization

---

# Development Instruction

Ketika melakukan coding:

1. Buat struktur proyek terlebih dahulu.
2. Migrasikan section satu per satu.
3. Pastikan responsive.
4. Gunakan data-driven approach.
5. Jangan hardcode konten di component.
6. Pertahankan kemudahan update asset.

---

# Final Objective

Hasil akhir:

Sebuah e-portofolio PPG yang:

- profesional
- modern
- mudah dikembangkan
- nyaman dibaca dosen/penguji
- menunjukkan identitas calon guru masa depan
