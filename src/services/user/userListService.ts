import { prismaClient } from '../../database/prismaClient'
import { exclude } from '../../functions/excludePassword'
import { paginateOutput } from '../../functions/paginateOutput'
import { IUserResponse } from '../../interfaces/userInterface'

const userListService = async (
  page: number,
  limit: number
): Promise<IUserResponse> => {
  const users = await prismaClient.user.findMany({
    take: limit,
    skip: (page - 1) * limit,
  })

  users.map((user) => exclude(user, 'password'))

  const count = await prismaClient.user.count()
  const pagesIndex = paginateOutput(count, page, limit, 'users')

  return { ...pagesIndex, results: users }
}

export default userListService
