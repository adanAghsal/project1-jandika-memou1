# Arsip Chapter III: Memories

Versi asli disimpan sebelum Chapter III diganti menjadi **Little Things That Matter**. Teks chapter lain tetap mengikuti versi client.

- `Gallery.tsx.txt`: komponen galeri asli, termasuk kartu foto, animasi, dan dialog pembesar foto. Dipindahkan tanpa mengubah isinya.
- `birthday.ts.txt`: salinan konfigurasi sebelum perubahan, termasuk ketiga foto, surat, dan pesan penutup asli.
- `index.tsx.txt`: salinan halaman sebelum pergantian komponen.

Ekstensi `.txt` menjaga kode arsip agar tidak ikut dikompilasi sebagai aplikasi aktif. Folder ini berada di luar `src` dan `public`.

## Mengembalikan galeri

1. Salin `Gallery.tsx.txt` menjadi `src/components/birthday/Gallery.tsx`.
2. Pulihkan import `imageVariants` dan properti `gallery` dari `birthday.ts.txt` ke `src/config/birthday.ts`.
3. Aktifkan kembali import serta `<Gallery />` yang dikomentari di `src/routes/index.tsx`, lalu nonaktifkan `<LittleThings />`.

Jangan menimpa seluruh konfigurasi dengan arsip jika sudah ada perubahan baru. Ambil hanya konfigurasi galeri yang ingin dipulihkan.
