<template>
  <v-card-actions>
    <v-rating
      v-model="bookRating"
      color="pink"
      background-color="pink lighten-3"
      empty-icon="$ratingFull"
      half-increments
      hover
      readonly
      small
    ></v-rating>
    <span>
      ( {{ bookRating }} )
    </span>
  </v-card-actions>
</template>

<script>
  export default {
    props: ['bookRating']
  }
</script>

<style lang="scss" scoped>

</style>