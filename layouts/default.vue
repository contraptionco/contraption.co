<template>
  <div
    class="
      antialiased
      scroll-smooth
      overflow-hidden
      font-sans
      text-gray-100
      bg-gray-950
      gray-100
      min-h-screen
      flex flex-col
    "
  >
    <NavBar />
    <main
      class="
        container
        flex-grow flex flex-col
        items-stretch
        justify-items-stretch
      "
    >
      <nuxt />
    </main>
    <div class="header-spacer" />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header-spacer {
  height: 116px;
}
</style>
