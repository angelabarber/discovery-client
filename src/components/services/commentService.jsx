export const createComment = (commentObj) => {
  return fetch("http://localhost:8000/comments", {
    method: "POST",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("discovery_token")).token
      }`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commentObj),
  })
}
