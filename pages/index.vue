<template>
  <div class="intro">
    <div class="image-bg">
      <div class="content">
        <!-- <img :src="`/images/${logo}`" :alt="title" /> -->
        <!-- <h1 v-text="title" /> -->
        <img src="/images/nibbstack-logo.svg" alt="NibbStack" width="200" />
        <br />
        <br />
        <h3 v-text="description" />
        <subscribe :category="category" />
      </div>
    </div>
  </div>
</template>

<script>
import Subscribe from '~/components/Subscribe'
export default {
  components: {
    Subscribe
  },
  data() {
    return {
      title: 'Cloud Application Platform',
      description:
        'We are developers building something awesome for developers.',
      logo: 'cloud_platform.svg',
      category: 'cloud_platform'
    }
  },
  head() {
    return {
      title: `Nibbstack`,
      meta: [
        {
          hid: 'type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'title',
          property: 'og:title',
          content: `Nibbstack - ${this.title}`
        },
        {
          hid: 'socialDescription',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'description',
          property: 'description',
          content: this.description
        },
        {
          hid: 'twitterDescription',
          property: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitterTitle',
          property: 'twitter:title',
          content: `Nibbstack - ${this.title}`
        }
      ]
    }
  }
}
</script>
