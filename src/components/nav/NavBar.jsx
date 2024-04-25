import { NavLink, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <nav className="bg-[#372772] py-4 px-6 text-white flex justify-between items-center">
      <ul className="flex space-x-8">
        <li className="navbar__item">
          <NavLink
            className="hover:text-[#A1E8AF] transition-colors duration-300"
            to={"/sites"}
          >
            Sites
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            className="hover:text-[#A1E8AF] transition-colors duration-300"
            to={"/discoveries"}
          >
            Discoveries
          </NavLink>
        </li>
        {localStorage.getItem("discovery_token") === null && (
          <>
            <li className="navbar__item">
              <NavLink
                className="hover:text-[#A1E8AF] transition-colors duration-300"
                to={"/login"}
              >
                Login
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                className="hover:text-[#A1E8AF] transition-colors duration-300"
                to={"/register"}
              >
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
      {localStorage.getItem("discovery_token") !== null && (
        <div>
          <button
            className="hover:text-[#3A2449] transition-colors duration-300"
            onClick={() => {
              localStorage.removeItem("discovery_token")
              navigate("/login")
            }}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  )
}
