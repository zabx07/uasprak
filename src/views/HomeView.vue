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
    };
  },
};
</script>

<style scoped>
.info-container {
  max-width: 500px; 
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
</style>
