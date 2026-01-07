# Portfolio AI Engineer - Next.js & Firebase Studio

Ini adalah portofolio web interaktif yang dibuat dengan Next.js dan Tailwind CSS, dirancang untuk menunjukkan proyek, pengalaman, dan keahlian seorang AI Engineer. Aplikasi ini sepenuhnya dapat diedit langsung dari antarmuka, memungkinkan pembaruan konten secara dinamis tanpa menyentuh kode.

## ✨ Fitur Utama

- **Otentikasi Sederhana**: Sistem login berbasis environment variable untuk mengaktifkan mode edit.
- **CRUD Penuh**: Tambah, Baca, Perbarui, dan Hapus (CRUD) untuk semua bagian penting:
  - Proyek Unggulan (Projects)
  - Pengalaman Karir (Experience)
  - Ruang Hugging Face (Hugging Face Spaces)
  - Artikel & Tulisan (Articles)
  - Tech Stack
- **Desain Responsif**: Tampilan yang dioptimalkan untuk desktop maupun perangkat mobile.
- **Mode Gelap/Terang**: Pengalih tema untuk kenyamanan visual.
- **Animasi Halus**: Transisi dan animasi yang menarik menggunakan Framer Motion.
- **Siap Deployment**: Dilengkapi dengan konfigurasi Docker dan Kubernetes.

## 🚀 Teknologi yang Digunakan

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui, Framer Motion
- **Manajemen State**: React Hooks (`useState`, `useEffect`)
- **Linting & Formatting**: ESLint
- **Deployment**: Docker, Kubernetes

## ⚙️ Instalasi dan Menjalankan Proyek

Untuk memulai dan menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut.

### Prasyarat

- [Node.js](https://nodejs.org/) (v18 atau lebih baru)
- npm, yarn, atau pnpm

### 1. Kloning Repositori

```bash
git clone <URL_REPOSITORI_ANDA>
cd <NAMA_DIREKTORI>
```

### 2. Instalasi Dependensi

Jalankan perintah berikut untuk menginstal semua paket yang dibutuhkan:

```bash
npm install
```

### 3. Konfigurasi Environment Variables

Buat file `.env.local` di direktori root proyek Anda dan tambahkan kredensial untuk login.

```env
NEXT_PUBLIC_ADMIN_USERNAME=admin
NEXT_PUBLIC_ADMIN_PASSWORD=password
```

Anda bisa mengganti `admin` dan `password` dengan kredensial yang lebih aman.

### 4. Menjalankan Server Development

Untuk menjalankan aplikasi dalam mode development:

```bash
npm run dev
```

Buka [http://localhost:9002](http://localhost:9002) di browser Anda untuk melihat hasilnya. Halaman akan otomatis diperbarui setiap kali Anda membuat perubahan pada kode.

### 5. Build untuk Produksi

Untuk membuat build aplikasi yang siap untuk produksi:

```bash
npm run build
```

Perintah ini akan membuat versi aplikasi yang dioptimalkan di dalam folder `.next`. Untuk menjalankannya:

```bash
npm start
```

## 🐳 Deployment dengan Docker

Aplikasi ini dapat dengan mudah di-deploy menggunakan Docker.

### 1. Build Docker Image

Pastikan Anda telah membuat file `.env.local` seperti pada langkah instalasi. Kemudian, bangun image Docker:

```bash
docker build -t my-portfolio-app .
```

### 2. Jalankan Docker Container

Jalankan container dari image yang baru saja Anda buat:

```bash
docker run -p 9002:3000 my-portfolio-app
```

Aplikasi Anda sekarang akan berjalan di [http://localhost:9002](http://localhost:9002).

## ☸️ Deployment dengan Kubernetes

Untuk deployment ke cluster Kubernetes, Anda bisa menggunakan file `deployment.yaml` dan `service.yaml`.

### 1. Terapkan Konfigurasi

Pastikan konteks `kubectl` Anda sudah mengarah ke cluster yang benar. Kemudian, terapkan file manifest:

```bash
# Terapkan deployment untuk membuat Pods
kubectl apply -f deployment.yaml

# Terapkan service untuk mengekspos aplikasi
kubectl apply -f service.yaml
```

### 2. Verifikasi Deployment

Untuk memeriksa status deployment dan pods Anda:

```bash
kubectl get deployments
kubectl get pods
```

### 3. Akses Aplikasi

Service dibuat dengan tipe `LoadBalancer`. Untuk mendapatkan alamat IP eksternal dan mengakses aplikasi Anda, jalankan:

```bash
kubectl get service portfolio-service
```

Tunggu hingga `EXTERNAL-IP` tersedia, lalu akses IP tersebut di browser Anda pada port 80.
