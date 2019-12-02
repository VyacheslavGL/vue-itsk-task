import Vue from 'vue'
import Vuex from 'vuex'
import Dogs from "../services/Dogs";
import {DEL_SELECTED, SET_BREEDS, SET_SELECTED} from "./mutation.types";
import {ADD_SELECTED, LOAD_BREEDS, REMOVE_SELECTED} from "./action.types";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        breeds: [],
        selected: [],
        history: []
    },
    mutations: {
        [SET_BREEDS](state, payload) {
            state.breeds = payload;
        },
        [SET_SELECTED](state, payload) {
          const index = state.breeds.indexOf(payload);
          console.log('index del breeds - ', index);
          if(index > -1){
            state.breeds.splice(index, 1);
          }
            state.selected.push(payload);
            state.history.push({
                id: payload.id,
                name: payload.name,
                moveName: 'Добавили',
                date: new Date()
            });
        },
        [DEL_SELECTED](state, payload) {
          const index = state.selected.indexOf(payload);
          if(index > -1){
            state.selected.splice(index, 1);
          }
          state.breeds.unshift(payload);
          state.history.push({
            id: payload.id,
            name: payload.name,
            moveName: 'Удалили',
            date: new Date()
          });
        }
    },
    actions: {
        async [LOAD_BREEDS]({commit}) {
            commit(SET_BREEDS, await Dogs.getAllBreeds())
        },
        async [ADD_SELECTED]({commit}, data) {
            commit(SET_SELECTED, data)
        },
        async [REMOVE_SELECTED]({commit}, data) {
            commit(DEL_SELECTED, data)
        }
    },
    modules: {}
})
