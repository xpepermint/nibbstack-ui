<template>
  <div class="navigation">
    <div class="container">
      <div class="flex">
        <div class="logo">
          <img src="/images/nibbstack-logo.svg" alt="NibbStack" />
        </div>
        <div class="main-menu">
          <a href="mailto:info@nibbstack.com">Contact</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navigation {
  background-color: rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid var(--border-light);
  padding: var(--space);
  position: fixed;
  width: 100%;

  .flex {
    align-items: center;
    display: flex;
  }

  .logo {
    flex: 1 0;

    img {
      display: block;
    }
  }

  .main-menu {
    font-size: 16px;

    a {
      opacity: 0.5;
      padding: 0 0.5rem;
      text-decoration: none;
      transition: opacity var(--quick);

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
