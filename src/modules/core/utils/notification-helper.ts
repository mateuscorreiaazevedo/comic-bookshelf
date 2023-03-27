import { toast } from 'react-toastify'

export function notificationHelper (message: string, type: 'error' | 'info' | 'success' = 'error') {
  switch (type) {
    case 'info':
      toast.info(message, { theme: 'colored', position: 'top-right' })
      break
    case 'success':
      toast.success(message, { theme: 'colored', position: 'top-right' })
      break
    default:
      toast.error(message, { theme: 'colored', position: 'top-right' })
  }
}
