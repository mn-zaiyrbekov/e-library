import {editMutation} from '@/utils/store-utils';

export const state = () => ({
  books: [],
  book: {},
  booksError: null,
  bookError: null
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
    try{
      const res = await this.$axios.get(`/home-page/books`, {params: {limit: limit}})
      if (res.data.success) {
        const books = res.data.subject
        commit('set_books', books)
      }
      return res
    }catch(err) {
      commit('booksError', err)
    }
  },
  // #### GET ONE BOOK
  async getBook({commit}, {bookId}) {
    try{
      const res = await this.$axios.get(`/home-page/books/${bookId}`)
      if (res.data.success) {
        const book = res.data.subject
        commit('set_book', book)
      }
      return res
    }catch(err) {
      commit('bookError', err)
    }
  },
  // #### UPDATE BOOK
  async BookEdit({commit}, book) {
    try{
      const res = await this.$axios.put(`/home-page/books/update/${book._id}`, book)
      if (res.data.success) {
        const book = res.data.subject
        commit('edit_book', book)
      }
      return res
    }catch(err) {
      commit('booksError', err)
    }
  },
  // #### DELETE BOOK
  async deleteBook({commit}, bookId) {
    try{
      const res = await this.$axios.delete(`/home-page/books/delete/${bookId}`)
      if (res.data.success) {
        commit('delete_book', res.data.subject)
      }
      return res
    }catch(err) {
      commit('booksError', err)
    }
  },
  // #### ADD NEW BOOK
  async addNewBook({commit}, book) {
    try{
      const res = await this.$axios.post('/home-page/books/add', book)
      if (res.data.success) {
        commit('set_books', book)
      }
      return res
    }catch(err) {
      commit('booksError', err)
    }
  }
}
