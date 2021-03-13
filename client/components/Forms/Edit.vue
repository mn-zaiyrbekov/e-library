<template>
  <v-form>
    <v-text-field
      label="Заголовок"
      hide-details="auto"
      v-model="book.title"
    ></v-text-field>
    <v-textarea
      clearable
      clear-icon="mdi-close-circle"
      label="Описание"
      v-model="book.description"
    ></v-textarea>
    <v-text-field
      label="Автор книги"
      hide-details="auto"
      v-model="book.bookAuthor"
    ></v-text-field>
    <v-text-field
      label="Жанр"
      hide-details="auto"
      v-model="book.bookGenre"
    ></v-text-field>
    <v-text-field
      label="Ссылка книги"
      hide-details="auto"
      v-model="book.bookLink"
    ></v-text-field>
    <v-text-field
      label="Ссылка на картинку"
      hide-details="auto"
      v-model="book.bookImage"
    ></v-text-field>
    <v-text-field
      label="Год"
      hide-details="auto"
      v-model="book.bookYear"
    ></v-text-field>
    <v-btn @click="saveBook">Редактировать</v-btn>
  </v-form>
</template>

<script>
  export default {
    name: 'EditForm',
    props: {
      book: {
        type: Object
      },
      saveBook: {
        type: Function
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>