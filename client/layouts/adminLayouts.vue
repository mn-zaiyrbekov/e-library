<template>
  <v-app id="inspire">
    <v-navigation-drawer
      app
      class="pt-5 indigo"
    >
      <v-sheet
        color="indigo"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="teal lighten-3"
          size="64"
        ></v-avatar>
        <div class="white--text">john@vuetifyjs.com</div>
      </v-sheet>
      <v-list
        dark
      >
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="pt-5">
      <v-container
        class="py-8 px-6"
        fluid
      >
       <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      ['mdi-inbox-arrow-down', 'Inbox'],
      ['mdi-send', 'Send'],
      ['mdi-delete', 'Trash'],
      ['mdi-alert-octagon', 'Spam'],
    ],
  }),
}
</script>

<style scoped>

</style>