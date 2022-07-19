<template>
  <header class="py-10">
    <div class="container">
      <nav class="relative z-50 flex justify-between">
        <div class="flex items-center md:gap-x-12">
          <a aria-label="Home" href="/">
            <wordmark class="text-gray-050 fill-current w-40" />
          </a>
          <div class="hidden md:flex md:gap-x-6">
            <a
              class="
                inline-block
                rounded-lg
                py-1
                px-2
                text-sm text-gray-700
                hover:bg-gray-100 hover:text-gray-900
              "
              href="/#features"
              >Features
            </a>
            <a
              class="
                inline-block
                rounded-lg
                py-1
                px-2
                text-sm text-gray-700
                hover:bg-gray-100 hover:text-gray-900
              "
              href="/#testimonials"
              >Testimonials
            </a>
            <a
              class="
                inline-block
                rounded-lg
                py-1
                px-2
                text-sm text-gray-700
                hover:bg-gray-100 hover:text-gray-900
              "
              href="/#pricing"
              >Pricing
            </a>
          </div>
        </div>
        <div class="flex items-center gap-x-5 md:gap-x-8">
          <a class="btn btn-primary" href="/register">
            <span>Contact us → </span>
          </a>
          <div class="-mr-1 md:hidden">
            <div>
              <button
                id="headlessui-popover-button-:R1p6:"
                class="
                  relative
                  z-10
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  [&amp;:not(:focus-visible)]:focus:outline-none
                "
                aria-label="Toggle Navigation"
                type="button"
                aria-expanded="false"
              >
                <svg
                  aria-hidden="true"
                  class="h-3.5 w-3.5 overflow-visible stroke-gray-700"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                >
                  <path
                    d="M0 1H14M0 7H14M0 13H14"
                    class="origin-center transition"
                  />
                  <path
                    d="M2 2L12 12M12 2L2 12"
                    class="origin-center transition scale-90 opacity-0"
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
  components: { Wordmark }
}
</script>
