<template>
  <v-navigation-drawer
    class="blue darken-4"
    v-model="drawerState"
    :clipped="clipped"
    fixed
    app
    dark
  >
    <v-list>
      <v-list-item
        router
        exact
        to="/"
      >
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Главная</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        router
        exact
        to="/books"
      >
        <v-list-item-action>
          <v-icon>mdi-bookshelf</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Книги</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        router
        exact
        to="/mybooks"
        v-if="$auth.user"
      >
        <v-list-item-action>
          <v-icon>mdi-book-settings</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Мои книги</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'LeftBar',
  props: {
    clipped: { type: Boolean, default: false },
    drawer: { type: Boolean, default: false }
  },
  data() {
    return {
      drawerState: this.drawer
    }
  },
  watch: {
    drawer() {
      this.drawerState = !this.drawerState
    }
  }
}
</script>

<style>

</style>
