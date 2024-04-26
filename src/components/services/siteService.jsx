export const getSites = () => {
  return fetch("http://localhost:8000/sites", {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("discovery_token")).token
      }`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
}
