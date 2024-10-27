import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { Application, json } from 'express'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { carTypeDefs } from '../graphql/typeDefs/car.typeDef'
import { carResolver } from '../graphql/resolvers/car.resolver'
import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground'
import cors from 'cors'

export async function startApolloServer(app: Application) {
  const typeDefs = [carTypeDefs]
  const resolvers = [carResolver]

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  })

  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
  })

  await apolloServer.start()

  app.use(
    '/graphql',
    json(),
    cors<cors.CorsRequest>(),
    expressMiddleware(apolloServer)
  )
}
