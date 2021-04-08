<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-card-text>
        <p class="text--primary subtitle">
          <v-icon class="mr-2">mdi-star-box</v-icon>
          {{name}}
        </p>
        <p>Количество книг в данном жанре [ 20 ]</p>
        <div class="text--primary">
          well meaning and kindly.<br>
          "a benevolent smile"
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'genrecards',
  layout: 'adminlayout',
  props: {
    name: { type: String },
    idGenre: { type: String }
  }
}
</script>

<style scoped>

</style>