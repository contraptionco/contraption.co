<template>
  <footer
    class="
      container
      flex flex-col
      items-center
      py-10
      text-gray-300 text-xs
      justify-center
      gap-y-2
    "
  >
    <div>
      &copy; {{ new Date().getFullYear() }}
      <nuxt-link to="/" class="hover:accent-underline">
        Contraption Co. LLC
      </nuxt-link>. All rights reserved.
    </div>
    <div>
      <nuxt-link
        to="/policies"
        class="hover:accent-underline text-semibold text-gray-100"
      >
        Privacy and policies
      </nuxt-link>
    </div>
  </footer>
</template>
