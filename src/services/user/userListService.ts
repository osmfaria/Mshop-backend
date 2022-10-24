import { User } from '@prisma/client'
import { prismaClient } from '../../database/prismaClient'
import { exclude } from '../../functions/excludePassword'

const userListService = async (): Promise<Omit<User[], 'password'>> => {
  const users = await prismaClient.user.findMany()

  users.map(user => exclude(user, 'password'))

  return users
}

export default userListService
