export const state = () => ({
  books: [],
  book: {}
})

export const mutations = {
  set_books(state, books) {
    state.books = books
  }
}

export const getters = {
  books: state => state.books
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
  }
}
