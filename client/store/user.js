export const state = () => ({
  userBooks: [],
  userBooksError: ''
})

export const mutations = {
  set_userBooks(state, book) {
    state.userBooks = book
  },
  set_userBookError(state, err) {
    state.userBooksError = err
  },
  delete_userBooks(state, id) {
    const index = state.userBooks.findIndex(b => b.id == id)
    state.userBooks.splice(index, 1)
  }
}

export const getters = {
  userBooks: ( state ) => state.userBooks
}

export const actions = {
  // #### ADD BOOK FOR USER
  async insertUserBook({commit}, book) {
    try{
      const res = await this.$axios.post('/home-page/books/addUserBooks', { id: this.$auth.user._id, bookId: book })
      if (res.data.success) {
        commit('set_userBooks', res.data.subject)
      }else{
        commit('set_userBookError', err)
      }
      return res
    }catch(err) {
      commit('set_userBookError', err)
    }
  },

  // #### GET USER BOOKS
  getUserBooks({commit}, idUser) {
    try{
      this.$axios.get(`/home-page/books/getUserbooks/${idUser}`)
      .then(res => {
        if (res.data.success) {
          commit('set_userBooks', res.data.subject)
        }
      }).catch(err => {
        commit('set_userBookError', err)
      })
    }catch(err) {
      commit('set_userBookError', res.data.error)
    }
  },
  // #### DELETE USER BOOKS
  async deleteUserBooks( { commit }, { idUser, bookID }) {
    try{
      const res = await this.$axios.put(`/home-page/books/deleteUserbooks`, {
        userId: idUser,
        bookId: bookID
      })
      if (res.data.success) {
        commit('delete_userBooks', res.data.subject._id)
      }else{
        commit('set_userBookError', err)
      }
      return res
    }catch(err) {
      commit('set_userBookError', err)
    }
  }
}
