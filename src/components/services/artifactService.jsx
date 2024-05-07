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

export const createArtifact = (artifactObj) => {
  return fetch("http://localhost:8000/artifacts", {
    method: "POST",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("discovery_token")).token
      }`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(artifactObj),
  })
}

export const getArtifactByArtifactId = (id) => {
  return fetch(`http://localhost:8000/artifacts/${id}`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("discovery_token")).token
      }`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json())
}

export const updateArtifact = (id, artifactObj) => {
  console.log(artifactObj)
  return fetch(`http://localhost:8000/artifacts/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("discovery_token")).token
      }`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(artifactObj),
  })
}

export const deleteArtifact = (id) => {
  return fetch(`http://localhost:8000/artifacts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("discovery_token")).token
      }`,
      "Content-Type": "application/json",
    },
  })
}
