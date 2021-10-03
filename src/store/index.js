/* eslint-disable no-mixed-spaces-and-tabs */
import { createStore } from 'vuex'

const state = {
	movies: [
	  {	
		id: '',
		name: '',
		gender: '',
		description: '',
		datetime: ''
	  }
	],
}

const getters = {
	movies: state => {
		return state.movies.filter(movie => movie);
	}
}

const actions = {	
	newMovie({commit}, movies) {
		setTimeout(() =>{
			movies.id = Date.now()
			movies.datetime = new Date().toLocaleDateString('pt-BR', {
				day: 'numeric',
				month: 'short',
				year: 'numeric'
			})
			commit('setMovie', movies)
		}, 1000)
	}
}

const mutations = {
	setMovie(state, payload){
		state.movies = [...state.movies, payload];			
	}	
}

export default createStore({ state, getters, actions, mutations })
