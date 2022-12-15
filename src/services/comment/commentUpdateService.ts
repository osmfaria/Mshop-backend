import { Comment } from "@prisma/client";
import { prismaClient } from "../../database/prismaClient";
import { IComment } from "../../interfaces/commentInterface";


const commentUpdateService = async (id: string, data: IComment): Promise<Comment> => {

  const comment = await prismaClient.comment.update({
    where: {
      id
    },
    data
  })

  return comment
}

export default commentUpdateService