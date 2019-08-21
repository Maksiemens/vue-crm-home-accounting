<template>
  <form class="card auth-card" @submit.prevent="onSubmit">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input id="email" type="text" @blur="$v.email.$touch()" v-model.trim="email" :class="{invalid: ($v.email.$dirty && $v.email.required) || ($v.email.$dirty && !$v.email.email)}" />
        <label for="email">Email</label>
        <small class="helper-text invalid" v-if="($v.email.$dirty && !$v.email.required)">
          Email не должен быть пустым
        </small>
        <small class="helper-text invalid" v-else-if="($v.email.$dirty && !$v.email.email)">
          Email должен быть корректен
        </small>
      </div>
      <div class="input-field">
        <input id="password" type="password" @blur="$v.password.$touch()" v-model.trim="password" :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}" />
        <label for="password">Пароль</label>
        <small class="helper-text invalid" v-if="($v.password.$dirty && !$v.password.required)">
          Введите пароль
        </small>
        <small class="helper-text invalid" v-else-if="($v.password.$dirty && !$v.password.minLength)">
          Пароль должен быть не меньше {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}} символов
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit" :disabled="$v.$invalid" >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>


<style lang="scss">
</style>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators';


export default {
  name: 'login',

  data: () =>({
    email: null,
    password: null,
    minLengPassword: 6
  }),

  validations: {
    email: {
      email,
      required
    },
    password: {
      required,
      minLength: minLength(this.minLengPassword)
    }
  },

  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log('formData', formData);
      this.$router.push('/');
    }
  },
};
</script>
