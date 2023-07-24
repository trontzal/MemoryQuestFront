<template>

  <div v-if="ensenar == true">
    <div class="ponerGrid" @click="ensenar = false">
      <div></div>
      <h1>Media de puntuaciones</h1>
      <img src="../assets/imagenes/botones/cerrar.png" alt="" >
    </div>
    <div v-if="datosGrafico">
      <canvas ref="chartCanvas"></canvas>
    </div>
    <div v-else>
      Cargando...
    </div>
  </div>

  <div v-else class="minimizado ponerGrid" @click="refreshPage">
    <div></div><h2>Grafico de medias</h2><img src="../assets/imagenes/botones/abrir.png" alt="" >
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      datosGrafico: null,
      tipo_de_juego: "vis",
      chart: null, // Agregamos una propiedad para guardar la instancia del gráfico
      ensenar: true
    };
  },
  mounted() {
    this.recibirDatosGrafico();
  },
  updated() {
    this.renderChart();
  },
  methods: {
    refreshPage() {
      window.location.reload();
    },
    renderChart() {
      const ctx = this.$refs.chartCanvas;
      if (ctx) {
        if (this.chart) {
          // Si el gráfico ya existe, actualizamos los datos en lugar de crear uno nuevo
          this.chart.data.labels = this.datosGrafico ? this.datosGrafico.labels : [];
          this.chart.data.datasets[0].data = this.datosGrafico ? this.datosGrafico.data : [];
          this.chart.update(); // Actualizamos el gráfico existente
        } else {
          // Si el gráfico no existe, lo creamos
          this.chart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: this.datosGrafico ? this.datosGrafico.map(dato => dato.x) : [],
              datasets: [{
                label: 'Datos generales',
                data:  this.datosGrafico ? this.datosGrafico.map(dato => dato.y) : [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                tension: 0.2, // Ajusta el valor de tensión para suavizar las líneas
                fill: true // Rellena el área bajo la curva para obtener un efecto de ondas
              }]
            },
            options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        }
      }
    },
    async recibirDatosGrafico() {
      const url = "http://127.0.0.1:5000/grafico/" + this.tipo_de_juego;
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.datosGrafico = data;
        console.log(this.datosGrafico);
      } catch (error) {
        console.error(error);
      }
    }
  },
};
</script>


<style>
  .ponerGrid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    align-items: center;
  }
</style>

