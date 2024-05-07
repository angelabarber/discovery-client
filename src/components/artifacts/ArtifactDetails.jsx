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

  useEffect(() => {
    getCurrentUser().then(setCurrentUser)
  }, [])

  const handleDelete = () => {
    deleteArtifact(id).then(() => {
      navigate("/artifacts")
    })
  }

  // return (
  //     <div>
  //       <h2>{artifact.name}</h2>
  //       <p>{artifact.description}</p>
  //       <img src={artifact.imageUrl} alt={artifact.name} />
  //       <p>Site: {artifact.site && artifact.site.name}</p>
  //       <p>Traits:</p>
  //       <ul>
  //         {artifact.traits &&
  //           artifact.traits.map((trait) => <li key={trait.id}>{trait.name}</li>)}
  //       </ul>
  //       {currentUser?.id === artifact.user?.id && (
  //         <div>
  //           <Link to={`/artifacts/${id}/edit`}>
  //             <button>Edit</button>
  //           </Link>
  //           <button onClick={handleDelete}>Delete</button>
  //         </div>
  //       )}
  //     </div>
  //   )
  // }

  //with buttons, theyre cute!
  //     <div>
  //       <h2>{artifact.name}</h2>
  //       <p>{artifact.description}</p>
  //       <img src={artifact.image_url} alt={artifact.name} />
  //       <p>Site: {artifact.site && artifact.site.name}</p>
  //       <p>Traits:</p>
  //       <ul>
  //         {artifact.traits &&
  //           artifact.traits.map((trait) => <li key={trait.id}>{trait.name}</li>)}
  //       </ul>
  //       <div className="buttons">
  //         {currentUser?.id === artifact.user?.id && (
  //           <>
  //             <button
  //               type="button"
  //               className="bg-[#94C595] hover:bg-[#A1E8AF] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all mr-2"
  //             >
  //               <Link to={`/games/${artifact.id}/edit`}>Edit Artifact</Link>
  //             </button>
  //             <button
  //               type="button"
  //               onClick={handleDelete}
  //               className="bg-[#3A2449] hover:bg-[#747C92] text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
  //             >
  //               Delete Artifact
  //             </button>
  //           </>
  //         )}
  //       </div>
  //     </div>
  //   )
  // }

  // attempting to display trait type

  //   return (
  //     <div>
  //       <h2>{artifact.name}</h2>
  //       <p>{artifact.description}</p>
  //       <img src={artifact.imageUrl} alt={artifact.name} />
  //       <p>Site: {artifact.site && artifact.site.name}</p>
  //       <p>Traits:</p>
  //       <ul>
  //         {artifact.traits &&
  //           artifact.traits.map((trait) => (
  //             <li key={trait.id}>
  //               <span className="font-semibold">
  //                 {trait.category_name === "condition"
  //                   ? "Condition"
  //                   : trait.category_name === "material"
  //                   ? "Material"
  //                   : trait.category_name === "location"
  //                   ? "Location"
  //                   : "Other"}
  //                 :
  //               </span>{" "}
  //               {trait.name}
  //             </li>
  //           ))}
  //       </ul>
  //       {currentUser?.id === artifact.user?.id && (
  //         <div>
  //           <Link to={`/artifacts/${id}/edit`}>
  //             <button>Edit</button>
  //           </Link>
  //           <button onClick={handleDelete}>Delete</button>
  //         </div>
  //       )}
  //     </div>
  //   )
  // }

  //   return (
  //     <div className="flex flex-col md:flex-row items-center bg-[#80B192] rounded-lg overflow-hidden p-6">
  //       <div className="md:w-1/2 md:pr-6 mb-4 md:mb-0">
  //         <img
  //           src={artifact.imageUrl}
  //           alt={artifact.name}
  //           className="w-full h-auto rounded-lg"
  //         />
  //       </div>
  //       <div className="md:w-1/2">
  //         <h2 className="text-2xl font-semibold text-white mb-4">
  //           {artifact.name}
  //         </h2>
  //         <p className="text-[#4B4E6D] mb-4">{artifact.description}</p>
  //         <p className="text-white mb-4">
  //           Site: {artifact.site && artifact.site.name}
  //         </p>
  //         <div className="mb-4">
  //           <p className="text-white mb-2">Traits:</p>
  //           <ul className="list-disc list-inside">
  //             {artifact.traits &&
  //               artifact.traits.map((trait) => (
  //                 <li key={trait.id} className="text-[#4B4E6D]">
  //                   <span className="font-semibold">
  //                     {trait.category_name === "condition"
  //                       ? "Condition"
  //                       : trait.category_name === "material"
  //                       ? "Material"
  //                       : trait.category_name === "location"
  //                       ? "Location"
  //                       : "Other"}
  //                     :
  //                   </span>{" "}
  //                   {trait.name}
  //                 </li>
  //               ))}
  //           </ul>
  //         </div>
  //         {currentUser?.id === artifact.user?.id && (
  //           <div className="buttons flex">
  //             <button
  //               type="button"
  //               className="bg-[#94C595] hover:bg-[#A1E8AF] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all mr-2"
  //             >
  //               <Link to={`/artifacts/${artifact.id}/edit`}>Edit Artifact</Link>
  //             </button>
  //             <button
  //               type="button"
  //               onClick={handleDelete}
  //               className="bg-[#3A2449] hover:bg-[#747C92] text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
  //             >
  //               Delete Artifact
  //             </button>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   )
  // }
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#80B192] rounded-lg overflow-hidden p-6">
      <div className="md:w-1/2 md:pr-6 mb-4 md:mb-0">
        <img
          src={artifact.imageUrl}
          alt={artifact.name}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold text-white mb-4">
          {artifact.name}
        </h2>
        <p className="text-[#4B4E6D] mb-4">{artifact.description}</p>
        <p className="text-white mb-4">
          Site:{" "}
          {artifact.site &&
            artifact.site.name.charAt(0).toUpperCase() +
              artifact.site.name.slice(1)}
        </p>
        <div className="mb-4">
          <p className="text-white mb-2">Traits:</p>
          <ul className="list-disc list-inside">
            {artifact.traits &&
              artifact.traits.map((trait) => (
                <li key={trait.id} className="text-[#4B4E6D]">
                  <span className="font-semibold">
                    {trait.category_name === "condition"
                      ? "Condition"
                      : trait.category_name === "material"
                      ? "Material"
                      : trait.category_name === "location"
                      ? "Location"
                      : "Other"}
                    :
                  </span>{" "}
                  {trait.name.charAt(0).toUpperCase() + trait.name.slice(1)}
                </li>
              ))}
          </ul>
        </div>
        {currentUser?.id === artifact.user?.id && (
          <div className="buttons flex">
            <button
              type="button"
              className="bg-[#94C595] hover:bg-[#A1E8AF] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all mr-2"
            >
              <Link to={`/artifacts/${artifact.id}/edit`}>Edit Artifact</Link>
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="bg-[#3A2449] hover:bg-[#747C92] text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Delete Artifact
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
