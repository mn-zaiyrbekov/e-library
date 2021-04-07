export const state = () => ({
  books: [],
  booksErrors: null,
  book: {},
  booksRatingError: null,
  booksGenreError: null,
  bookGenre: [],
  bookOneGenre: {},
  bookOneGenreError: null,
  booksByGenre: [],
  bookByGenreError: null
})

export const getters = {
  getBooks: ( state ) => state.books,
  getOneBook: ( state ) => state.book,
  getBookGenre: ( state ) => state.bookGenre,
  getOneBookGenre: ( state ) => state.bookOneGenre,
  getBooksByGenre: ( state ) => state.booksByGenre
}

export const mutations = {
  set_books(state, books) {
    state.books = books
  },
  set_booksErrors(state, error) {
    state.booksErrors = error
  },
  // ONE BOOKS
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
  set_book_rating_error(state, err) {
    state.booksRatingError = err
  },
  // Books Genre
  set_books_genre(state, bookGenre ) {
    state.bookGenre = bookGenre
  },
  set_book_genre_error(state, error) {
    state.booksGenreError = error
  },
  set_book_genre_byId(state, genre) {
    state.bookOneGenre = genre
  },
  set_one_book_genre(state, genre) {
    state.bookOneGenre = genre
  },
  set_book_one_genre_error(state, error) {
    state.bookOneGenreError = error
  },
  set_book_by_genre(state, books) {
    state.booksByGenre = books
  },
  set_book_by_genre_error(state, error) {
    state.bookByGenreError = error
  }
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
    }catch(e) {
      commit('set_book_rating_error', e)
    }
  },
  async getAllGenreBooks( { commit } ) {
    try{
      const response = await this.$axios.get('/booksgenre')
      if(response.data.success) {
        commit('set_books_genre', response.data.subject)
      }else{
        commit('set_book_genre_error', response.error)
      }
    }catch(e) {
      commit('set_book_genre_error', e)
    }
  },
  async getOneGenreBook( { commit }, { idGenre }) {
    try{
      const response = await this.$axios.get(`/booksgenre/${idGenre}`)
      if(response.data.success) {
        commit('set_one_book_genre', response.data.subject)
      }else{
        commit('set_book_one_genre_error', response.error)
      }
    }catch(e) {
      commit('set_book_one_genre_error', e)
    }
  },
  async getBookByGenre( { commit }, { idGenre } ) {
    try{
      const books = await this.$axios.get(`/books/genre/${idGenre}`)
      if (books.data.success) {
        commit('set_book_by_genre', books.data.subject)
      }else{
        commit('set_book_by_genre_error', books.data.error)
      }
    }catch(e) {
      commit('set_book_by_genre_error', e)
    }
  }
}


