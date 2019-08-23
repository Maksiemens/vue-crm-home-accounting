<template>
  <form class="card auth-card" @submit.prevent="onSubmit">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input id="email" type="email" class="validate" @blur="$v.email.$touch()" v-model.trim="email" :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}" />
        <label for="email">Email</label>
        <small class="helper-text invalid" v-if="($v.email.$dirty && !$v.email.required)">
          Email не должен быть пустым
        </small>
        <small class="helper-text invalid" v-else-if="($v.email.$dirty && !$v.email.email)">
          Email должен быть корректен
        </small>
      </div>
      <div class="input-field">
        <input id="password" type="password" class="validate" @blur="$v.password.$touch()" v-model.trim="password" :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}" />
        <label for="password">Пароль</label>
        <small class="helper-text invalid" v-if="($v.password.$dirty && !$v.password.required)">
          Введите пароль
        </small>
        <small class="helper-text invalid" v-else-if="($v.password.$dirty && !$v.password.minLength)">
          Пароль должен быть не меньше {{$v.password.$params.minLength.min}} символов. Сейчас {{password.length}}
        </small>
      </div>
      <div class="input-field">
        <input id="name" type="text" class="validate" @blur="$v.name.$touch()" v-model.trim="name" :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}" />
        <label for="name">Имя</label>
        <small class="helper-text invalid" v-if="($v.name.$dirty && !$v.name.required)">
          Введите имя
        </small>
        <small class="helper-text invalid" v-else-if="($v.name.$dirty && !$v.name.minLength)">
          Имя должно быть не меньше {{$v.name.$params.minLength.min}} символов. Сейчас {{name.length}}
        </small>
      </div>
      <p>
        <label>
          <input type="checkbox" class="validate" @change="$v.agree.$touch()" v-model="agree" :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.minLength)}" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit" :disabled="$v.$invalid">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<style lang="scss">
</style>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'register',

  data: () =>({
    email: null,
    password: null,
    name: null,
    agree: false
  }),

  validations: {
    email: {
      email,
      required
    },
    password: {
      required,
      minLength: minLength(6)
    },
    name: {
      required,
      minLength: minLength(3)
    },
    agree: {
      checked: value => value
    }
  },

  methods: {
    async onSubmit() {
      try {
        await this.$store.dispatch('register', {
          email: this.email,
          password: this.password,
          name: this.name
        });
        this.$router.push('/');
      }
      catch (error) {}
    }
  },
};
</script>
