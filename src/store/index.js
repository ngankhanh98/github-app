import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    users: Array,
    alert: Object, // type, message
    repos: Array,
    commits: Array,
    detail: Object
  },
  getters: {
    users: state => state.users,
    alert: state => state.alert,
    repos: state => state.repos,
    commits: state => state.commits,
    detail: state => state.detail
  },
  mutations: {
    SEARCH_USERS(state, payload) {
      state.users = payload
      console.log('state.users', state.users)
    },
    SET_ALERT(state, payload) {
      state.alert = { ...payload }
    },
    RESET_STATE(state) {
      const states = Object.keys(state)
      states.forEach(item => state[item] = null)
      console.log('state', state)
    },
    LOAD_REPOS(state, { data }) {
      state.repos = data
      console.log('state.repos', state.repos)
    },
    LOAD_COMMITS(state, payload) {
      state.commits = payload
      console.log('state.commits', state.commits)
    },
    LOAD_USER_DETAIL(state, { data }) {
      state.detail = { ...data }
      console.log('state.detail', state.detail)
    },
    CLEAR_ALERT(state) {
      state.alert = { type: '', message: '' }
    }
  },
  actions: {
    searchUser({ commit }, term) {
      return axios
        .get(`https://api.github.com/search/users?q=${term}`)
        .then((result) => {
          if (result.data.total_count)
            commit('SEARCH_USERS', result.data.items)
          else
            commit('SET_ALERT', { type: 'error', message: "Username not found" })

        })
        .catch((err) => {
          commit('SET_ALERT', { type: 'error', message: err.response.data.message })
        });
    },
    resetState({ commit }) {
      commit('RESET_STATE')
    },
    loadRepos({ commit }, username) {
      console.log('username', username)
      return axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then((result) => {
          console.log('result', result)
          commit('LOAD_REPOS', result)
        })
        .catch((err) => {
          commit('SET_ALERT', { type: 'error', message: err.response.data.message })
        });
    },
    loadCommits({ commit }, { username, repository }) {
      console.log('username', username)
      console.log('repos', repository)

      return axios.get(`https://api.github.com/repos/${username}/${repository}/commits`).then((result) => {
        console.log('result.data', result.data)
        commit('LOAD_COMMITS', result.data)
      }).catch((err) => {
        commit('SET_ALERT', { type: 'error', message: err.response.data.message })
      });
    },
    loadUserDetail({ commit }, username) {
      console.log('username', username)
      return axios.get(`https://api.github.com/users/${username}`).then((result) => {
        commit('LOAD_USER_DETAIL', result)
      }).catch((err) => {
        commit('SET_ALERT', { type: 'error', message: err.response.data.message })
      });
    },
    clearAlert({ commit }) {
      commit('CLEAR_ALERT')
    }
  },
  modules: {
  }
})
