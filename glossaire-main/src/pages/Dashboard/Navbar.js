import React, { useState } from "react"
import { useAuth } from "../../auth/contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
const Navbar = () => {
  const [error, setError] = useState("")
  const { logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")

    try {

      await logout()
      navigate("/admin/login")
    } catch {
      setError("Failed to log out")
    }
  }
  return (
    <>
      <ul className="nav-bar">
        <li>
          <Link to="/admin">
            <h2 className="navTitle">admin page</h2>
          </Link>
        </li>
        <li>
          <Link to="/admin/update-profile" className="">
            Update Profile
          </Link>
        </li>
        <li>
          <a href="#" onClick={handleLogout}>Log Out</a>
        </li>

      </ul>
      {error && <div role="alert" class="fade alert alert-danger show error">{error}</div>}
    </>



  )
}
export default Navbar




