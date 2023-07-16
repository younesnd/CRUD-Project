import {
  FastifyInstance,
  FastifyPluginOptions,
  HookHandlerDoneFunction,
} from 'fastify'

function routes(
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
  done: HookHandlerDoneFunction
) {
  fastify.register(import('./features/quotes/quotesRoutes'), {
    prefix: '/quotes',
  })
  fastify.register(import('./features/user/userRoutes'), {
    prefix: '/user',
  })
  fastify.register(import('./features/usersExp/usersExpRoutes'), {
    prefix: '/usersExp',
  })
  done()
}

export default routes
