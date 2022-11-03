import { Address } from '@prisma/client'
import { AppError } from '../../../errors/appError'
import { prismaClient } from '../../database/prismaClient'
import { IAddressUpdate } from '../../interfaces/userInterface'

const addressUpdateService = async (
  id: string,
  data: IAddressUpdate,
): Promise<Address> => {
  const addressExists = await prismaClient.address.findFirst({
    where: {
      user: {
        is: {
          id
        }
      }
    },
  })

  if (!addressExists) {
    throw new AppError('User not found', 404)
  }

  const updatedAddress = await prismaClient.address.update({
    where: {
      userId: id,
    },
    data,
  })

  return updatedAddress
}

export default addressUpdateService
