import {editMutation} from '@/utils/store-utils';

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
  },
  delete_book(state, book) {
    state.books = book
  }
}

export const getters = {
  books: (state) => state.books,
  get: state => id => {
    return state.books.find(b => b._id == id) || {}
  }
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
  async BookEdit({commit}, book) {
    const res = await this.$axios.put(`/home-page/books/update/${book._id}`, book)
    if (res.data.success) {
      const book = res.data.subject
      commit('edit_book', book)
    }
    return res
  },
  // #### DELETE BOOK
  async deleteBook({commit}, bookId) {
    const res = await this.$axios.delete(`/home-page/books/delete/${bookId}`)
    if (res.data.success) {
      commit('delete_book', res.data.subject)
    }
    return res
  },
  // #### ADD NEW BOOK
  async addNewBook({commit}, book) {
    const res = await this.$axios.post('/home-page/books/add', book)
    if (res.data.success) {
      commit('set_books', book)
    }
    return res
  }
}
