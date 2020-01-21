<template>
  <div class="intro">
    <div class="image-bg">
      <div class="content">
        <img src="/images/rpr_logo.svg" alt="Rust Alternative Registry" />
        <h1>Rust Alternative Registry</h1>
        <h3>
          Create an alternative registry for Rust, published crates directly
          from Cargo, manage access and easily collaborate with your team!
        </h3>
        <subscribe />
      </div>
    </div>
  </div>
</template>

<script>
import Subscribe from '~/components/Subscribe'
export default {
  components: {
    Subscribe
  }
}
</script>

<style lang="scss">
.intro {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.content {
  max-width: 750px;
  text-align: center;

  h1 {
    font-size: 40px;
    font-weight: 300;
    margin-bottom: 2rem;

    @include breakpoint(medium) {
      font-size: 52px;
    }
  }

  h3 {
    font-size: 20px;
    font-weight: 300;
    opacity: 0.8;

    @include breakpoint(medium) {
      font-size: 24px;
    }
  }
}

.image-bg {
  align-items: center;
  background: url('/images/dotted-world.svg') no-repeat center center;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 1rem 1rem;
  width: 100%;

  @include breakpoint(desktop) {
    background-size: initial;
  }
}
</style>
