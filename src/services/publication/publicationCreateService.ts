import { Publication } from '@prisma/client'
import { prismaClient } from '../../database/prismaClient'
import { IPublication } from '../../interfaces/publicationInterface'

const publicationCreateService = async (
  id: string,
  data: IPublication
): Promise<Publication> => {

  console.log(id, data)

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
          id
        }
      }
    },
  })

  return publication
}

export default publicationCreateService
