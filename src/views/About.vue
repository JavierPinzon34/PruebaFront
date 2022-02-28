<template>
  <div class="about container mt-5">
    <div class="text-start">
      <router-link to="/" class="btn btn-outline-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
        Back
      </router-link>
    </div>
    <div class="row mt-5" v-if="country.name">
      <div class="col-12 col-md-6">
        <img :src="country.flags ? country.flags.png : ''" alt="" class="w-100">
      </div>
      <div class="col-12 col-md-6 text-start ps-5 py-4">
        <h1 class="mb-3">{{ country.name.official }}</h1>
        <div class="row mb-5">
          <div class="col-12 col-md-6">
            <h6><strong>Native name: </strong>{{ nativename[0].official }}</h6>
            <h6><strong>Population: </strong>{{ country.population }}</h6>
            <h6><strong>Region: </strong>{{ country.region }}</h6>
            <h6><strong>Sub Region: </strong>{{ country.subregion }}</h6>
          </div>
        </div>
        <div v-if="country.borders">
          <h5>Border Countries:</h5>
          <b-badge v-for="(item, index) in country.borders" :key="index" variant="secondary" class="me-2">{{ item }}</b-badge>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nativename: ''
    }
  },
  computed: {
    country() {
      return this.$store.state.country
    }
  },
  mounted() {    
    this.nativename = Object.values(this.country.name.nativeName)    
  }
}
</script>
