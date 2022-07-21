<template>
  <div>Projects</div>
</template>

<script>
export default {
  head () {
    const title = 'Projects'
    const description = 'Projects created by the Contraption Co.'

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
