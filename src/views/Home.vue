<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col text-center bg-dark text-white header">
        <h1>MovieSearch</h1>
      </div>
    </div>
    <div class="row">
      <search />
    </div>
    <div class="row">
      <div class="col-6">
        <movies />
      </div>
      <div class="col-6">
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
    }

  }
</script>