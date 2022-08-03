<template>
  <div class="prose">
    <h1>Policies, Terms, and Privacy</h1>
    <p>
      These policies and terms apply to all products built and maintained by
      Contraption Co. LLC including
      <a href="https://booklet.community" target="_blank">Booklet</a> and
      <a href="https://postcard.page" target="_blank">Postcard</a>.
    </p>
    <ul>
      <li v-for="policy in policies" :key="policy.slug">
        <nuxt-link :to="`/policies/${policy.slug}`">
          {{ policy.title }}
        </nuxt-link>
      </li>
    </ul>
    <p class="text-xs pt-8">
      Adapted from the
      <a
        href="https://github.com/basecamp/policies"
        target="_blank"
        rel="nofollow noreferrer"
      >Basecamp open-source policies</a>
      /
      <a
        target="_blank"
        href="https://creativecommons.org/licenses/by/4.0/"
        rel="nofollow noreferrer"
      >CC BY 4.0</a>
    </p>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const policies = await $content('policies')
      .only(['title', 'slug', 'order', 'description'])
      .sortBy('number', 'asc')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return {
      policies
    }
  },
  head () {
    const title = 'Policies, Terms, and Privacy'
    const description = 'These policies and terms apply to all products built and maintained by Contraption Co. LLC.'

    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: description
        }
      ]
    }
  }
}
</script>
