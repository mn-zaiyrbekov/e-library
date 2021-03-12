<template>
  <v-row>
    <v-col
      cols="12"
    >
      <v-card class="blue lighten-4">
        <v-subheader>Subheader</v-subheader>
        <v-list two-line class="teal">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="white--text">Message </v-list-item-title>
              <v-list-item-subtitle class="white--text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {  
    layout: 'adminLayouts',
    // middleware: 'auth-admin',
  }
</script>

<style lang="scss" scoped>

</style>