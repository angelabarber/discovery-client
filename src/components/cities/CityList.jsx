import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getCities } from "../services/cityService.jsx"

export const CityList = () => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    getCities().then(setCities)
  }, [])

  return (
    <>
      <section>
        <ul>
          {cities.map((city) => (
            <li key={city.id}>
              <Link to={`/sites/${city.id}`}>{city.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
