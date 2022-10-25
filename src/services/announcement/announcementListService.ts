import { Publication } from '@prisma/client'
import { prismaClient } from '../../database/prismaClient'

const publicationsListService = async (): Promise<Publication[]> => {
  const publications = await prismaClient.publication.findMany()

  return publications
}

export default publicationsListService