import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    prueba: 'hola',
    allCountries: {},
    country: {},
    filter: {
      query: ''
    }
  },
  mutations: {
    setAllCountries(state, data) {
      state.allCountries = data
    },
    setAllRegions(state, data) {
      state.allRegions = data
    },
    SET_QUERY(state, query) {
      state.filter.query = query.toUpperCase()
    },
    SET_COUNTRY(state, country) {
      state.country = country
    },
  },
  actions: {
    getAllCountries: function({ commit }) {
      axios.get('https://restcountries.com/v3.1/all')
      .then(res => {        
        commit('setAllCountries', res.data)
      })
      .catch(err => {
        console.error(err); 
      })
      commit('setAllCountries', {})      
    },
    getByRegion: function({ commit }, param) {
      if (param == '0') {
        axios.get('https://restcountries.com/v3.1/all')
        .then(res => {        
          commit('setAllCountries', res.data)
        })
        .catch(err => {
          console.error(err); 
        })
        commit('setAllCountries', {})   
      } else {
        axios.get('https://restcountries.com/v3.1/region/'+ param)
        .then(res => {        
          commit('setAllCountries', res.data)
        })
        .catch(err => {
          console.error(err); 
        })
        commit('setAllCountries', {})      
      }
    }
  },
  modules: {
  }, 
  getters: {
    filteredCountries(state) {
      if (state.filter.query.length > 1) {
        return state.allCountries.filter(          
          country =>          
            country.name.official.toUpperCase().includes(state.filter.query) 
        )
      }
      return state.allCountries
    },
  }
})
