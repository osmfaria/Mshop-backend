import { prismaClient } from '../../database/prismaClient'
import { paginateOutput } from '../../functions/paginateOutput'
import { IPublicationResponse } from '../../interfaces/publicationInterface'

const publicationsListService = async (
  page: number,
  limit: number
): Promise<IPublicationResponse> => {
  const publications = await prismaClient.publication.findMany({
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
        },
      },
    },
    take: limit,
    skip: (page - 1) * limit,
  })

  const count = await prismaClient.publication.count()
  const pagesIndex = paginateOutput(count, page, limit, 'publications')

  return { ...pagesIndex, results: publications }
}

export default publicationsListService
