<template>
  <v-overlay v-if="loading" :value="overlay" color="#000">
    <Logo />
  </v-overlay>
</template>

<script>
import Logo from '@/components/Globals/Logo.vue'
export default {
  components: { Logo },
  data: () => ({
    loading: false,
    value: 0,
  }),
  methods: {
    start() {
      this.loading = true
      this.overlay = true
    },
    finish() {
      this.loading = false
      this.overlay = false
    },
    fail(error) {
      console.log(error)
    },
    increase(num) {
      // console.log(num)
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 10
    }, 1000)
  },
}
</script>