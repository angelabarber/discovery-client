import { useEffect } from "react"
import { useState } from "react"
import { getTraits } from "../services/traitService.jsx"

export const ConditionCheckbox = ({ formData, setFormData }) => {
  const [conditions, setCondition] = useState([])
  const [radio, setRadio] = useState()

  useEffect(() => {
    getTraits().then((traits) => {
      const conditionTraits = traits.filter(
        (trait) => trait.category_name === "condition"
      )
      setCondition(conditionTraits)

      for (const trait of conditionTraits) {
        if (formData.traits.includes(trait.id)) {
          setRadio(trait.id)
        }
      }
    })
  }, [formData])

  const handleConditionChange = (traitId) => {
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
    // const isSelected = formData.traits.includes(traitId)
    // if (isSelected) {
    // } else {
    //   setFormData({
    //     ...formData,
    //     traits: [...formData.traits, traitId],
    //   })
    // }
  }

  return (
    <div className="mb-4">
      {/* <h3>Condition:</h3> */}
      {/* <label>Artifact Condition:</label> */}
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
