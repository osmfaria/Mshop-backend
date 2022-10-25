import { User } from "@prisma/client";
import { AppError } from "../../../errors/appError";
import { prismaClient } from "../../database/prismaClient";
import { exclude } from "../../functions/excludePassword";

const userListOneService = async (
  id: string
): Promise<Omit<User, 'password'>> => {
  const user = await prismaClient.user.findUnique({
    where: {
      id: id,
    },
    include: {
      Address: true
    }
  })

  if (!user) {
    throw new AppError('User not found', 404)
  }

  const userWithoutPassword = exclude(user, 'password')
  
  return userWithoutPassword
}

export default userListOneService