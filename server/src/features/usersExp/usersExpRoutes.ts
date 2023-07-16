import { FastifyInstance, FastifyPluginOptions, HookHandlerDoneFunction } from 'fastify'

import { getUsersExp, getUserExp, registerUsersExp, registerUsersExpSchema, resetUsersExp, deletUsersExp } from './usersExpController'

function userRoutes(fastify: FastifyInstance, opts: FastifyPluginOptions, done: HookHandlerDoneFunction) {
    fastify.get('/', getUserExp)
    fastify.get('/all', getUsersExp)
    fastify.post('/', { schema: registerUsersExpSchema }, registerUsersExp)
    fastify.post('/reset', resetUsersExp)
    fastify.delete('/:id', deletUsersExp)
    done()
}

export default userRoutes
