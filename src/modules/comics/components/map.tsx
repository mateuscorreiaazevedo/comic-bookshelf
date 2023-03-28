import { coreConstants as c, useCurrentLocation } from '@/modules/core'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api'

import React from 'react'
import { PlacesAutocomplete } from './place-autocomplete'

export interface MarkerSelected {
  lat: number
  lng: number
}

export const Map = () => {
  const [selected, setSelected] = React.useState({} as MarkerSelected)
  const { currentLocation } = useCurrentLocation()

  React.useEffect(() => {
    if (currentLocation) {
      (() => {
        setSelected({
          lat: currentLocation.latitude!,
          lng: currentLocation.longitude!
        })
      })()
    }
  }, [])

  return (
    <div className="w-full h-full">
      <LoadScript googleMapsApiKey={c.mapsKey} libraries={['places']}>
        <PlacesAutocomplete setSelected={setSelected} />
        <GoogleMap center={selected} zoom={17} mapContainerClassName="w-full h-full">
          <Marker position={selected} />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
