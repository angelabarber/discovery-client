import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized.jsx"
import { Login } from "./auth/Login.jsx"
import App from "../App.jsx"
import { Register } from "./auth/Register.jsx"
import { ArtifactList } from "./artifacts/ArtifactList.jsx"
import { ArtifactForm } from "./artifacts/ArtifactForm.jsx"
import { ArtifactDetails } from "./artifacts/ArtifactDetails.jsx"

export const ApplicationViews = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Authorized />}>
          <Route path="/" element={<App />} />
          <Route path="/artifacts">
            <Route index element={<ArtifactList />} />
            <Route path="new" element={<ArtifactForm />} />
            <Route path=":id" element={<ArtifactDetails />} />
            <Route path=":id/edit" element={<ArtifactForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
