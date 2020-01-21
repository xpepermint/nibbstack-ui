<template>
  <div class="form">
    <transition mode="out-in" name="fade">
      <div v-if="state === 0" key="form">
        <validation-observer ref="observer" v-slot="{ passes }">
          <form class="subscribe" @submit.prevent="passes(submitForm)">
            <validation-provider
              v-slot="{ errors }"
              rules="required|email"
              name="E-mail"
            >
              <input
                v-model="data.email"
                type="text"
                placeholder="Sign up for early access"
              />
              <span v-show="errors[0]" class="alert">{{ errors[0] }}</span>
            </validation-provider>
            <button type="submit">Notify me</button>
          </form>
        </validation-observer>
      </div>
      <div v-else-if="state === 1" key="loading">
        <img class="icon" src="/icons/loader.svg" alt="Loading" />
      </div>
      <div v-else-if="state === 2" key="success">
        <img class="icon" src="/icons/success.svg" alt="Success" />
        <p>Thank you for your interest! We'll contact you shortly.</p>
      </div>
      <div v-else-if="state === 3" key="error">
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
          'https://mzenxvwh7d.execute-api.eu-central-1.amazonaws.com/dev/subscriptions',
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
    padding: 0 1.5rem;

    @include breakpoint(medium) {
      min-width: 350px;
    }

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
      color: #333;
      text-shadow: none;
    }
  }
}
</style>
