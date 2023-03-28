import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import { MarkerSelected } from './map'

interface PlaceAutocompleteProps {
  setSelected: React.Dispatch<React.SetStateAction<MarkerSelected>>
}

export const PlacesAutocomplete = ({ setSelected }: PlaceAutocompleteProps) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions
  } = usePlacesAutocomplete()

  const handleSelect = async (address: string) => {
    setValue(address, false)
    clearSuggestions()

    const results = await getGeocode({ address })
    const { lat, lng } = getLatLng(results[0])
    setSelected({ lat, lng })
  }

  return (
    <Combobox className='w-full' onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={e => setValue(e.target.value)}
        disabled={!ready}
        className="px-2 py-1 bg-red-200 dark:bg-zinc-600 outline-none w-full placeholder:text-white placeholder:italic"
        placeholder="Insirado o endereço de entrega."
      />
      <ComboboxPopover>
        <ComboboxList className="bg-zinc-200 dark:bg-zinc-600">
          {status === 'OK' &&
            data.map(({ place_id, description }) => <ComboboxOption className='cursor-pointer hover:bg-zinc-300 dark:hover:bg-zinc-500' key={place_id} value={description} />)}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  )
}
