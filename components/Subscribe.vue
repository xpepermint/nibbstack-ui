<template>
  <div class="form">
    <transition mode="out-in" name="fade">
      <div key="form" v-if="state === 0">
        <validation-observer ref="observer" v-slot="{ passes }">
          <form @submit.prevent="passes(submitForm)" class="subscribe">
            <validation-provider
              v-slot="{ errors }"
              rules="required|email"
              name="E-mail"
            >
              <input
                v-model="data.email"
                type="text"
                placeholder="Enter your e-mail"
              />
              <span v-show="errors[0]" class="alert">{{ errors[0] }}</span>
            </validation-provider>
            <button type="submit">Notify me</button>
          </form>
        </validation-observer>
      </div>
      <div key="loading" v-else-if="state === 1">
        <img class="icon" src="/icons/loader.svg" alt="Loading" />
      </div>
      <div key="success" v-else-if="state === 2">
        <img class="icon" src="/icons/success.svg" alt="Success" />
        <p>Thank you for your interes! We'll contact you shortly.</p>
      </div>
      <div key="error" v-else-if="state === 3">
        <img class="icon" src="/icons/error.svg" alt="Error" />
        <p>Something went wrong. Try again later.</p>
      </div>
    </transition>
  </div>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import en from 'vee-validate/dist/locale/en.json'

extend('required', required)
extend('email', email)
localize({ en })

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      state: 0,
      data: {
        email: ''
      }
    }
  },
  methods: {
    async submitForm() {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) {
        return
      }
      try {
        this.state = 1
        await this.$axios.$post(
          'https://www-api.0xcert.org/newsletters/request',
          this.data
        )
        this.state = 2
      } catch (err) {
        this.state = 3
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  margin-top: 3rem;
}

.icon {
  height: 36px;
  margin: 0 0 1rem;
  width: 36px;
}

.subscribe {
  border-radius: 50px;
  box-shadow: var(--box-shadow-hover);
  display: inline-flex;
  font-size: 16px;
  position: relative;
  transition: box-shadow var(--ease);

  .alert {
    bottom: -1.6rem;
    font-size: 14px;
    left: 1.5rem;
    opacity: 0.8;
    position: absolute;
  }

  &:focus-within {
    box-shadow: var(--box-shadow-focus);
  }

  input {
    border: 0;
    border-bottom-left-radius: 25px;
    border-top-left-radius: 25px;
    font-size: inherit;
    line-height: 50px;
    min-width: 300px;
    padding: 0 1.5rem;

    &:focus {
      box-shadow: none;
      outline: none;
    }
  }

  button {
    background-color: var(--primary-color);
    border: 0;
    border-bottom-right-radius: 25px;
    border-top-right-radius: 25px;
    color: var(--text-color);
    cursor: pointer;
    font-size: inherit;
    font-weight: bold;
    padding: 0 1.8rem 0 1.5rem;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
    transition: background-color var(--quick);

    &:focus {
      box-shadow: none;
      outline: none;
    }

    &:hover {
      background-color: var(--secondary-color);
    }
  }
}
</style>
