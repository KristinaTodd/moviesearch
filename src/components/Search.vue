<template>
  <div class="col bg-info ">
    <form @submit.prevent="searchMovies" class="form-inline justify-content-center">
      <div class="form-group ">
        <label for="query"></label>
        <input name="query" type="text" class="form-control p-1 m-1" id="query" placeholder="Search movies..."
          v-model="searchTitle" />
        <button type="submit" class="btn btn-danger m-1">Search</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Search",
    data() {
      return {
        searchTitle: ""
      }
    },
    methods: {
      searchMovies() {
        debugger
        this.$store.dispatch("getMoviesByQuery", this.searchTitle)
      }
    }

  }
</script>