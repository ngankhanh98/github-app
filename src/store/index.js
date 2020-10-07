import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    users: null,
    message: '',
    alertType: '',
    repos: []
  },
  getters: {
    users: state => {
      return state.users;
    },
    message: state => { return state.message },
    alertType: state => state.alertType,
    repos: state => state.repos
  },
  mutations: {
    INIT_STATES(state, payload) {
      state.users = payload.users
      state.message = payload.message
      state.alertType = payload.alertType
    },
    SEARCH_USERS(state, payload) {
      console.log('payload', payload)
      state.users = payload
      console.log('state.users', state.users)
    },
    ERROR(state, { message }) {
      state.alertType = 'alert-warning'
      state.message = message
    },
    RESET_STATE(state) {
      state.users = null
      state.message = ''
      state.alertType = ''
      state.repos = null
    },
    LOAD_REPOS(state, { data }) {
      state.repos = data
      console.log('state.repos', state.repos)
    }
  },
  actions: {
    init({ commit }) {
      const users = null
      const message = ''
      const alertType = ''
      commit('INIT_STATES', { users, message, alertType })
    },
    searchUser({ commit }, term) {
      return axios
        .get(`https://api.github.com/search/users?q=user:${term}`)
        .then((result) => {
          commit('SEARCH_USERS', result.data.items)
        })
        .catch((err) => {
          commit('ERROR', err.response.data.errors[0])
        });
    },
    resetState({ commit }) {
      commit('RESET_STATE')
    },

    loadRepos({ commit, state }) {

      console.log('state', state) // state = {users: null, message: "", alertType: "", repos: Array(0)}
      const username = state.users[0].login
      console.log('username', username)
      return axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((result) => {
          console.log('result', result)
          commit('LOAD_REPOS', result)
        })
        .catch((err) => {
          commit('ERROR', err.message)
        });
    }

  },
  modules: {
  }
})
