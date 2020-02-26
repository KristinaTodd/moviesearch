<template>
  <div class="row" v-if="details.title">
    <div class="col-10 text-center card bg-dark text-white">
      <img src="https://image.tmdb.org/t/p/w500details.poster_path" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "ActiveMovie",
    computed: {
      details() {
        return this.$store.state.activeMovie;
      }
    },
    methods: {

    }
  }
</script>