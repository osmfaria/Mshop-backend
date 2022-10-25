import { Comment } from "@prisma/client"

export declare type IComment = {
    description: string
}

export declare type ICommentResponse = {
  pageCount: number
  previousPage: string | null
  nextPage: string | null
  results: Comment[]
}