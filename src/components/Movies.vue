<template>
  <div class="movies row">
    <div class="col-6">
      <div class="card" @click="setActive">
        <h5>{{ movieData.title }}</h5>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Movies",
    methods: {
      setActive() {
        this.$store.dispatch("setActiveMovie", this.movieData)
      }
    }
  }
</script>