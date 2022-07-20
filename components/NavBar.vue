<template>
  <header class="py-10">
    <div class="container">
      <nav class="relative z-50 flex justify-between items-center">
        <a aria-label="Home" href="/">
          <wordmark class="text-gray-050 fill-current w-40" />
        </a>
        <div class="flex items-center md:gap-x-12">
          <div class="hidden md:flex md:gap-x-6">
            <a
              v-for="item in items"
              :key="item.name"
              :href="item.href"
              class="
                inline-block
                py-1
                px-2
                text-sm text-gray-100
                hover:text-gray-050
              "
              >{{ item.name }}
            </a>
          </div>
        </div>
        <div class="flex items-center gap-x-5 md:gap-x-8">
          <a class="btn btn-primary" href="/#">
            <span>Contact us → </span>
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
              >
                <svg
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
  </header>
</template>

<script>
import Wordmark from '~/assets/logo/wordmark.svg?inline'

export default {
  components: { Wordmark },
  data () {
    return {
      items: [
        {
          name: 'About',
          href: '#'
        },
        {
          name: 'Collabs',
          href: '#'
        },
        {
          name: 'Projects',
          href: '#'
        }
      ]
    }
  }
}
</script>
