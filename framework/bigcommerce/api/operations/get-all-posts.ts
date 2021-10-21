import { BigcommerceConfig, Provider } from '..'
import type { GetAllPostsOperation, Post } from '../../types/post'
import type { RecursivePartial, RecursiveRequired } from '../utils/types'

import type {
  OperationContext,
} from '@commerce/api/operations'

export default function getAllPostsOperation({
  commerce,
}: OperationContext<Provider>) {
  async function getAllPosts<T extends GetAllPostsOperation>({
    config,
    preview
  }: {
    url?: string,
    config?: Partial<BigcommerceConfig>,
    preview?: boolean
  } = {}): Promise<T['data']> {
    const cfg = commerce.getConfig(config)
    // RecursivePartial forces the method to check for every prop in the data, which is
    // required in case there's a custom `url`
    const { data } = await cfg.storeApiFetch<
      RecursivePartial<{ data: Post[] }>
    >('/v3/catalog/brands')

    const posts = (data as RecursiveRequired<typeof data>) ?? []

    return { posts: preview ? posts : posts}
  }

  return getAllPosts
}
