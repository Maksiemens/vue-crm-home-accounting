<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>

        <p class="currency-line" v-for="currency of currencies" :key="currency" >
          <span>{{ getCurrency(currency) | currency(currency) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-bill',

  props: ['rates'],

  data: () => ({
    currencies: ['RUB', 'UAH', 'USD', 'EUR']
  }),

  computed: {
    base() {
      return this.$store.getters.info.bill / (this.rates.RUB / this.rates.EUR);
    }
  },

  methods: {
    getCurrency(currency) {
      return Math.round(this.base * this.rates[currency]);
    }
  }
};
</script>
