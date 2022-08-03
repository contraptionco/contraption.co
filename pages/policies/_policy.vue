<template>
  <article class="prose">
    <nuxt-link to="/policies" class="breadcrumb">
      Policies
    </nuxt-link>

    <h1>
      {{ policy.title }}
      <aside
        v-if="policy.lastUpdated"
        class="text-xs text-gray-300 pt-2 font-light"
      >
        Last updated: {{ policy.lastUpdated }}
      </aside>
    </h1>
    <nuxt-content :document="policy" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const slug = params.policy
    const policy = await $content(`policies/${slug}`)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Policy not found' })
      })
    return {
      policy
    }
  },
  head () {
    return {
      title: this.policy.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.policy.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: this.policy.title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: this.policy.description
        },
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: `https://contraption.co/policies/${this.policy.slug}/`
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          property: 'twitter:card',
          content: this.policy.description
        }
      ]
    }
  }
}
</script>
