module.exports = {
  client: {
    service: {
      name: 'movies-app',
      // URL to the GraphQL API
      url: meta.env.VITE_GRAPHQL_MOVIES_ENDPOINT,
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.ts',
    ],
  },
}