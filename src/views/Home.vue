<template>
  <div class="home container-fluid">

    <div class="row">
      <search />
    </div>

    <div class="row " v-if="!activeMovieTest.title && !moviesTest.length">
      <div class="col-md-4"></div>
      <div class="col-12 col-md-4 m-1 justify-content-center p-0">
        <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="2000">
              <img src="https://image.tmdb.org/t/p/w500//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" class="d-block w-80"
                alt="...">
            </div>
            <div class="carousel-item" data-interval="2000">
              <img src="https://image.tmdb.org/t/p/w500//pThyQovXQrw2m0s9x82twj48Jq4.jpg" class="d-block w-80"
                alt="...">
            </div>
            <div class="carousel-item" data-interval="2000">
              <img src="https://image.tmdb.org/t/p/w500//z4x0Bp48ar3Mda8KiPD1vwSY3D8.jpg" class="d-block w-80"
                alt="...">
            </div>
            <div class="carousel-item" data-interval="2000">
              <img src="https://image.tmdb.org/t/p/w500//adw6Lq9FiC9zjYEpOqfq03ituwp.jpg" class="d-block w-80"
                alt="...">
            </div>
            <div class="carousel-item" data-interval="2000">
              <img src="https://image.tmdb.org/t/p/w500//ejrD1lkCIQX26TO8k4gePsFpcyX.jpg" class="d-block w-80"
                alt="...">
            </div>
            <div class="carousel-item" data-interval="2000">
              <img src="https://image.tmdb.org/t/p/w500//jcDgz7v8tUMixVrJki8zOdQhaMn.jpg" class="d-block w-80"
                alt="...">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-4">
        <movies />
      </div>
      <div class="col-8">
        <active-movie />
      </div>
    </div>
  </div>
</template>

<script>
  import Search from "@/components/Search";
  import Movies from "@/components/Movies";
  import ActiveMovie from "@/components/ActiveMovie"
  // @ is an alias to /src

  export default {
    name: 'Home',
    methods: {

    },
    components: {
      Search,
      Movies,
      ActiveMovie,
    },
    computed: {
      moviesTest() {
        return this.$store.state.movies
      },
      activeMovieTest() {
        return this.$store.state.activeMovie
      }
    }

  }
</script>