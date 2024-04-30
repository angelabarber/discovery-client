// import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
// import { getArtifacts } from "../services/artifactService.jsx"

// export const ArtifactList = () => {
//   const [artifacts, setArtifacts] = useState([])

//   useEffect(() => {
//     getArtifacts().then(setArtifacts)
//   }, [])

//   return (
//     <>
//       <section>
//         <ul>
//           {artifacts.map((artifact) => (
//             <li key={artifact.id}>
//               <Link to={`/artifacts/${artifact.id}`}>{artifact.name}</Link>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </>
//   )
// }

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getArtifacts } from "../services/artifactService.jsx"

// export const ArtifactList = () => {
//   const [artifacts, setArtifacts] = useState([])

//   useEffect(() => {
//     getArtifacts().then(setArtifacts)
//   }, [])

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {artifacts.map((artifact) => (
//         <Link
//           key={artifact.id}
//           to={`/artifacts/${artifact.id}`}
//           className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
//         >
//           <div className="flex">
//             {artifact.imageUrl && (
//               <div className="w-1/3 flex-shrink-0">
//                 <img
//                   src={artifact.imageUrl}
//                   alt={artifact.name}
//                   className="w-full h-auto object-cover"
//                 />
//               </div>
//             )}
//             <div className="w-2/3 p-4">
//               <h3 className="text-lg font-semibold mb-2">{artifact.name}</h3>
//               <p className="text-gray-600 mb-2">{artifact.site.name}</p>
//               <p className="text-gray-700">{artifact.description}</p>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   )
// }
// export const ArtifactList = () => {
//   const [artifacts, setArtifacts] = useState([])

//   useEffect(() => {
//     getArtifacts().then(setArtifacts)
//   }, [])

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {artifacts.map((artifact) => (
//         <Link
//           key={artifact.id}
//           to={`/artifacts/${artifact.id}`}
//           className="bg-[#6A8D92] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
//         >
//           <div className="flex">
//             {artifact.imageUrl && (
//               <div className="w-1/3 flex-shrink-0">
//                 <img
//                   src={artifact.imageUrl}
//                   alt={artifact.name}
//                   className="w-full h-auto object-cover"
//                 />
//               </div>
//             )}
//             <div className="w-2/3 p-4">
//               <h3 className="text-lg font-semibold mb-2 text-white">
//                 {artifact.name}
//               </h3>
//               <p className="text-[#A1E887] mb-2 capitalize">
//                 {artifact.site.name}
//               </p>
//               <p className="text-[#4B4E6D]">{artifact.description}</p>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   )
// }
// export const ArtifactList = () => {
//   const [artifacts, setArtifacts] = useState([])

//   useEffect(() => {
//     getArtifacts().then(setArtifacts)
//   }, [])

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {artifacts.map((artifact) => (
//         <Link
//           key={artifact.id}
//           to={`/artifacts/${artifact.id}`}
//           className="bg-[#80B192] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
//         >
//           <div className="flex">
//             {artifact.imageUrl && (
//               <div className="w-1/3 flex-shrink-0">
//                 <img
//                   src={artifact.imageUrl}
//                   alt={artifact.name}
//                   className="w-full h-auto object-cover"
//                 />
//               </div>
//             )}
//             <div className="w-2/3 p-4">
//               <h3 className="text-lg font-semibold mb-2 text-white">
//                 {artifact.name}
//               </h3>
//               <p className="text-[#A1E887] mb-2 capitalize">
//                 {artifact.site.name}
//               </p>
//               <p className="text-[#4B4E6D]">{artifact.description}</p>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   )
// }
// export const ArtifactList = () => {
//   const [artifacts, setArtifacts] = useState([])

//   useEffect(() => {
//     getArtifacts().then(setArtifacts)
//   }, [])

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {artifacts.map((artifact) => (
//         <Link
//           key={artifact.id}
//           to={`/artifacts/${artifact.id}`}
//           className="bg-[#80B192] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
//         >
//           <div className="flex flex-col h-full">
//             <div className="bg-[#6A8D92] h-48 flex items-center justify-center">
//               {artifact.imageUrl && (
//                 <img
//                   src={artifact.imageUrl}
//                   alt={artifact.name}
//                   className="max-h-full max-w-full object-contain"
//                 />
//               )}
//             </div>
//             <div className="p-4 flex-grow">
//               <h3 className="text-lg font-semibold mb-2 text-white">
//                 {artifact.name}
//               </h3>
//               <p className="text-[#A1E887] mb-2 capitalize">
//                 {artifact.site.name}
//               </p>
//               <p className="text-[#4B4E6D]">{artifact.description}</p>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   )
// }
export const ArtifactList = () => {
  const [artifacts, setArtifacts] = useState([])

  useEffect(() => {
    getArtifacts().then(setArtifacts)
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {artifacts.map((artifact) => (
        <Link
          key={artifact.id}
          to={`/artifacts/${artifact.id}`}
          className="bg-[#80B192] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        >
          <div className="flex flex-col h-full">
            <div className="h-48 flex items-center justify-center">
              {artifact.imageUrl && (
                <img
                  src={artifact.imageUrl}
                  alt={artifact.name}
                  className="max-h-full max-w-full object-contain"
                />
              )}
            </div>
            <div className="p-4 flex-grow">
              <h3 className="text-lg font-semibold mb-2 text-white">
                {artifact.name}
              </h3>
              <p className="text-[#A1E887] mb-2 capitalize">
                {artifact.site.name}
              </p>
              <p className="text-[#4B4E6D]">{artifact.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
