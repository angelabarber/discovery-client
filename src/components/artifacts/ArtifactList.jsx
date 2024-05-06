import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getArtifacts } from "../services/artifactService.jsx"
import { getSites } from "../services/siteService.jsx"

// this adds a hover magnify over the images//
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
//           className="group bg-[#80B192] rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden"
//         >
//           <div className="flex flex-col h-full">
//             <div className="h-48 flex items-center justify-center">
//               {artifact.imageUrl && (
//                 <img
//                   src={artifact.imageUrl}
//                   alt={artifact.name}
//                   className="max-h-full max-w-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
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
//adds a magnify hover to the whole thang
// as of 5/6 this function and use effect are being
// export const ArtifactList = () => {
//   const [artifacts, setArtifacts] = useState([])

//   useEffect(() => {
//     getArtifacts().then(setArtifacts)
//   }, [])

//   // below is what we are using permanently as of 5/6 230 pm
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {artifacts.map((artifact) => (
//         <Link
//           key={artifact.id}
//           to={`/artifacts/${artifact.id}`}
//           className="group bg-[#80B192] rounded-lg overflow-hidden"
//         >
//           <div className="h-full rounded-lg hover:scale-105 transition-transform duration-300">
//             <div className="flex flex-col h-full">
//               <div className="h-48 flex items-center justify-center">
//                 {artifact.imageUrl && (
//                   <div className="w-full h-48 rounded-lg overflow-hidden">
//                     <img
//                       src={artifact.imageUrl}
//                       alt={artifact.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 )}
//               </div>
//               <div className="p-4 flex-grow">
//                 <h3 className="text-lg font-semibold mb-2 text-white">
//                   {artifact.name}
//                 </h3>
//                 <p className="text-[#A1E887] mb-2 capitalize">
//                   {artifact.site.name}
//                 </p>
//                 <p className="text-[#4B4E6D]">{artifact.description}</p>
//               </div>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   )
// }
//ooo this has a filter
// export const ArtifactList = () => {
//   const [artifacts, setArtifacts] = useState([])
//   const [sites, setSites] = useState([])
//   const [selectedSite, setSelectedSite] = useState("")

//   useEffect(() => {
//     getArtifacts().then(setArtifacts)
//     getSites().then(setSites)
//   }, [])

//   const handleSiteChange = (event) => {
//     setSelectedSite(event.target.value)
//   }

//   const filteredArtifacts = selectedSite
//     ? artifacts.filter((artifact) => artifact.site.name === selectedSite)
//     : artifacts

//   return (
//     <div>
//       <div className="mb-4">
//         <label htmlFor="site" className="block text-indigo-900 font-bold mb-2">
//           Filter by Site:
//         </label>
//         <select
//           id="site"
//           value={selectedSite}
//           onChange={handleSiteChange}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-indigo-900 leading-tight focus:outline-none focus:shadow-outline"
//         >
//           <option value="">All Sites</option>
//           {sites.map((site, index) => (
//             <option key={index} value={site.name}>
//               {site.name.charAt(0).toUpperCase() + site.name.slice(1)}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredArtifacts.map((artifact) => (
//           <Link
//             key={artifact.id}
//             to={`/artifacts/${artifact.id}`}
//             className="group bg-[#80B192] rounded-lg overflow-hidden"
//           >
//             <div className="h-full rounded-lg hover:scale-105 transition-transform duration-300">
//               <div className="flex flex-col h-full">
//                 <div className="h-48 flex items-center justify-center">
//                   {artifact.imageUrl && (
//                     <div className="w-full h-48 rounded-lg overflow-hidden">
//                       <img
//                         src={artifact.imageUrl}
//                         alt={artifact.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   )}
//                 </div>
//                 <div className="p-4 flex-grow">
//                   <h3 className="text-lg font-semibold mb-2 text-white">
//                     {artifact.name}
//                   </h3>
//                   <p className="text-[#A1E887] mb-2 capitalize">
//                     {artifact.site.name}
//                   </p>
//                   <p className="text-[#4B4E6D]">{artifact.description}</p>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }

//testing one out
export const ArtifactList = () => {
  const [artifacts, setArtifacts] = useState([])
  const [sites, setSites] = useState([])
  const [selectedSite, setSelectedSite] = useState("")

  useEffect(() => {
    getArtifacts().then(setArtifacts)
    getSites().then(setSites)
  }, [])

  const handleSiteChange = (event) => {
    setSelectedSite(event.target.value)
  }

  const filteredArtifacts = selectedSite
    ? artifacts.filter((artifact) => artifact.site.name === selectedSite)
    : artifacts

  return (
    <div>
      <div className="mb-4 bg-indigo-50 rounded-lg p-4">
        {/* bg-indigo-50 */}
        {/* bg-[#F9F9F9] */}
        <label htmlFor="site" className="block text-[#4B4E6D] font-bold mb-2">
          Filter by Site:
        </label>
        <select
          id="site"
          value={selectedSite}
          onChange={handleSiteChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-[#4B4E6D] leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">All Sites</option>
          {sites.map((site, index) => (
            <option key={index} value={site.name}>
              {site.name.charAt(0).toUpperCase() + site.name.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredArtifacts.map((artifact) => (
          <Link
            key={artifact.id}
            to={`/artifacts/${artifact.id}`}
            className="group bg-[#80B192] rounded-lg overflow-hidden"
          >
            <div className="h-full rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col h-full">
                <div className="h-48 flex items-center justify-center">
                  {artifact.imageUrl && (
                    <div className="w-full h-48 rounded-lg overflow-hidden">
                      <img
                        src={artifact.imageUrl}
                        alt={artifact.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
