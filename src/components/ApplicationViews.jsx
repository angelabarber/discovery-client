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
          <Route path="/artifacts" element={<ArtifactList />} />
          <Route path="/artifacts/new" element={<ArtifactForm />} />
          <Route path="/artifacts/:id" element={<ArtifactDetails />} />
          <Route path="/artifacts/:id/edit" element={<ArtifactForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
