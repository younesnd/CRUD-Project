import fs from 'fs/promises'
import path from 'path'
import { FastifyReply, FastifyRequest } from 'fastify'
import { nanoid } from 'nanoid'
import usersExpOriginal from './usersExpOriginals.json'


const usersExpFilePath = path.resolve(
  __dirname,
  '/home/younesnd/react-the-road-to-enterprise/server/src/features/usersExp/usersExp.json'
)

const sleep = (time = 3000) =>
  new Promise((resolve) => setTimeout(resolve, time))
type UsersExpData =Array<{
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: string;
}>


const readUsersExp = async () => { 
   const usersExpBuffer = await fs.readFile(usersExpFilePath)
    return JSON.parse(usersExpBuffer.toString()) as UsersExpData // deserializes a JSON string into a JavaScript object
}

const writeUsersExp = async (data: UsersExpData) => {
  // create a JSON string out of an object or array;
  return fs.writeFile(usersExpFilePath, JSON.stringify(data), 'utf-8')
}

type GetUser = {
  Querystring: {
    email?: string
  }
}

export const getUserExp = async (  request: FastifyRequest<GetUser>,  reply: FastifyReply) => {

  const { email } = request.query
  if (!email) throw new Error('Please Provide email :')
  await sleep()
  const users = await readUsersExp()
  console.log('users', users)
  const user = users.find((user) => user.email === email)
  return { user }
}

const getUsersExpByPage = async (page: number, limit: number) => {
  const offset = page * limit 
  const endIndex = offset + limit
  const UsersExpRead = await readUsersExp()
  const UsersExp = UsersExpRead.slice(offset, endIndex)
  return UsersExp
}

type GetUsersExp = {
  Querystring: {
    page?: number | null
  }
}

export const getUsersExp = async (request: FastifyRequest<GetUsersExp>, reply: FastifyReply) => {
  const { page } = request.query
  if (!page)
    throw new Error(
      'Missing parameters. Please provide page parameter in the request params'
    )
  await sleep()
  const limit = 5
  return getUsersExpByPage(page, limit)
}

type RegisterUser = {
  Body: {
    name: string
    email: string
    address: string
    phone: string
    website: string
    company: string
  }
}
export const registerUsersExpSchema = {
  body: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
      address: {
        type: 'string',
      },
      phone: {
        type: 'string',
      },
      website: {
        type: 'string',
      },
      company: {
        type: 'string',
      },
    },
    required: ['name', 'email', 'address', 'phone', 'website', 'company'],
  },
}

export const registerUsersExp = async (request: FastifyRequest<RegisterUser>, reply: FastifyReply) => {

  const { name, email, address, phone, website, company } = request.body
  await sleep()
  const newUser = {
    id: nanoid(),
    name,
    email,
    address,
    phone,
    website,
    company,
  }

  const users = await readUsersExp()
  users.push(newUser)
  await writeUsersExp(users)
}

export const resetUsersExp = async ( request: FastifyRequest,  reply: FastifyReply) => {
  await sleep()
  await writeUsersExp(usersExpOriginal)
  return true
}

type DeleteUser = {
  Params: {
    id: string
  }
}
export const deletUsersExp = async (request: FastifyRequest<DeleteUser>, reply: FastifyReply) => {
  const { id } = request.params

  if (!id) throw new Error('User id is required')

  //await sleep()
  const users = await readUsersExp()
  const updatedUsers = users.filter((_user) => _user.id !== id)
  await writeUsersExp(updatedUsers)
  return true
}
