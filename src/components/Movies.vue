<template>
  <div class="movies row">
    <movie v-for="(movieObj, index) in movies" :key="movieObj.id" :movieData="movieObj" :movieIndex="index" />
  </div>
</template>

<script>
  import Movie from "./Movie";

  export default {
    name: "Movies",

    mounted() {
      this.$store.dispatch("setMovies")
    },
    data() {
      return {};
    },
    computed: {
      movies() {
        return this.$store.state.movies;
      }
    },
    components: {
      Movie
    }
  }
</script>