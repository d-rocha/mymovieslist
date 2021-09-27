/* eslint-disable no-mixed-spaces-and-tabs */
import { createStore } from 'vuex'

const state = {
	movies: [
	  {
		movie: '',
		gender: '',
		description: '',
		datetime: ''
	  }
	],
}

const actions = {
	newMovie({commit}, movies) {
		commit('setMovie', movies)
	}
}

const mutations = {
	setMovie(state, payload){
		state.movies.push(payload);
	},
	getMovies(state) {
		return state.movies;
	}
}

export default createStore({ state, actions, mutations })
