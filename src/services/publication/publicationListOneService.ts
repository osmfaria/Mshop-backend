import { Publication } from '@prisma/client'
import { prismaClient } from '../../database/prismaClient'
import { AppError } from '../../../errors/appError'

const publicationsListOneService = async (id: string) => {
  const publication = await prismaClient.publication.findUnique({
    where: {
      id: id,
    },
    include: {
      Image: {
        select: {
          id: true,
          link: true,
        },
      },
      user: {
        select: {
          name: true,
          description: true,
        },
      },
    },
  })

  if (!publication) {
    throw new AppError('Publication not found', 404)
  }

  return publication
}

export default publicationsListOneService
