# Bagian 1: Builder
# Menggunakan Node.js versi 20-alpine sebagai base image untuk build
FROM node:20-alpine AS builder

# Menetapkan direktori kerja di dalam container
WORKDIR /app

# Menyalin file package.json dan package-lock.json
COPY package*.json ./

# Menginstal dependensi proyek
RUN npm install

# Menyalin seluruh kode sumber proyek ke direktori kerja
COPY . .

# Membuat build produksi dari aplikasi Next.js
RUN npm run build

# Bagian 2: Runner
# Menggunakan image Node.js yang lebih ringan untuk produksi
FROM node:20-alpine AS runner

WORKDIR /app

# Membuat pengguna non-root untuk keamanan
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Menyalin build dari stage builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

# Mengatur kepemilikan file ke pengguna non-root
RUN chown -R nextjs:nodejs /app/.next

# Mengganti ke pengguna non-root
USER nextjs

# Mengekspos port yang digunakan oleh Next.js
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
# Menggunakan PORT environment variable jika tersedia, jika tidak, gunakan 3000
CMD ["npm", "start", "--", "-p", "3000"]
