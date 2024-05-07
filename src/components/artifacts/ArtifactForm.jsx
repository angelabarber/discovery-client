import { useState, useEffect } from "react"
import { getSites } from "../services/siteService"
import { getTraits } from "../services/traitService"
import { useNavigate, useParams } from "react-router-dom"
import { MaterialCheckbox } from "../traits/MaterialCheckbox.jsx"
import {
  createArtifact,
  getArtifactByArtifactId,
  updateArtifact,
} from "../services/artifactService.jsx"
import { ConditionCheckbox } from "../traits/ConditionCheckbox.jsx"
import { LocationCheckbox } from "../traits/LocationCheckbox.jsx"

export const ArtifactForm = () => {
  const [sites, setSites] = useState([])
  const [traits, setTraits] = useState([])
  const [formData, setFormData] = useState({
    site: "",
    name: "",
    description: "",
    imageUrl: "",
    traits: [],
  })

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getSites().then(setSites)
    getTraits().then(setTraits)
  }, [])

  useEffect(() => {
    if (id) {
      getArtifactByArtifactId(id).then((artifact) => {
        // delete artifact.user
        // delete artifact.id
        artifact.site = artifact.site.id //this is new
        artifact.traits = artifact.traits.map((trait) => trait.id)
        setFormData(artifact)
      })
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "site" ? parseInt(e.target.value) : e.target.value,
    })
  }

  const handleSubmit = () => {
    // formData gets sent to the service
    if (id) {
      // const copy = structuredClone(formData) //this was just =formData
      updateArtifact(id, formData).then(() => {
        navigate(`/artifacts/${id}`)
      })
    } else {
      createArtifact(formData).then(() => {
        navigate("/artifacts")
      })
    }
  }

  //   const handleChange = (event) => {
  //     const { name, value, checked, type } = event.target
  //     if (type === "checkbox") {
  //       setFormData((prevFormData) => ({
  //         ...prevFormData,
  //         [name]: checked
  //           ? [...prevFormData[name], value]
  //           : prevFormData[name].filter((item) => item !== value),
  //       }))
  //     } else {
  //       setFormData((prevFormData) => ({
  //         ...prevFormData,
  //         [name]: value,
  //       }))
  //     }
  //   }

  //   const handleSubmit = (event) => {
  //     event.preventDefault()
  //     // Submit form data to the server
  //     console.log(formData)
  //   }

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="site">Site:</label>
  //         <select
  //           id="site"
  //           name="site"
  //           value={formData.site.id || formData.site}
  //           onChange={handleChange}
  //         >
  //           <option value="">Select a site</option>
  //           {sites.map((site, index) => (
  //             <option key={index} value={site.id}>
  //               {site.name}
  //             </option>
  //           ))}
  //         </select>
  //       </div>

  //       <div>
  //         <label htmlFor="name">Artifact Name:</label>
  //         <input
  //           type="text"
  //           id="name"
  //           name="name"
  //           value={formData.name}
  //           onChange={handleChange}
  //         />
  //       </div>

  //       <div>
  //         <label htmlFor="description">Description:</label>
  //         <textarea
  //           id="description"
  //           name="description"
  //           value={formData.description}
  //           onChange={handleChange}
  //         ></textarea>
  //       </div>
  //       <div>
  //         <label htmlFor="imageUrl">Image URL:</label>
  //         <input
  //           type="text"
  //           id="imageUrl"
  //           name="imageUrl"
  //           value={formData.imageUrl}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div>
  //         <MaterialCheckbox formData={formData} setFormData={setFormData} />
  //       </div>
  //       <div>
  //         <ConditionCheckbox formData={formData} setFormData={setFormData} />
  //       </div>
  //       <div>
  //         <LocationCheckbox formData={formData} setFormData={setFormData} />
  //       </div>
  //       <button type="button" onClick={handleSubmit}>
  //         {id ? "Update Artifact" : "Create Artifact"}
  //       </button>
  //     </form>
  //   )
  // }

  const RadioCheckbox = ({ label, value, checked, onChange }) => (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        id={value}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 text-blue-600 rounded-full"
      />
      <label htmlFor={value} className="ml-2 text-indigo-900 font-semibold">
        {label}
      </label>
    </div>
  )

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-indigo-50 rounded-lg shadow-md p-6"
    >
      <div className="mb-4">
        <label htmlFor="site" className="block text-indigo-900 font-bold mb-2">
          Site:
        </label>
        <select
          id="site"
          name="site"
          value={formData.site.id || formData.site}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-indigo-900 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a Site</option>
          {sites.map((site, index) => (
            <option key={index} value={site.id}>
              {/* {site.name} */}
              {site.name.charAt(0).toUpperCase() + site.name.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-indigo-900 font-bold mb-2">
          Artifact Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-indigo-900 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-indigo-900 font-bold mb-2"
        >
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-indigo-900 leading-tight focus:outline-none focus:shadow-outline"
          rows="3"
        ></textarea>
      </div>

      <div className="mb-4">
        <label
          htmlFor="imageUrl"
          className="block text-indigo-900 font-bold mb-2"
        >
          Image URL:
        </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-indigo-900 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <h3 className="text-indigo-900 font-bold mb-2">Material:</h3>
        <div className="bg-indigo-400 rounded-md p-4">
          <MaterialCheckbox formData={formData} setFormData={setFormData} />
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-indigo-900 font-bold mb-2">Condition:</h3>
        <div className="bg-indigo-400 rounded-md p-4">
          <ConditionCheckbox
            formData={formData}
            setFormData={setFormData}
            component={RadioCheckbox}
          />
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-indigo-900 font-bold mb-2">Location:</h3>
        <div className="bg-indigo-400  rounded-md p-4">
          <LocationCheckbox
            formData={formData}
            setFormData={setFormData}
            component={RadioCheckbox}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {id ? "Update Artifact" : "Create Artifact"}
      </button>
    </form>
  )
}

//   const RadioCheckbox = ({ label, value, checked, onChange }) => (
//     <div className="flex items-center mb-4">
//       <input
//         type="checkbox"
//         id={value}
//         value={value}
//         checked={checked}
//         onChange={onChange}
//         className="form-checkbox h-5 w-5 text-blue-600 rounded-full"
//       />
//       <label htmlFor={value} className="ml-2 text-indigo-900 font-semibold">
//         {label}
//       </label>
//     </div>
//   )

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto bg-indigo-50 rounded-lg shadow-md p-6"
//     >
//       <div className="mb-4">
//         <label htmlFor="site" className="block text-indigo-900 font-bold mb-2">
//           Site:
//         </label>
//         <select
//           id="site"
//           name="site"
//           value={formData.site.id || formData.site}
//           onChange={handleChange}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-indigo-900 leading-tight focus:outline-none focus:shadow-outline"
//         >
//           <option value="">Select a site</option>
//           {sites.map((site, index) => (
//             <option key={index} value={site.id}>
//               {site.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* ... (your other form fields) */}

//       <div className="mb-4">
//         <h3 className="text-indigo-900 font-bold mb-2">Material:</h3>
//         <div className="bg-[#C7AC92] rounded-md p-4">
//           <MaterialCheckbox formData={formData} setFormData={setFormData} />
//         </div>
//       </div>

//       <div className="mb-4">
//         <h3 className="text-indigo-900 font-bold mb-2">Condition:</h3>
//         <div className="bg-indigo-200 rounded-md p-4">
//           <ConditionCheckbox
//             formData={formData}
//             setFormData={setFormData}
//             component={RadioCheckbox}
//           />
//         </div>
//       </div>

//       <div className="mb-4">
//         <h3 className="text-indigo-900 font-bold mb-2">Location:</h3>
//         <div className="bg-indigo-200 rounded-md p-4">
//           <LocationCheckbox
//             formData={formData}
//             setFormData={setFormData}
//             component={RadioCheckbox}
//           />
//         </div>
//       </div>

//       <button
//         type="button"
//         onClick={handleSubmit}
//         className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//       >
//         {id ? "Update Artifact" : "Create Artifact"}
//       </button>
//     </form>
//   )
// }

//   const RadioCheckbox = ({ label, value, checked, onChange }) => (
//     <div className="flex items-center mb-4">
//       <input
//         type="checkbox"
//         id={value}
//         value={value}
//         checked={checked}
//         onChange={onChange}
//         className="form-checkbox h-5 w-5 text-blue-600 rounded-full"
//       />
//       <label htmlFor={value} className="ml-2 text-gray-800 font-semibold">
//         {label}
//       </label>
//     </div>
//   )

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto bg-[#DCF2B0] rounded-lg shadow-md p-6"
//     >
//       <div className="mb-4">
//         <label htmlFor="site" className="block text-gray-800 font-bold mb-2">
//           Site:
//         </label>
//         <select
//           id="site"
//           name="site"
//           value={formData.site.id || formData.site}
//           onChange={handleChange}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
//         >
//           <option value="">Select a site</option>
//           {sites.map((site, index) => (
//             <option key={index} value={site.id}>
//               {site.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* ... (your other form fields) */}

//       <div className="mb-4">
//         <h3 className="text-gray-800 font-bold mb-2">Material:</h3>
//         <div className="bg-[#C0BABC] rounded-md p-4">
//           <MaterialCheckbox formData={formData} setFormData={setFormData} />
//         </div>
//       </div>

//       <div className="mb-4">
//         <h3 className="text-gray-800 font-bold mb-2">Condition:</h3>
//         <div className="bg-[#C0BABC] rounded-md p-4">
//           <ConditionCheckbox
//             formData={formData}
//             setFormData={setFormData}
//             component={RadioCheckbox}
//           />
//         </div>
//       </div>

//       <div className="mb-4">
//         <h3 className="text-gray-800 font-bold mb-2">Location:</h3>
//         <div className="bg-[#C0BABC] rounded-md p-4">
//           <LocationCheckbox
//             formData={formData}
//             setFormData={setFormData}
//             component={RadioCheckbox}
//           />
//         </div>
//       </div>

//       <button
//         type="button"
//         onClick={handleSubmit}
//         className="bg-[#CD533B] hover:bg-[#C7AC92] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//       >
//         {id ? "Update Artifact" : "Create Artifact"}
//       </button>
//     </form>
//   )
// }
