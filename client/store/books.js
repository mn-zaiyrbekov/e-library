export const state = () => ({
  books: [],
  book: {}
})

export const mutations = {
  set_books(state, books) {
    state.books = books
  },
  set_book(state, book) {
    state.book = book
  },
  edit_book(state, book) {
    editMutation(state.books, book)
  }
}

export const getters = {
  books: state => state.books,
  book: state => state.book
}

export const actions = {
  // #### GET ALL BOOKS
  async getBooks({commit}, {limit}) {
    const res = await this.$axios.get(`/home-page/books`, {params: {limit: limit}})
    if (res.data.success) {
      const books = res.data.subject
      commit('set_books', books)
    }
    return res
  },
  // #### GET ONE BOOK
  async getBook({commit}, {bookId}) {
    const res = await this.$axios.get(`/home-page/books/${bookId}`)
    if (res.data.success) {
      const book = res.data.subject
      commit('set_book', book)
    }
    return res
  },
  // #### UPDATE BOOK
  async getBookEdit({commit}, {bookId}, book) {
    const res = await this.$axios.put(`/home-page/books/update/${bookId}`, book)
    if (res.data.success) {
      const book = res.data.subject
      commit('edit_book', book)
    }
    return res
  }
}
