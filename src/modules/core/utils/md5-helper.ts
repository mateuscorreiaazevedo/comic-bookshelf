import { MD5 } from 'crypto-js'
import { coreConstants as c } from '..'

const ts = new Date().getTime().toString()
const privateValue = c.privateKey as string
const publicValue = c.publicKey

export const md5Helper = MD5(ts + privateValue + publicValue).toString()
