import React, { useRef, useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function Login1() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login, currentUser } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const verfieUserAuth = () => {
    if (currentUser) {
      navigate("/admin")
    }
  }


  useEffect(() => {
    verfieUserAuth()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      setLoading(false)
      navigate("/admin")


    } catch {
      setError("Failed to log in")

      setLoading(false)

    }


  }

  return (
    <>
      <div className="CenteredContainer" >
        <div className="CardContainer">
          <div className="Card">
            <div className="CardBody">
              <h2 className="title text-center mb-3">Log In</h2>
              {error && <div role="alert" class="fade alert alert-danger show">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="FormGroup" id="email">
                  <label className="FormLabel" >Email</label>
                  <input className="FormControl" type="email" ref={emailRef} required />
                </div>
                <div className="FormGroup" id="password">
                  <label className="FormLabel" >Password</label >
                  <input className="FormControl" type="password" ref={passwordRef} required />
                </div>
                <button className="w-100 btn btn-primary mt-3" disabled={loading} type="submit">
                  Log In
                </button>
              </form>
              <div className="w-100 text-center mt-3">
                <Link to="/admin/forgot-password">Forgot Password?</Link>
              </div>
            </div>

          </div>

        </div>

      </div>

    </>
  )
}
