export default async ({ store }) => {
  if (store.state.articles.entries.length === 0) {
    await store.dispatch('articles/getAll')
  }
}
