<template>
  <div id="app">
    <div id="Home">
      <div class="home container-fluid">
        <div class="row">
          <div class="col text-center bg-dark  header">
            <router-link class="text-white" :to="{ name: 'Home' }">
              <h1>MovieSearch</h1>
            </router-link>
          </div>
        </div>
        <div class="row">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
  .header {
    font-family: 'Russo One';
  }

  .results {
    font-family: 'Simonetta';
  }
</style>