<template>
  <div class="card bg-dark text-white border-0">
    <img
      class="card-img"
      src="https://source.unsplash.com/collection/460289/1600x900/?orientation=landscape"
      loading="lazy"
      alt="Quote Image"
      style="max-height: 200px; min-height: 200px; object-fit: cover; filter:brightness(40%);"
      crossorigin="anonymous"
    />
    <div class="card-img-overlay d-flex align-items-center px-xl-4">
      <div>
        <h5 class="h2 card-title text-white mb-2">Quote</h5>
        <div v-if="quote">
          <p class="card-text">
            {{ quote.content }}
          </p>
          <p class="card-text text-sm font-weight-bold">
            {{ quote.author }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quote',
  data() {
    return {
      quote: null
    }
  },
  created() {
    this.getQuote()
  },
  methods: {
    async getQuote() {
      const res = await this.$axios.$get(
        'https://api.quotable.io/random?maxLength=150'
      )
      this.quote = res
    }
  }
}
</script>

<style></style>
