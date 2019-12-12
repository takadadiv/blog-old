import client from '../plugins/contentful'

const pages = [
  {
    route: 'articles', // Nuxt.jsでのルート名
    req: { // Contentfulへのリクエスト
      content_type: 'article'
    }
  }
]

export default {
  async routes() {
    const responses = await Promise.all(pages.map(page => {
      return client.getEntries(page.req)
    }))

    const routes = []

    responses.forEach((res, i) => {
      res.items.forEach(item => {
        routes.push({
          route: `/${pages[i].route}/${item.sys.id}`,
          payload: item
        })
      })
    })

    return routes
  }
}
