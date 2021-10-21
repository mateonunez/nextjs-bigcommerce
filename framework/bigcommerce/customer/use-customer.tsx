import useCustomer, { UseCustomer } from '@commerce/customer/use-customer'

import type { CustomerHook } from '../types/customer'
import { SWRHook } from '@commerce/utils/types'

export default useCustomer as UseCustomer<typeof handler>

export const handler: SWRHook<CustomerHook> = {
  fetchOptions: {
    url: '/api/customer',
    method: 'GET',
  },
  async fetcher({ options, fetch }) {
    const data = await fetch(options)
    return data?.customer ?? null
  },
  useHook:
    ({ useData }) =>
    (input) => {
      return useData({
        swrOptions: {
          revalidateOnFocus: false,
          ...input?.swrOptions,
        },
      })
    },
}
