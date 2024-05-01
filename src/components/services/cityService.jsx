export const getCities = () => {
  return fetch("http://localhost:8000/cities", {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("discovery_token")).token
      }`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
}

export const getCityByCityId = (id) => {
  return fetch(`http://localhost:8000/cities/${id}`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("discovery_token")).token
      }`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
}
