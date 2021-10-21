import * as Core from '@commerce/types/post'
export * from '@commerce/types/post'

export type Post = Core.Post

export type PostTypes = {
  post: Post
}

export type GetAllPostsOperation = Core.GetAllPostsOperation<PostTypes>
export type GetPostOperation = Core.GetPostOperation<PostTypes>
