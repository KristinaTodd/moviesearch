import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


let _api = axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie?api_key=b657e0918cc5f0f622c8d02539206b0a&query=",
  timeout: 5000
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    activeMovie: {}
  },
  mutations: {
    setActiveMovie(state, movie) {
      state.activeMovie = movie;
    }
  },
  actions: {
    getMoviesByQuery() {
      let url = "https://api.themoviedb.org/3/search/movie?api_key=b657e0918cc5f0f622c8d02539206b0a&query=" + query;

      $.getJSON(url)
        .then(res => {
          let results = res.results
            .map(rawData => new Movies(rawData))
          commit("movies", results)
        }).catch(err => {
          throw new Error(err);
        });
    }
  },
  modules: {
  }
})
