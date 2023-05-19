import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        user: null,
        repositories: null,
        error: null,
        url: 'https://api.github.com/users/',
        currentSort: 'name'
    },
    mutations: {
        sort(state, payload) {
            state.currentSort = payload
        },
        userInfo(state, payload) {
            state.user = payload
            state.error = null
        },
        reposInfo(state, payload) {
            state.repositories = payload
        },
        resetUser(state) {
            state.user = state.error = null
        },
        getError(state, error) {
            state.user = null;
            if (error.response.status === 403) {
                state.error = 'Вас забанили на данном сайте на определенное время...';
            } else {
                state.error = 'Что то пошло не так';
            }
        },
    },
    actions: {
        async userInfo({ commit, state }, search) {
            try {
                const resolve = await axios.get(`${state.url}${search}`);
                const repos = await axios.get(`${state.url}${search}/repos`);
                commit('userInfo', resolve.data)
                commit('reposInfo', repos.data)
            } catch (error) {
                commit('getError', error)
            }
        }
    },
    getters: {
        getReposSort(state) {
            if (state.repositories != null) {
                return state.repositories.sort((a,b) => {
                    let mod = 1
                    if (state.currentSort == 'name') {
                        return a[state.currentSort].localeCompare(b[state.currentSort])
                    }else {
                        return -1 * mod
                    }
                })
            }
        }
    }
})

export default store