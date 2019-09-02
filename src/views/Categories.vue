<template>
  <div>
    <div class="page-title">
      <h3>Категории lorem ipsun</h3>
    </div>
    <section>
      <div class="row">
        <CategoryCreate />
        <CategoryEdit />
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from '@/components/CategoryCreate';
import CategoryEdit from '@/components/CategoryEdit';

export default {
  name: 'categories',

  data: () => ({
    categories: []
  }),

  // async mounted() {
  //   this.currency = await this.$store.dispatch('fetchCurrency');
  //   this.loading = false;
  // },

  // methods: {
  //   async refresh() {
  //     this.loading = true;
  //     this.currency = await this.$store.dispatch('fetchCurrency');
  //     this.loading = false;
  //   }
  // },

  components: {
    CategoryCreate,
    CategoryEdit
  }
};
</script>

