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
      
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                <v-list-item-icon>
                  <v-icon>mdi-bookshelf</v-icon>
                </v-list-item-icon>
                Книги
              </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(genre, key) in genre"
            :key="key"
            link
            :to="`/books/${genre._id}`"
            exact
          >
            <v-list-item-subtitle class="white--text">
              <v-icon class="mr-2">mdi-book-check-outline</v-icon>
              {{genre.name}}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list-group>
    
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
import { mapGetters, mapActions } from 'vuex'
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
  },
  computed: {
    ...mapGetters({
      genre: 'books/getBookGenre'
    })
  },
  methods: {
    ...mapActions({
      fetchGenre: 'books/getAllGenreBooks'
    })
  },
  created() {
    this.fetchGenre()
  }
}
</script>

<style>

</style>
