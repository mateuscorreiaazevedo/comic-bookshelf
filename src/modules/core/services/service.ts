import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { coreConstants as c, getTimestamp } from '..'
import { md5Helper } from '../utils/md5-helper'

type HttpRequest = {
  url: string
  body?: any
  headers?: any
  params?: any
  method?: 'get'|'post'|'put'|'delete'
}

type HttpResponse<T> = {
  code: number
  body?: T
}

const ts = getTimestamp()
const hash = md5Helper

export class Service {
  private api: AxiosInstance

  constructor (private readonly baseURL: string = c.baseUrl!) {
    this.api = axios.create({
      baseURL
    })
  }

  async request<T = any> (props: HttpRequest): Promise<HttpResponse<T>> {
    const { url, body, headers, method = 'get', params } = props
    let response: AxiosResponse

    try {
      response = await this.api.request({
        url,
        method,
        data: body,
        params: {
          ts,
          apikey: c.apiKey!,
          hash,
          ...params
        },
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      })
    } catch (error) {
      response = (error as any).response
    }

    return {
      code: response.status,
      body: response.data
    }
  }
}
