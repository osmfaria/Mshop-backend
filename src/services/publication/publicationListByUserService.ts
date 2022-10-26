import { AppError } from '../../../errors/appError'
import { prismaClient } from '../../database/prismaClient'
import { paginateOutput } from '../../functions/paginateOutput'

const publicationListByUserService = async (
  userId: string,
  page: number,
  limit: number
) => {
  const user = await prismaClient.user.findUnique({
    where: {
      id: userId,
    },
  })

  if (!user) {
    throw new AppError('User not found', 404)
  }

  const publications = await prismaClient.publication.findMany({
    where: {
      userId,
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
      Image: {
        select: {
          link: true,
        },
      },
    },
    take: limit,
    skip: (page - 1) * limit,
  })

  const count = await prismaClient.publication.count({
    where: {
      userId,
    },
  })
  const pagesIndex = paginateOutput(
    count,
    page,
    limit,
    `publications/users/${userId}`
  )

  return { ...pagesIndex, results: publications }
}

export default publicationListByUserService
