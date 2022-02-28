<template>
  <div>
    <router-link class="custom-link" to="/about" @click="sendCountry">
      <b-card
        :img-src="country.flags ? country.flags.png : ''"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 23rem; "
        class="mb-2 card-custom"
      >
        <b-card-body class="text-start">
          <h5 class="mb-3">{{ country.name.official }}</h5>
          <h6><strong>Population: </strong>{{ country.population }}</h6>
          <h6><strong>Region: </strong>{{ country.region }}</h6>
          <h6><strong>Capital: </strong>{{ country.capital ? country.capital[0] : '---' }}</h6>
        </b-card-body>
      </b-card>
    </router-link>    
  </div>
</template>
<script>
export default {
  props: {
    country: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    sendCountry() {
      this.$store.commit('SET_COUNTRY', this.country)
    }
  }
}
</script>
<style>
  .custom-link {
    text-decoration: unset;
    color: black;
  }
  .custom-link:hover {
    text-decoration: unset;
    color: black;
  }
  .custom-link .card-custom:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-decoration: unset;
    color: black;
  }
  .custom-link .card-custom img {
    height: 160px;
  }
</style>