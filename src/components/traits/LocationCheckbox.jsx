import { useEffect } from "react"
import { useState } from "react"
import { getTraits } from "../services/traitService.jsx"

export const LocationCheckbox = ({ formData, setFormData }) => {
  const [locations, setLocation] = useState([])
  const [radio, setRadio] = useState()

  useEffect(() => {
    getTraits().then((traits) => {
      const locationTraits = traits.filter(
        (trait) => trait.category_name === "location"
      )
      setLocation(locationTraits)
      for (const trait of locationTraits) {
        if (formData.traits.includes(trait.id)) {
          setRadio(trait.id)
        }
      }
    })
  }, [formData])

  const handleLocationChange = (traitId) => {
    // debugger
    const newFormData = [
      ...formData.traits.filter((id) => id !== radio),
      traitId,
    ]
    setFormData({
      ...formData,
      traits: newFormData,
    })
    setRadio(traitId)
  }

  // const handleLocationChange = (traitId) => {
  //   const isSelected = formData.traits.includes(traitId)
  //   if (isSelected) {
  //     setFormData({
  //       ...formData,
  //       traits: formData.traits.filter((id) => id !== traitId),
  //     })
  //   } else {
  //     setFormData({
  //       ...formData,
  //       traits: [...formData.traits, traitId],
  //     })
  //   }
  // }

  return (
    <div className="mb-4">
      {/* <label>Location Found:</label> */}
      {/* <h3>Location:</h3> */}
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
