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

# Teknik Migrate
- `npm install node-pg-migrate`
-  Pada Terminal proyek, silakan eksekusi perintah dalam membuat migration berikut: `npm run migrate create "create table notes"`
- `npm run migrate up` untuk migrasi schema yang sudah kita buat di file migrations

# Authentication
- npm run migrate create "create table users"
- lakukan eksekusi migration `npm run migrate up`
- install `npm install bcrypt`
- `npm install @hapi/jwt`
- npm run migrate create "create table authentications"
- `require('crypto').randomBytes(64).toString('hex');`
- npm run migrate create "add column owner to table notes"
- npm run migrate create "add foreign key to owner column"
- npm run migrate create "create collaborations table"

truncate notes, users, authentications, collaborations;
truncate albums, songs, users, authentications, playlists, playlistsongs, playlist_song_activities, collaborations;

- npm install amqplib