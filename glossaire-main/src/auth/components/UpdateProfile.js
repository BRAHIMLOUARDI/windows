import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function UpdateProfile1() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        navigate("/admin")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <div className="CenteredContainer" >
        <div className="CardContainer">
          <div className="Card">
            <div className="CardBody">
              <h2 className="title text-center mb-3">Update Profile</h2>
              {error && <div role="alert" class="fade alert alert-danger show">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="FormGroup" id="email">
                  <label className="FormLabel" >Email</label>
                  <input className="FormControl"
                    type="email"
                    placeholder="Leave blank to keep the same"
                    ref={emailRef} required
                  />
                </div>
                <div className="FormGroup" id="password">
                  <label className="FormLabel" >Password</label >
                  <input className="FormControl"
                    type="password"
                    placeholder="Leave blank to keep the same"
                    ref={passwordRef} required
                  />
                </div>
                <div className="FormGroup" id="password-confirm">
                  <label className="FormLabel" >Password Confirmation</label >
                  <input className="FormControl"
                    type="password"
                    placeholder="Leave blank to keep the same"
                    ref={passwordConfirmRef}
                  />
                </div>
                <button className="w-100 btn btn-primary mt-3" disabled={loading} type="submit">
                  Update
                </button>
              </form>
            </div>
          </div>
          <div className="w-100 text-center mt-2">
            <Link to="/admin" className="link">Cancel</Link>
          </div>
        </div>
      </div>
    </>
  )
}

