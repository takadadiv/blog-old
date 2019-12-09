const contentful = require('contentful')

if (!process.env.CTF_SPACE_ID) {
  require('dotenv').config()
}

const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
}

export default contentful.createClient(config)
