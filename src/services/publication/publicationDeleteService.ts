import { prismaClient } from '../../database/prismaClient'

const publicationDeleteService = async (id: string): Promise<void> => {
  await prismaClient.publication.delete({
    where: {
      id: id,
    },
  })
}

export default publicationDeleteService
