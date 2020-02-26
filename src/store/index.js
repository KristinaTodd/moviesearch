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
    },

    setMovies(state, movies) {
      state.movies = movies
    }

  },
  actions: {

    async getMoviesByQuery({ commit, dispatch }, query) {
      let res = await _api.get("movie?api_key=b657e0918cc5f0f622c8d02539206b0a&query=" + query)
      commit("setMovies", res.data.results)
      console.log(res)
    },

    setActiveMovie({ commit }, movie) {
      commit("setActiveMovie", movie);
    }
  },
  modules: {
  }
})
