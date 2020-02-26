<template>
  <div class="movie col-10 text-center card m-1" @click="setActive">
    <div class="card-body">
      <h5>{{ movieData.title}}</h5>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Movie",
    props: ["movieData", "movieIndex"],
    methods: {
      setActive() {
        this.$store.dispatch("setActiveMovie", this.movieData)
      }
    }
  }
</script>

<style scoped>
  .movie {
    cursor: pointer;
    font-family: 'Simonetta';
  }
</style>