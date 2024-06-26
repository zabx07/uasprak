<template>
  <div class="widget-cuaca">
    <h2>Cuaca Saat Ini</h2>
    <input
      type="text"
      v-model="lokasi"
      @keyup.enter="ambilCuaca"
      placeholder="Masukkan lokasi..."
    />
    <div v-if="cuaca">
      <p>Lokasi: {{ cuaca.name }}</p>
      <p>Suhu: {{ cuaca.main.temp }} °C</p>
      <p>Deskripsi: {{ cuaca.weather[0].description }}</p>
    </div>
    <div v-else>
      <p>Memuat...</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      lokasi: "Jakarta",
      cuaca: null,
    };
  },
  methods: {
    async ambilCuaca() {
      const apiKey = "96ddfce69c2eced8b084c86efc4aef30";
      try {
        const respons = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.lokasi}&appid=${apiKey}&units=metric`
        );
        this.cuaca = respons.data;
      } catch (error) {
        console.error("Gagal mengambil data cuaca:", error);
      }
    },
    async ambilCuacaAwal() {
      const apiKey = "96ddfce69c2eced8b084c86efc4aef30";
      try {
        const respons = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=${apiKey}&units=metric`
        );
        this.cuaca = respons.data;
      } catch (error) {
        console.error("Gagal mengambil data cuaca:", error);
      }
    },
  },
  mounted() {
    this.ambilCuacaAwal();
  },
};
</script>

<style scoped>
.widget-cuaca {
  position: relative;
  max-width: 480px;
  width: 100%;
  border-radius: 8px;
  padding: 25px;
  margin: 85px auto 0;
  background-color: rgba(255, 255, 255, 0.333);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  color: #383737;
  background-image: url("/src/assets/lebah.jpg");
  background-size: cover;
  background-position: center;
}

.widget-cuaca h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 30px;
}

.widget-cuaca input {
  width: calc(100% - 20px);
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.widget-cuaca div {
  margin-bottom: 20px;
}

.widget-cuaca p {
  margin: 10px 0;
  font-weight: bold;
}

.widget-cuaca .loading {
  text-align: center;
}

.widget-cuaca .loading::after {
  content: "Loading...";
}

.widget-cuaca .info-item {
  display: flex;
  justify-content: space-between;
  background: #383737;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.widget-cuaca .label {
  font-weight: bold;
  color: white;
}

.widget-cuaca .value {
  color: white;
}
</style>
