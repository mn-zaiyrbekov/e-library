export const state = () => ({
  books: [],
  booksErrors: null,
  book: {},
  booksStatus: '',
  booksRatingError: null
})

export const getters = {
  getBooks: ( state ) => state.books,
  getOneBook: ( state ) => state.book
}

export const mutations = {
  set_books(state, books) {
    state.books = books
  },
  set_booksErrors(state, error) {
    state.booksErrors = error
  },
  set_one_book(state, book) {
    state.book = book
  },
  set_one_errors(state, err) {
    state.booksErrors = err
  },
  set_delete_books(state, id) {
    let index = state.books.findIndex(b => b._id == id)
    state.books.splice(index, 1)
  },
  // set_book_rating(state, rating) {
  //   state.books
  // },
  // set_book_rating_error(state, err) {
  //   state.booksRatingError = err
  // }
}

export const actions = {
  async getAllBooks( { commit }, { limit } ) {
    try{
      const res = await this.$axios.get('/books/', {
        params: {
          limits: limit
        }
      })
      if(res.data.success) {
        commit('set_books', res.data.subject)
      }
      return res
    }catch(err) {
      commit('set_booksErrors', err)
    }
  },
  async getOneBook( { commit }, { id } ) {
    try{
      const res = await this.$axios.get(`/books/${id}`)
      if(res.data.success) {
        commit('set_one_book', res.data.subject)
      }
      return res
    }catch(err) {
      commit('set_one_errors', err)
    }
  },
  async editBookById( { commit }, { id, book } ) {
    try{
      const res = await this.$axios.put(`/books/${id}`, book )
      if(res.data.success) {
        commit('set_books', res.data.subject)
      }
      return res
    }catch(err) {
      commit('set_booksErrors', err)
    }
  },
  async deleteBookById( { commit }, { id } ) {
    try {
      const res = await this.$axios.delete(`/books/${id}`)
      if(res.data.success) {
        commit('set_delete_books', res.data.subject)
      }
      return res
    }catch (err) {
      commit('set_booksErrors', err)
    }
  },
  async setBookRating( { commit }, { bookId, rating } ) {
    try{
      const res = await this.$axios.post(`/books/book/rating/${bookId}`, { 
        rating: rating
       } )
      // return res
      // if (rating.data.success) {
      //   commit('set_book_rating', res.subject)
      // }
    }catch(e) {
      // commit('set_book_rating_error', e)
    }
  }
}


