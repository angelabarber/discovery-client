import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getCityByCityId } from "../services/cityService.jsx"

export const CityDetails = () => {
  const [city, setCity] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getCityByCityId(id).then(setCity)
  }, [id])

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
        {city.imageUrl && (
          <img
            src={city.imageUrl}
            alt={city.name}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{city.name}</h1>
          <p className="text-gray-600 mb-4">{city.location}</p>
          <p className="text-gray-700 mb-4">{city.significance}</p>
        </div>
      </div>
    </div>
  )
}
