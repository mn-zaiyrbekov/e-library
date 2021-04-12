export const state = () => ({
  // ######### For counting Books By Genre
  // counting: [],
  // countingError: null
  bookOneGenre: {},
  bookOneGenreError: null,
})

export const getters = {
  // ######### For counting Books By Genre
  // getAllCounting: ( state ) => state.counting
  getOneBookGenre: ( state ) => state.bookOneGenre,
}

export const mutations = {
  // ######### For counting Books By Genre
  // set_counting(state, count) {
  //   state.counting = count
  // },
  // set_counting_error(state, err) {
  //   state.countingError = err
  // }
  set_one_book_genre(state, genre) {
    state.bookOneGenre = genre
  },
  set_book_one_genre_error(state, error) {
    state.bookOneGenreError = error
  },
}

export const actions = {
  // ######### For counting Books By Genre
  // async countGenreBooks( { commit }, { idGenre } ) {
  //   try{
  //     const res = await this.$axios.post('/booksgenre/count', )
  //     if (res.data.success) {
  //       commit('set_counting', res.data.counting)
  //     }else{
  //       commit('set_counting_error', res.data.error)
  //     }
  //   }catch(e) {
  //     commit('set_counting_error', e)
  //   }
  // }

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
}