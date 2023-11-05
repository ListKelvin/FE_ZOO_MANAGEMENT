import { post, remove, get, put } from '../apiCaller'
import { OrderFormValues } from '@/pages/tickets'

const MyOrder = {
  getOrder: async (orderId: string) => {
    const endpoint = `/orders/${orderId}`

    // try {
    const response = await get(endpoint)
    console.log('response: ', response)

    return response
    // } catch (error: AxiosError) {
    //   console.log('Error code:', error.response)

    //   return error.response
    // }
  },

  createOrder: async (data: OrderFormValues) => {
    const endpoint = `/orders/`

    // try {
    const response = await post(endpoint, data)
    console.log('response: ', response)

    return response
    // } catch (error: AxiosError) {
    //   console.log('Error code:', error.response)

    //   return error.response
    // }
  },

  updateOrderStatus: async (orderId: string, status: string) => {
    const endpoint = `/orders/${orderId}`

    // try {
    const response = await put(endpoint, { status })
    console.log('response: ', response)

    return response
    // } catch (error: AxiosError) {
    //   console.log('Error code:', error.response)

    //   return error.response
    // }
  },

  deleteOrder: async (orderId: string) => {
    const endpoint = `/orders/${orderId}`

    // try {
    const response = await remove(endpoint)
    console.log('response: ', response)

    return response
    // } catch (error: AxiosError) {
    //   console.log('Error code:', error.response)

    //   return error.response
    // }
  }
}
export default MyOrder
