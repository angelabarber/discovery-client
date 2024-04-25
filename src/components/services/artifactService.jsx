export const getArtifacts = () => {
  return fetch("http://localhost:8000/artifacts", {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("discovery_token")).token
      }`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
}
