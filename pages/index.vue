<template>
  <div class="intro">
    <div class="image-bg">
      <div class="content">
        <h1>Rust Private Registry</h1>
        <h3>
          First <strong>clooud based</strong> Rust private registry for your
          <strong>private crates</strong> comming soon!
          <strong>Subscribe</strong> for the news!
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
  max-width: 600px;
  text-align: center;

  h1 {
    font-size: 40px;
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
