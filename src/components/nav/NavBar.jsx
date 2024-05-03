import { NavLink, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <nav className="bg-[#493548] py-4 px-6 text-white flex justify-between items-center">
      <ul className="flex flex-wrap space-x-12 items-center">
        <li className="navbar__item">
          <NavLink
            className="hover:text-[#A1E887] transition-colors duration-300"
            to={"/sites"}
          >
            Sites
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            className="hover:text-[#A1E887] transition-colors duration-300"
            to={"/artifacts"}
          >
            Discoveries
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            className="hover:text-[#A1E887] transition-colors duration-300"
            to={"/artifacts/new"}
          >
            New Discovery
          </NavLink>
        </li>
        {localStorage.getItem("discovery_token") === null && (
          <>
            <li className="navbar__item">
              <NavLink
                className="hover:text-[#A1E887] transition-colors duration-300"
                to={"/login"}
              >
                Login
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                className="hover:text-[#A1E887] transition-colors duration-300"
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
            className="hover:text-[#80B192] transition-colors duration-300"
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

//with green buttons around the links when you hover over them//
// export const NavBar = () => {
//   const navigate = useNavigate()
//   return (
//     <nav className="bg-[#493548] py-4 px-6 text-white flex justify-between items-center">
//       <ul className="flex flex-wrap space-x-12 items-center">
//         <li className="navbar__item">
//           <NavLink
//             className="hover:text-[#A1E887] transition-colors duration-300 px-3 py-2 rounded-md border border-transparent hover:border-[#A1E887]"
//             to={"/sites"}
//           >
//             Sites
//           </NavLink>
//         </li>
//         <li className="navbar__item">
//           <NavLink
//             className="hover:text-[#A1E887] transition-colors duration-300 px-3 py-2 rounded-md border border-transparent hover:border-[#A1E887]"
//             to={"/artifacts"}
//           >
//             Discoveries
//           </NavLink>
//         </li>
//         <li className="navbar__item">
//           <NavLink
//             className="hover:text-[#A1E887] transition-colors duration-300 px-3 py-2 rounded-md border border-transparent hover:border-[#A1E887]"
//             to={"/artifacts/new"}
//           >
//             New Discovery
//           </NavLink>
//         </li>
//         {localStorage.getItem("discovery_token") === null && (
//           <>
//             <li className="navbar__item">
//               <NavLink
//                 className="hover:text-[#A1E887] transition-colors duration-300 px-3 py-2 rounded-md border border-transparent hover:border-[#A1E887]"
//                 to={"/login"}
//               >
//                 Login
//               </NavLink>
//             </li>
//             <li className="navbar__item">
//               <NavLink
//                 className="hover:text-[#A1E887] transition-colors duration-300 px-3 py-2 rounded-md border border-transparent hover:border-[#A1E887]"
//                 to={"/register"}
//               >
//                 Register
//               </NavLink>
//             </li>
//           </>
//         )}
//       </ul>
//       {localStorage.getItem("discovery_token") !== null && (
//         <div>
//           <button
//             className="hover:text-[#80B192] transition-colors duration-300"
//             onClick={() => {
//               localStorage.removeItem("discovery_token")
//               navigate("/login")
//             }}
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </nav>
//   )
// }
