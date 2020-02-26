<template>
  <div class="row justify-content-center" v-if="details.title">
    <div class="col-8 text-center card bg-dark text-white m-1">
      <img :src='"https://image.tmdb.org/t/p/w500/"+details.poster_path' class="m-1" />
      <h3>{{ details.title }}</h3>
      <p>{{details.overview}}</p>
      <span>Release Date: {{details.release_date}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: " ActiveMovie",
    computed: {
      details() { return this.$store.state.activeMovie; }
    },
    methods: {}
  } </script>