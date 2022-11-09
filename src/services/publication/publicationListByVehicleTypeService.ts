import { Vehicle_Type } from '@prisma/client'
import { prismaClient } from '../../database/prismaClient'
import { paginateOutput } from '../../functions/paginateOutput'
import { IPublicationResponse } from '../../interfaces/publicationInterface'

const publicationListByVehicleTypeService = async (
  type: Vehicle_Type,
  page: number,
  limit: number
): Promise<IPublicationResponse> => {
  const publications = await prismaClient.publication.findMany({
    where: {
      AND: [{ is_active: true }, { vehicle_type: type }],
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
        },
      },
    },
    take: limit,
    skip: (page - 1) * limit,
  })

  const count = await prismaClient.publication.count({where: {vehicle_type: type}})
  const pagesIndex = paginateOutput(count, page, limit, 'publications')

  return { ...pagesIndex, results: publications }
}

export default publicationListByVehicleTypeService
