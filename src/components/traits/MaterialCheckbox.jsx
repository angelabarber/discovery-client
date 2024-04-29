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
        (trait) => trait.category_name === "material"
      )
      setMaterials(materialTraits)
    })
  }, [])
  //make a handler to monitor changes

  const handleMaterialChange = (traitId) => {
    const isSelected = formData.traits.includes(traitId)
    if (isSelected) {
      //if trait is already selected, remove it from the list
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

  //now have all traits with materials
  //map through materials to create a checkbox
  //handle on change

  return (
    <div>
      <label>Materials:</label>
      {materials.map((trait, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              checked={formData.traits.includes(trait.id)}
              onChange={() => handleMaterialChange(trait.id)}
            />
            {trait.name}
          </label>
        </div>
      ))}
    </div>
  )
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// export const MaterialCheckbox = ({ formData, setFormData }) => {
//   const [materials, setMaterials] = useState([])

//   useEffect(() => {
//     getTraits().then((traits) => {
//       const materialTraits = traits.filter(
//         (trait) => trait.category_name === "material"
//       )
//       setMaterials(materialTraits)
//     })
//   }, [])

//   const handleMaterialChange = (traitId) => {
//     const isSelected = formData.materialTraits.includes(traitId)
//     const updatedMaterialTraits = isSelected
//       ? formData.materialTraits.filter((id) => id !== traitId)
//       : [...formData.materialTraits, traitId]

//     setFormData({
//       ...formData,
//       materialTraits: updatedMaterialTraits,
//     })
//   }

//   return (
//     <div>
//       <label>Materials:</label>
//       {materials.map((trait, index) => (
//         <div key={index}>
//           <label>
//             <input
//               type="checkbox"
//               checked={formData.materialTraits.includes(trait.id)}
//               onChange={() => handleMaterialChange(trait.id)}
//             />
//             {trait.name}
//           </label>
//         </div>
//       ))}
//     </div>
//   )
// }
