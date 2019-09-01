<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Создать</h4>
      </div>

      <form @submit.prevent="onSubmit">
        <div class="input-field">
          <input id="name" type="text" class="validate" @blur="$v.title.$touch()" v-model.trim="title" :class="{invalid: ($v.title.$dirty && !$v.title.required)}" />
          <label for="name">Название</label>
          <span class="helper-text invalid" v-if="($v.title.$dirty && !$v.title.required)">Введите название категории</span>
        </div>

        <div class="input-field">
          <input id="limit" type="number" class="validate" @blur="$v.limit.$touch()" v-model.number="limit" :class="{invalid: ($v.limit.$dirty && !$v.limit.minValue)}" />
          <label for="limit">Лимит</label>
          <span class="helper-text invalid" v-if="($v.limit.$dirty && !$v.limit.minValue)">
            Минимальное значение должно быть не меньше {{$v.limit.$params.minValue.min}}. Сейчас {{limit}}
          </span>
        </div>

        <button class="btn waves-effect waves-light" type="submit" :disabled="$v.$invalid">
          Создать
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minValue } from 'vuelidate/lib/validators';

export default {
  name: 'category-create',

  data: () => ({
    title: '',
    limit: 100
  }),

  validations: {
    title: {
      required
    },
    limit: {
      minValue: minValue(1)
    }
  },

  methods: {
    async onSubmit() {
      try {
        const createCategory = await this.$store.dispatch('createCategory', {
          title: this.title,
          limit: this.limit
        });
        this.title = '';
        this.limit = 100;
        this.$v.$reset();
        this.$message('Категория была создана');
      }
      catch (error) {
      }
    }
  },

  mounted() {
    M.updateTextFields();
  },
};
</script>
