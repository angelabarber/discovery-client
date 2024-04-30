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
        delete artifact.user
        delete artifact.id
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
      const copy = formData
      copy.site = formData.site.id
      updateArtifact(id, copy).then(() => {
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

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="site">Site:</label>
        <select
          id="site"
          name="site"
          value={formData.site.id || formData.site}
          onChange={handleChange}
        >
          <option value="">Select a site</option>
          {sites.map((site, index) => (
            <option key={index} value={site.id}>
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
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </div>
      <div>
        <MaterialCheckbox formData={formData} setFormData={setFormData} />
      </div>
      <div>
        <ConditionCheckbox formData={formData} setFormData={setFormData} />
      </div>
      <div>
        <LocationCheckbox formData={formData} setFormData={setFormData} />
      </div>
      <button type="button" onClick={handleSubmit}>
        {id ? "Update Artifact" : "Create Artifact"}
      </button>
    </form>
  )
}
