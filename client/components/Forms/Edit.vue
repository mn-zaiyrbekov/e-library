<template>
  <v-form
    lazy-validation
  >
    <v-text-field
      class="my-5"
      label="Заголовок"
      hide-details="auto"
      v-model="book.title"
      required
    ></v-text-field>

    <v-textarea
      class="my-5"
      label="Описание"
      v-model="book.description"
      required
    ></v-textarea>
    <v-text-field
      class="my-5"
      label="Автор книги"
      hide-details="auto"
      v-model="book.bookAuthor"
      required
    ></v-text-field>

    <v-text-field
      class="my-5"
      label="Жанр"
      hide-details="auto"
      v-model="book.bookGenre"
      required
    ></v-text-field>

    <v-text-field
      class="my-5"
      label="Ссылка книги"
      hide-details="auto"
      v-model="book.bookLink"
      required
    ></v-text-field>

    <v-text-field
      class="my-5"
      label="Ссылка на картинку"
      hide-details="auto"
      v-model="book.bookImage"
      required
    ></v-text-field>

    <v-text-field
      class="my-5"
      label="Год"
      hide-details="auto"
      v-model="book.bookYear"
      required
    ></v-text-field>
    <v-btn
      color="blue-grey"
      class="mt-2 ml-0 white--text"
      @click="saveBook"
    >
      Редактировать
      <v-icon
        right
        dark
      >
        mdi-cloud-upload
      </v-icon>
    </v-btn>
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

<style scoped>

</style>