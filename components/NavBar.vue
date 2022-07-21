<template>
  <header class="py-10">
    <div class="container">
      <nav class="relative z-50 flex justify-between items-center">
        <nuxt-link aria-label="Home" to="/" @click.native="menuOpen = false">
          <wordmark class="text-gray-050 fill-current w-40" />
        </nuxt-link>
        <div class="flex items-center md:gap-x-12">
          <div class="hidden md:flex md:gap-x-6 desktop-nav-links">
            <nuxt-link
              v-for="item in items"
              :key="item.name"
              :to="item.href"
              class="
                inline-block
                py-1
                px-2
                text-sm text-gray-100
                hover:text-gray-050 hover:accent-underline
              "
            >
              {{ item.name }}
            </nuxt-link>
          </div>
        </div>
        <div class="flex items-center gap-x-5 md:gap-x-8">
          <a class="btn btn-primary" href="/#">
            <span>Contact <span class="hidden sm:inline">us </span> → </span>
          </a>
          <div class="-mr-1 md:hidden">
            <div>
              <button
                class="
                  relative
                  z-10
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  [&amp;:not(:focus-visible)]:focus:outline-none
                  font-semibold
                "
                aria-label="Toggle Navigation"
                type="button"
                aria-expanded="false"
                @click="menuOpen = !menuOpen"
              >
                <svg
                  v-if="menuOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  class="
                    h-6
                    w-6
                    overflow-visible
                    stroke-gray-100
                    fill-current
                    hover:stroke-gray-050
                  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  class="
                    h-6
                    w-6
                    overflow-visible
                    stroke-gray-100
                    fill-current
                    hover:stroke-gray-050
                  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="{2}"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!-- mobile menu -->
    <div v-if="menuOpen" class="container">
      <div
        class="
          container
          rounded-md
          flex flex-col
          md:hidden
          items-stretch
          gap-y-2
          mt-6
          py-2
          bg-gray-900
          mobile-nav-links
        "
      >
        <nuxt-link
          v-for="item in items"
          :key="item.name"
          :to="item.href"
          class="
            inline-block
            text-sm text-gray-100
            hover:text-gray-050 hover:bg-gray-800
            py-3
            rounded-md
          "
          @click.native="menuOpen = false"
        >
          <div class="container">
            {{ item.name }}
          </div>
        </nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
import Wordmark from '~/assets/logo/wordmark.svg?inline'

export default {
  components: { Wordmark },
  data () {
    return {
      menuOpen: false,
      items: [
        {
          name: 'About',
          href: '/about'
        },
        {
          name: 'Collabs',
          href: '/collabs'
        },
        {
          name: 'Projects',
          href: '/projects'
        }
      ]
    }
  }
}
</script>

<style scoped>
.desktop-nav-links .nuxt-link-active {
  @apply text-gray-050;
  text-decoration: underline;
  text-decoration-color: #4d3df7;
}

.mobile-nav-links .nuxt-link-active {
  @apply text-gray-050;
  @apply bg-gray-800;
}
</style>
