<template>
  <div class="task-container">
    <h1>Daftar Tugas</h1>
    <div class="task-border">
      <ul class="task-list">
        <li v-for="(task, index) in tasks" :key="index">
          <a
            :href="links[index]"
            class="task-link"
            @click.prevent="kelink(links[index])"
            >{{ task }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        "Tugas 1",
        "Tugas 2",
        "Tugas 3",
        "Tugas 4",
        "Tugas 5",
        "Tugas 6",
        "Tugas 7",
      ],
      links: [
        "https://muhammadfebriadi223510204.vercel.app/",
        "https://muhammad-febriadi-223510204-tugas2.vercel.app/",
        "https://muhammad-febriadi-223510204-tugas3.vercel.app/",
        "https://muhammadfebriadi-223510204-tugas4.vercel.app/",
        "https://muhammadfebriadi-223510204-4d-tugas5.vercel.app/",
        "https://muhammad-febriadi-223510204-tugas6.vercel.app/",
        "https://muhammad-febriadi-223510204-tugas7.vercel.app/",
      ],
    };
  },
  methods: {
    kelink(link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style scoped>
.task-container {
  position: relative;
  max-width: 700px; 
  width: 100%;
  border-radius: 12px; 
  padding: 20px;
  margin: 60px auto; 
  background-color: #f0f8ff; 
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); 
  color: #333;
}

h1 {
  text-align: center;
  margin-bottom: 25px; 
  font-size: 28px; 
  color: #1e90ff; 
  font-weight: 600; 
}

.task-border {
  border: 2px solid #1e90ff; 
  border-radius: 12px;
  padding: 15px;
}

.task-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: 600;
  opacity: 0.85; 
}

.task-link {
  display: block;
  background-color: #ffffff; 
  color: #1e90ff; 
  padding: 15px 20px;
  border-radius: 8px;
  text-decoration: none;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05); 
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
}

.task-link:hover {
  background-color: #e0f7ff; 
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}
</style>
