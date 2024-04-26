import { useState, useEffect } from "react"
import { getSites } from "../services/siteService"
import { getTraits } from "../services/traitService"
import { useNavigate, useParams } from "react-router-dom"
import { MaterialCheckbox } from "../traits/MaterialCheckbox.jsx"
import { createArtifact, updateArtifact } from "../services/artifactService.jsx"

export const NewDiscoveryForm = () => {
  const [sites, setSites] = useState([])
  const [traits, setTraits] = useState([])
  const [formData, setFormData] = useState({
    site: "",
    name: "",
    description: "",
    location: [],
    material: [],
    condition: [],
  })

  const { id } = useParams
  const navigate = useNavigate

  useEffect(() => {
    getSites().then(setSites)
    getTraits().then(setTraits)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    // formData gets sent to the service
    if (id) {
      updateArtifact(id, formData).then(() => {
        navigate(`/artifact/${id}`)
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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="site">Site:</label>
        <select
          id="site"
          name="site"
          value={formData.site}
          onChange={handleChange}
        >
          <option value="">Select a site</option>
          {sites.map((site) => (
            <option key={site.id} value={site.id}>
              {site.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="name">Artifact Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <MaterialCheckbox formData={formData} setFormData={setFormData} />
      </div>
      <button type="button" onClick={handleSubmit}>
        {id ? "Update Artifact" : "Create Artifact"}
      </button>
    </form>
  )
}
