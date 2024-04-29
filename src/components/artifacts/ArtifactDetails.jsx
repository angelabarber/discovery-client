import React, { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import {
  deleteArtifact,
  getArtifactByArtifactId,
} from "../services/artifactService.jsx"
import { getCurrentUser } from "../services/userService.jsx"

export const ArtifactDetails = () => {
  const [artifact, setArtifact] = useState({})
  const [currentUser, setCurrentUser] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getArtifactByArtifactId(id).then(setArtifact)
  }, [])
  //does id need to be passed in the dependency array? doesn't seem to matter, at least for now

  useEffect(() => {
    getCurrentUser().then(setCurrentUser)
  }, [])

  const handleDelete = () => {
    deleteArtifact(id).then(() => {
      navigate("/artifacts")
    })
  }

  return (
    <div>
      <h2>{artifact.name}</h2>
      <p>{artifact.description}</p>
      <img src={artifact.image_url} alt={artifact.name} />
      <p>Site: {artifact.site && artifact.site.name}</p>
      <p>Traits:</p>
      <ul>
        {artifact.traits &&
          artifact.traits.map((trait) => <li key={trait.id}>{trait.name}</li>)}
      </ul>
      {/* {isCurrentUserOwner && (
        <div>
          <Link to={`/artifacts/${id}/edit`}>
            <button>Edit</button>
          </Link>
          <button onClick={handleDelete}>Delete</button>
        </div> */}
      {/* )} */}
      <div className="buttons">
        {currentUser?.id === artifact.user?.id && (
          <>
            <button
              type="button"
              className="bg-[#94C595] hover:bg-[#A1E8AF] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all mr-2"
            >
              <Link to={`/games/${artifact.id}/edit`}>Edit Artifact</Link>
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="bg-[#3A2449] hover:bg-[#747C92] text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Delete Artifact
            </button>
          </>
        )}
      </div>
    </div>
  )
}
