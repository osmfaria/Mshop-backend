import { Request, Response } from 'express'
import addressListService from '../services/address/addressListService'
import addressUpdateService from '../services/address/addressUpdateService'

export const listAddressController = async (request: Request, response: Response) => {
    const id = request.userPayload.userId
    console.log(id)
    const address = await addressListService(id)

    response.json(address)
}

export const updatedAddressController = async (request: Request, response: Response) => {
    const id = request.params.user_id
    const data = request.inputData

    const address = await addressUpdateService(id, data)

    response.json(address)
}
