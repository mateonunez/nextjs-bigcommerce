// TODO: define this type
export type Post = {
  // ID of the Web post.
  id: string
  // Post name, as displayed on the storefront.
  title: string
  // Relative URL on the storefront for this post.
  url?: string
  // HTML or variable that populates this post’s `<body>` element, in default/desktop view. Required in POST if post type is `raw`.
  body: string
  // If true, this post appears in the storefront’s navigation menu.
  is_published?: boolean
  // Order in which this post should display on the storefront. (Lower integers specify earlier display.)
  author?: string
}

export type PostTypes = {
  post: Post
}

export type GetAllPostsOperation<T extends PostTypes = PostTypes> = {
  data: { posts: T['post'][] }
}

export type GetPostOperation<T extends PostTypes = PostTypes> = {
  data: { post?: T['post'] }
  variables: { id: string }
}
