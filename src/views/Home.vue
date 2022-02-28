<template>
  <div class="home">
    <div class="p-5">
      <div v-if="countries.length">
        <div class="row justify-content-between">
          <div class="col-12 col-md-3">
            <div class="d-flex">
              <input class="form-control me-2 py-2 px-4" type="search" placeholder="Search" v-model="filterWork">
              <button class="btn btn-outline-dark" @click="search()">Search</button>
            </div>
          </div>
          <div class="col-12 col-md-3">
            <select class="form-select" v-model="filter" @change="regionFiltered">
              <option value="0">All countries</option>
              <option value="africa">Africa</option>
              <option value="ame">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
        </div>
        <div class="row py-5">
          <div class="col-12 col-md-3 mb-4 mb-md-5" v-for="(item, index) in countries" :key="index">
            <cardCountry :country="item"/>
          </div>
        </div>     
      </div>
    </div>
  </div>
</template>

<script>
import cardCountry from '../components/CardCountry.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    cardCountry
  },
  data() {
    return {
      filter: '0',
      filterWork: '',
      perPage: 20,
      currentPage: 1
    }
  },
  created() {
    if (!this.countries.length) {
      this.$store.dispatch('getAllCountries')
    }    
  },
  computed: {
   /*  countries() {
      return this.$store.state.allCountries
    }, */
    rows() {
      return this.countries.length
    },
    ...mapGetters({
      countries: 'filteredCountries',
    })
  },
  methods: {
    regionFiltered() {
      this.$store.dispatch('getByRegion', this.filter)
    }
  },
  watch: {
    filterWork() {
      this.$store.commit('SET_QUERY', this.filterWork)
    }
  }
}
</script>
