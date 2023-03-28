import React from 'react'
import { notificationHelper } from '../utils/notification-helper'

export const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = React.useState({} as GeolocationCoordinates)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(async position => {
      setLoading(true)
      try {
        setCurrentLocation(position.coords)
      } catch (error) {
        notificationHelper((error as any).message)
      } finally {
        setLoading(false)
      }
    })
  }, [])

  return {
    currentLocation,
    loading
  }
}
