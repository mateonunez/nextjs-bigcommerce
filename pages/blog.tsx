import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import { Layout } from '@components/common'
import commerce from '@lib/api/commerce'

export async function getStaticProps({
  preview,
  locale,
  locales,
}: GetStaticPropsContext) {
  const config = { locale, locales }

  const postsPromise = commerce.getAllPosts({ config, preview })

  const { posts } = await postsPromise

  return {
    props: { posts },
    revalidate: 60,
  }
}

export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(posts)
  return <div>Hello</div>
}

Blog.Layout = Layout
