/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: 'http://localhost:5001/api/:slug*' // Proxy to Backend
      }
    ]
  }
}