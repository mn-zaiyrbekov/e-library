<template>
  <v-card-title class="pink white--text">
    <v-icon class="mr-5 white--text">mdi-{{icon}}</v-icon>
    {{title}}
  </v-card-title>
</template>

<script>
  export default {
    name: 'vcardtitle',
    props: {
      title: { type: String },
      icon: { type: String, default: '' }
    }
  }
</script>

<style scoped>

</style>