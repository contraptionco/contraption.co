<template>
  <div>Collabs</div>
</template>
<script>
export default {
  head () {
    const title = 'Collabs'
    const description = 'Collaborations by the Contraption Co.'

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
