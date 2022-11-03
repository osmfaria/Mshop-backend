import { AppError } from "../../../errors/appError"
import { prismaClient } from "../../database/prismaClient"

const commentDeleteService = async(id:string): Promise<void> => {

    await prismaClient.comment.delete({
        where: {
            id
        }
    })
}

export default commentDeleteService