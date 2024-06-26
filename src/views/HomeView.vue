<template>
  <div class="info-container">
    <h1>Informasi Mahasiswa:</h1>
    <div class="student-details">
      <div class="detail-item">
        <span class="detail-label">Nama:</span>
        <span class="detail-value">{{ nama }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">NPM:</span>
        <span class="detail-value">{{ npm }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Kelas:</span>
        <span class="detail-value">{{ kelas }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Matkul:</span>
        <span class="detail-value">{{ matkul }}</span>
      </div>
    </div>

    <div class="additional-info">
      <h2>Kata-Kata:</h2>
      <ul>
        <li v-for="pengumuman in pengumumanList" :key="pengumuman.id">
          {{ pengumuman.text }}
        </li>
      </ul>

      <h2>Jadwal Kuliah:</h2>
      <ul>
        <li v-for="jadwal in jadwalList" :key="jadwal.id">
          {{ jadwal.matkul }} - {{ jadwal.waktu }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nama: "Muhammad Febriadi",
      npm: "223510204",
      kelas: "4-D",
      matkul: "LAB PBK",
      pengumumanList: [
        { id: 1, text: "ngoding ga ngoding yg penting makan,makan bg?" },
        { id: 2, text: "Cape-Cape ngoding,giliran project udh kelar dia jalan ama yg lain:(" },
        { id: 2, text: "Maless ngetik udh capek gara-gara pengumuman no.2:)" },
      ],
      jadwalList: [
        { id: 1, matkul: "Pemograman Berbasis Komponen", waktu: "Rabu, 9:00 - 10:40" },
        { id: 2, matkul: "Pratikum Pemograman Berbasis Komponen", waktu: "Rabu, 10:45 - 12:25" },
      ],
    };
  },
};
</script>

<style scoped>
.info-container {
  max-width: 600px;
  margin: 60px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  color: #444;
}

h1 {
  text-align: center;
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 25px;
}

h2 {
  margin-top: 30px;
  font-size: 24px;
  color: #2c3e50;
}

.student-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.detail-label {
  font-weight: bold;
  color: #2980b9;
  margin-bottom: 5px;
}

.detail-value {
  color: #2c3e50;
}

.additional-info {
  margin-top: 30px;
}

.additional-info ul {
  list-style-type: none;
  padding: 0;
}

.additional-info li {
  background-color: #fff;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
