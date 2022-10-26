import { Publication } from '@prisma/client'
import { prismaClient } from '../../database/prismaClient'
import { IPublication } from '../../interfaces/publicationInterface'

const publicationCreateService = async (
  userId: string,
  data: IPublication
): Promise<Publication> => {
  const publication = await prismaClient.publication.create({
    data: {
      type: data.type,
      title: data.title,
      year: data.year,
      milieage: data.milieage,
      price: data.price,
      description: data.description,
      vehicle_type: data.vehicle_type,
      user: {
        connect: {
          id: userId,
        },
      },
      Image: {
        createMany: {
          data: data.images,
        },
      },
    },
  })

  return publication
}

export default publicationCreateService
