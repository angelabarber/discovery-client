import { useEffect } from "react"
import { useState } from "react"
import { getTraits } from "../services/traitService.jsx"

export const MaterialCheckbox = ({ formData, setFormData }) => {
  const [materials, setMaterials] = useState([])

  //make a get call to traits
  //filter traits with categoryName === Materials
  //take that then set materials

  useEffect(() => {
    // Fetch all traits
    getTraits().then((traits) => {
      // Filter traits with categoryName === "Materials"
      const materialTraits = traits.filter(
        (trait) => trait.categoryName === "Materials"
      )
      setMaterials(materialTraits)
    })
  }, [])
  //make a handler to monitor changes

  const handleMaterialChange = (traitId) => {
    const isSelected = formData.materials.includes(traitId)
    if (isSelected) {
      //if trait is already selected, remove it from the list
      setFormData({
        ...formData,
        materials: formData.materials.filter((id) => id !== traitId),
      })
    } else {
      setFormData({
        ...formData,
        materials: [...formData.materials, traitId],
      })
    }
  }

  //now have all traits with materials
  //map through materials to create a checkbox
  //handle on change

  return (
    <div>
      <label>Materials:</label>
      {materials.map((trait) => (
        <div key={trait.id}>
          <label>
            <input
              type="checkbox"
              checked={formData.materials.includes(trait.id)}
              onChange={() => handleMaterialChange(trait.id)}
            />
            {trait.name}
          </label>
        </div>
      ))}
    </div>
  )
}
