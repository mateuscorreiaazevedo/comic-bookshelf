import { MD5 } from 'crypto-js'
import { coreConstants as c } from '..'
import { getTimestamp } from './timestamp-helper'

export const md5Helper = MD5(getTimestamp() + c.apiPrivate! + c.apiKey!).toString()
