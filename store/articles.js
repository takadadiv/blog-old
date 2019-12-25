import client from '~/plugins/contentful'

export const state = () => ({
  entries: []
})

export const mutations = {
  set(state, entries) {
    state.entries = entries
  }
}

export const actions = {
  async getAll({ commit }) {
    console.log('get from contentful: all articles')

    const res = await client.getEntries({
      content_type: 'article'
    })

    commit('set', res.items)
  }
}
