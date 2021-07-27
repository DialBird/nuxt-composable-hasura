require('dotenv').config()

module.exports = {
  overwrite: true,
  schema: [
    {
      [process.env.GRAPHQL_ENDPOINT]: {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_SECRET,
        },
      },
    },
  ],
  documents: ['./src/**/*.{graphql,gql}'],
  generates: {
    './src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}
