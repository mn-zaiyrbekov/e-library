<template>
  <v-app id="inspire">
    <v-navigation-drawer
      app
      class="pt-1 brown"
    >
      <v-list
        dark
      >
        <v-list-item
          v-for="[icon, text, url] in links"
          :key="icon"
          link
          :to="url"
          exact
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
      <v-app-bar
        class="brown"
        fixed
        app
        dark
      >
        <v-btn class="ml-auto indigo" to="/">На главную</v-btn>
      </v-app-bar>
    <v-main class="pt-8 mt-4">
      <v-container
        class="py-8 px-6"
        fluid
      >
       <nuxt />
        <div class="c-button">
          <v-btn
            class="mx-2"
            fab
            dark
            color="brown"
            to="/admin/books/add"
          >
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
export default {
  middleware: ['admin-auth'],
  data: () => ({
    drawer: null,
    links: [
      ['mdi-home', 'Главная', '/admin'],
      ['mdi-bookshelf', 'Раздел книги', '/admin/books'],
      ['mdi-book-check', 'Жанры', '/admin/genre'],
      ['mdi-account', 'Пользователи', '/admin/users']
    ],
  }),
  head() {
    return {
      title: 'Страница администратора'
    }
  }
}
</script>

<style scoped>
.c-button{
  position: fixed;
  right: 5%;
  bottom: 40px;
}
</style>