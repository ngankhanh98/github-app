import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    users: [],
    message: '',
    alertType: '',
    repos: [],
    commits: [],
    detail: {}
  },
  getters: {
    users: state => {
      return state.users;
    },
    message: state => { return state.message },
    alertType: state => state.alertType,
    repos: state => state.repos,
    commits: state => state.commits,
    detail: state => state.detail
  },
  mutations: {
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
      state.commits = []
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
    }
  },
  actions: {
    searchUser({ commit }, term) {
      return axios
        .get(`https://api.github.com/search/users?q=${term}`)
        .then((result) => {
          commit('SEARCH_USERS', result.data.items)
          console.log('result.data.items', result.data.items)
        })
        .catch((err) => {
          commit('ERROR', err.response.data.errors[0])
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
          commit('ERROR', err.message)
        });
    },
    loadCommits({ commit }, { username, repository }) {
      console.log('username', username)
      console.log('repos', repository)

      return axios.get(`https://api.github.com/repos/${username}/${repository}/commits`).then((result) => {
        console.log('result.data', result.data)
        commit('LOAD_COMMITS', result.data)
      }).catch((err) => {
        commit('ERROR', err.message)
      });
    },
    loadUserDetail({ commit }, username) {
      console.log('username', username)
      return axios.get(`https://api.github.com/users/${username}`).then((result) => {
        commit('LOAD_USER_DETAIL', result)
      }).catch((err) => {
        commit('ERROR', err.message)
      });
    }
  },
  modules: {
  }
})
