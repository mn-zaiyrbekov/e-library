import { editMutation } from '@/utils/store-utils'

export const state = () => ({
  books: [],
  book: {},
  booksError: '',
  bookError: ''
})

export const mutations = {
  set_books(state, books) {
    state.books = books
  },
  set_book(state, book) {
    state.book = book
  },
  set_booksError(state, err) {
    state.booksError = err
  },
  edit_book(state, book) {
    editMutation(state.books, book)
  },
  delete_book(state, book) {
    state.books = book
  }
}

export const getters = {
  books: ( state ) => state.books,
  get: state => id => {
    return state.books.find(b => b._id == id) || {}
  }
}

export const actions = {
  // #### GET ALL BOOKS
  getBooks({commit}, config) {
    try{
      this.$axios.get(`/home-page/books`, config) 
      .then(res => {
        if (res.data.success) {
          const books = res.data.subject
          commit('set_books', books)
        }
        return res
      })
      .catch(err => { commit('set_booksError', err) })
    }catch(err) {
      commit('set_booksError', err)
    }
  },
  // #### GET ONE BOOK
  getBook({commit}, {bookId}) {
    try{
      this.$axios.get(`/home-page/books/${bookId}`)
      .then(res => {
        if (res.data.success) {
          const book = res.data.subject
          commit('set_book', book)
        }
        return res
      })
      .catch(err => { commit('set_bookError', err) })
    }catch(err) {
      commit('set_bookError', err)
    }
  },
  // #### UPDATE BOOK
  BookEdit({commit}, book) {
    try{
      this.$axios.put(`/home-page/books/update/${book._id}`, book)
      .then(res => {
        if (res.data.success) {
          const book = res.data.subject
          commit('edit_book', book)
        }
        return res
      })
      .catch(err => { commit('set_booksError', err) })
    }catch(err) {
      commit('set_bookError', err)
    }
  },

  // #### DELETE BOOK
  deleteBook({commit}, bookId) {
    try{
      this.$axios.delete(`/home-page/books/delete/${bookId}`)
      .then(res => {
        if (res.data.success) {
          commit('delete_book', res.data.subject.message)
        }
        return res
      })
      .catch(err => { commit('set_booksError', err) })
    }catch(err) {
      commit('set_booksError', err)
    }
  },

  // #### ADD NEW BOOK
  addNewBook({commit}, book) {
    try{
      this.$axios.post('/home-page/books/add', book)
      .then(res => {
        if (res.data.success) {
          commit('set_books', book)
        }
        return res
      })
      .catch(err => { commit('set_booksError', err) })
    }catch(err) {
      commit('set_booksError', err)
    }
  }
}
