import { Address } from "@prisma/client"
import { AppError } from "../../../errors/appError"
import { prismaClient } from "../../database/prismaClient"


const addressListService = async(id:string): Promise<Address> => {

    const address = await prismaClient.address.findFirst({
        where: {
            user: {
                is: {
                    id
                }
            }
        }
    })

    if (!address) {
        throw new AppError("address not found", 404)
    }

    return address
}   

export default addressListService