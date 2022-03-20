import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword1() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="CenteredContainer" >
        <div className="CardContainer">
          <div className="Card">
            <div className="CardBody">
              <h2 className="title text-center mb-3">Password Reset</h2>
              {error && <div role="alert" class="fade alert alert-danger show">{error}</div>}
              {message && <div role="alert" class="fade alert alert-success show">{message}</div>}
              <form onSubmit={handleSubmit}>
                <div className="FormGroup" id="email">
                  <label className="FormLabel" >Email</label>
                  <input className="FormControl" type="email" ref={emailRef} required />
                </div>

                <button className="w-100 btn btn-primary mt-3" disabled={loading} type="submit">
                  Reset Password
                </button>

              </form>
              <div className="w-100 text-center mt-3">
                <Link to="/admin/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
