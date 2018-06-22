import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tempoInicial: 0,
		tempoRestante: 0,
    descricao: ''
  },
  mutations: {
    tempoRestanteMutation(state, payload) {
      state.tempoRestante = payload
    },
    tempoInicialMutation(state, payload) {
      state.tempoInicial = payload
    },
    descricaoMutation(state, payload) {
      state.descricao = payload
    }
  },
  actions: {
		tempoRestanteAction(context, payload) {
      context.commit('tempoRestanteMutation', payload)
    },
    tempoInicialAction(context, payload) {
      context.commit('tempoInicialMutation', payload)
    },
    descricaoAction(context, payload) {
      context.commit('descricaoMutation', payload)
    }
  },
  getters: {
    getTempoRestante(state) {
      return state.tempoRestante
    },
    getTempoInicial(state) {
      return state.tempoInicial
    },
    getDescricao(state) {
      return state.descricao
    }
  }
})
