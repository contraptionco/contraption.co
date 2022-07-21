<template>
  <div>About</div>
</template>
<script>
export default {
  head () {
    const title = 'About'

    return {
      title,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: title
        }
      ]
    }
  }
}
</script>
