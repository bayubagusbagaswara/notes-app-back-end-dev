# Belajar Fundamental Aplikasi Back End - Notes Application Back End Development

# Postgres
- Create user dulu `psql --username postgres` di terminal
- Buat user baru `CREATE USER developer WITH ENCRYPTED PASSWORD 'supersecretpassword';`
- Jika hasilnya adalah `CREATE ROLE`, maka kita berhasil membuat user baru
- Buat database dengan nama notesapp `CREATE DATABASE notesapp;`
- berikan hak akses ke user developer `GRANT ALL PRIVILEGES ON DATABASE notesapp TO developer;`
- Untuk mengkases database lewat termial `psql --username developer --dbname notesapp`
- Memasang node-postgres `npm install pg`
- Konfigurasi environment `npm install dotenv`