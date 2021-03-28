export const state = () => ({
  userBooks: [],
  userBooksError: null
})

export const mutations = {
  set_user_books(state, books) {
    state.userBooks = books
  },
  set_user_booksError(state, err) {
    state.userBooksError = err
  },
  set_delete_userBooks(state, id) {
    let index = state.userBooks.findIndex(b => b._id == id)
    state.userBooks.splice(index, 1)
  }
}

export const getters = {
  getBook: ( state ) => state.userBooks
}

export const actions = {
  async setBooksForUser( { commit }, { idUser , idBook } ){
    try{
      const res = await this.$axios.post(`/users`, { idUser: idUser, bookId: idBook })
      return res
    }catch(err) {
      commit('set_user_booksError', err)
    }
  },
  async getUserBooks({commit}, idUser) {
    try {
      const res = await this.$axios.get(`/users/${idUser}`)
      if(res.data.success) {
        commit('set_user_books', res.data.subject)
      }
    }catch (err) {
      commit('set_user_booksError', err)
    }
  },
  async deleteUserBooks({commit}, { idUser, bookID }) {
    try {
      const res = await this.$axios.put('/users/', {
        userId: idUser,
        bookId: bookID
      })
      if (res.data.success) {
        commit('set_delete_userBooks', res.data.subject)
      }else{
        commit('set_user_booksError', err)
      }
      return res
    }catch (err) {
      commit('set_user_booksError', err)
    }
  }
}
