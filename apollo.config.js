/* eslint-disable */
require('dotenv').config()

module.exports = {
  client: {
    service: {
      name: 'api',
      url:
        process.env.INTROSPECTION_URL || process.env.REACT_APP_API_URL || 'http://localhost:4000',
    },
  },
}
