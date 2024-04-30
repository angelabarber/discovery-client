import { useEffect } from "react"
import { useState } from "react"
import { getTraits } from "../services/traitService.jsx"

export const LocationCheckbox = ({ formData, setFormData }) => {
  const [locations, setLocation] = useState([])

  useEffect(() => {
    getTraits().then((traits) => {
      const locationTraits = traits.filter(
        (trait) => trait.category_name === "location"
      )
      setLocation(locationTraits)
    })
  }, [])

  const handleLocationChange = (traitId) => {
    const isSelected = formData.traits.includes(traitId)
    if (isSelected) {
      setFormData({
        ...formData,
        traits: formData.traits.filter((id) => id !== traitId),
      })
    } else {
      setFormData({
        ...formData,
        traits: [...formData.traits, traitId],
      })
    }
  }

  return (
    <div>
      <label>Location Found:</label>
      {locations.map((trait, index) => (
        <div key={index}>
          <label>
            <input
              name="location"
              type="radio"
              checked={formData.traits.includes(trait.id)}
              onChange={() => handleLocationChange(trait.id)}
            />
            {trait.name}
          </label>
        </div>
      ))}
    </div>
  )
}
