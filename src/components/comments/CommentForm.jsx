import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createComment } from "../services/commentService.jsx"

export const CommentForm = () => {
  const [comment, setComment] = useState({
    artifact_id: 0,
    text: "",
  })
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setComment({
      ...comment,
      artifact_id: parseInt(id),
    })
  }, [id])

  const handleChange = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    createComment(comment).then(() => {
      navigate(`/artifacts/${id}`)
    })
  }

  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="commentText"
          className="block text-gray-700 font-semibold mb-2"
        >
          Review:
        </label>
        <textarea
          id="commentText"
          name="text"
          value={comment.text}
          onChange={handleChange}
          className="w-full border-gray-300 rounded-md focus:ring-blue-500 p-2"
        ></textarea>
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Save Review
      </button>
    </>
  )
}
