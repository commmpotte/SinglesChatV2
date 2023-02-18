import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LoginModal() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleNameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sessionStorage.setItem('username', username)
    sessionStorage.setItem('myTab', 'true')
    navigate('/')
    window.location.reload()
  }

  return (
    <div
      className="modal modal-signin position-static d-block py-5"
      tabIndex="-1"
      role="dialog"
      id="modalSignin"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-3 ps-md-5 pe-md-5pb-4 border-bottom-0">
            <h1 className="fw-bold mb-0 fs-2">Welcome to Singles Chat!</h1>
          </div>

          <div className="modal-body p-3 ps-md-5 pe-md-5 pt-0">
            <form>
              <div className="form-floating mb-3">
                <input
                  onChange={handleNameChange}
                  value={username}
                  className="form-control rounded-3"
                  type="text"
                  placeholder="UserName"
                />

                <label>UserName</label>
              </div>
              <Button
                className="w-100 btn btn-lg btn-info mt-2"
                onClick={handleSubmit}
                type="submit"
              >
                GO
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
