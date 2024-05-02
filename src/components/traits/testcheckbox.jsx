import { useEffect } from "react"
import { useState } from "react"
import { getTraits } from "../services/traitService.jsx"

export const ConditionCheckbox = ({ formData, setFormData }) => {
  const [conditions, setCondition] = useState([])

  useEffect(() => {
    getTraits().then((traits) => {
      const conditionTraits = traits.filter(
        (trait) => trait.category_name === "condition"
      )
      setCondition(conditionTraits)
    })
  }, [])

  const handleConditionChange = (traitId) => {
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
      <label>Artifact Condition:</label>
      {conditions.map((trait, index) => (
        <div key={index}>
          <label>
            <input
              name="condition"
              type="radio"
              checked={formData.traits.includes(trait.id)}
              onChange={() => handleConditionChange(trait.id)}
            />
            {trait.name}
          </label>
        </div>
      ))}
    </div>
  )
}
