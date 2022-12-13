import { Publication } from '@prisma/client'
import { prismaClient } from '../../database/prismaClient'
import { IPublicationUpdate } from '../../interfaces/publicationInterface'

const publicationUpdateService = async (
  id: string,
  data: IPublicationUpdate
): Promise<Publication> => {
  await prismaClient.image.deleteMany({
    where: {
      publicationId: id,
    },
  })

  const publication = await prismaClient.publication.update({
    where: {
      id: id,
    },
    data: {
      type: data.type,
      title: data.title,
      year: data.year,
      milieage: data.milieage,
      price: data.price,
      description: data.description,
      vehicle_type: data.vehicle_type,
      is_active: data.is_active,
      Image: {
        create: data.images,
      },
    },
  })

  return publication
}

export default publicationUpdateService
