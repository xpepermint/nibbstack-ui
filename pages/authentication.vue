<template>
  <div class="intro">
    <div class="image-bg">
      <div class="content">
        <img :src="`/images/${logo}`" :alt="title" />
        <h1 v-text="title" />
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
      title: 'Serverless authentication',
      description:
        'Seamless authentication integration for event-driven and serverless applications.',
      category: 'serverless_authentication',
      logo: 'logo_serverless_authentication.svg'
    }
  },
  head() {
    return {
      title: `Nibbstack - ${this.title}`,
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
