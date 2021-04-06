<template>
  <div>
    <v-rating
      v-model="bookRating"
      color="pink"
      background-color="pink lighten-3"
      empty-icon="$ratingFull"
      half-increments
      hover
      readonly
      large
    ></v-rating>
  </div>
</template>

<script>
  export default {
    props: ['bookRating']
  }
</script>

<style lang="scss" scoped>

</style>