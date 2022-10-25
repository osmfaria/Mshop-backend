import { User } from '@prisma/client'
import { env } from 'process'


export const paginateOutput = (count: number, page: number, limit: number, route: string) => {
  const pageCount = Math.ceil(count / limit)
  const url = env.API_URL

  let nextPage = null
  let previousPage = null

  if (page < pageCount) {
    nextPage = `${url}${route}/?page=${page + 1}&limit=${limit}`
  }

  if (page != 1) {
    previousPage = `${url}${route}/?page=${page - 1}&limit=${limit}`
  } 

  return { pageCount, previousPage, nextPage }
}

