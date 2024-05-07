import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getCities } from "../services/cityService.jsx"

// export const CityList = () => {
//   const [cities, setCities] = useState([])

//   useEffect(() => {
//     getCities().then(setCities)
//   }, [])

//   return (
//     <>
//       <section>
//         <ul>
//           {cities.map((city) => (
//             <li key={city.id}>
//               <Link to={`/sites/${city.id}`}>{city.name}</Link>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </>
//   )
// }

// export const CityList = () => {
//   const [cities, setCities] = useState([])

//   useEffect(() => {
//     getCities().then(setCities)
//   }, [])

//   return (
//     <div className="flex flex-col ml-8">
//       {cities.map((city) => (
//         <Link
//           key={city.id}
//           to={`/sites/${city.id}`}
//           className="group bg-[#80B192] rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden mb-4 w-64"
//         >
//           <div className="p-4 flex items-center justify-start h-full rounded-lg hover:scale-105 transition-transform duration-300">
//             <h3 className="text-lg font-semibold text-white">{city.name}</h3>
//           </div>
//         </Link>
//       ))}
//     </div>
//   )
// }

// export const CityList = () => {
//   const [cities, setCities] = useState([])

//   useEffect(() => {
//     getCities().then(setCities)
//   }, [])

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       {cities.map((city) => (
//         <Link
//           key={city.id}
//           to={`/sites/${city.id}`}
//           className="group bg-[#80B192] rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden mb-4 w-64 text-center"
//         >
//           <div className="p-4 flex items-center justify-center h-full rounded-lg hover:scale-105 transition-transform duration-300">
//             <h3 className="text-lg font-semibold text-white">{city.name}</h3>
//           </div>
//         </Link>
//       ))}
//     </div>
//   )
// }

export const CityList = () => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    getCities().then(setCities)
  }, [])

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <div className="flex flex-col items-center -mt-16">
        {cities.map((city) => (
          <Link
            key={city.id}
            to={`/sites/${city.id}`}
            className="group bg-[#80B192] rounded-lg hover:shadow-lg transition-shadow duration-300 overflow-hidden mb-4 w-64 text-center"
          >
            <div className="p-4 flex items-center justify-center h-full rounded-lg hover:scale-105 transition-transform duration-300">
              <h3 className="text-lg font-semibold text-white">{city.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
