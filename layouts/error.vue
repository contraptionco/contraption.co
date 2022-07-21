<template>
  <div class="flex-grow flex flex-col justify-center w-full container">
    <div class="py-16">
      <div class="text-center">
        <p class="text-sm font-semibold text-accent uppercase tracking-wide">
          {{ error.statusCode }} error
        </p>
        <h1
          class="
            mt-2
            text-3xl
            font-semibold
            text-gray-075
            tracking-tight
            sm:text-4xl
          "
        >
          Page not found.
        </h1>
        <div class="mt-6">
          <nuxt-link
            to="/"
            class="text-base font-medium text-indigo-600 hover:text-indigo-500 hover:accent-underline"
          >
            Go back home<span aria-hidden="true"> &rarr;</span></a
            >
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  props: { error: { type: Object, required: true } } // you can set a custom layout for the error page
}
</script>
