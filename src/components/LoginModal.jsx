import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LoginModal() {
  return (
    <div
      className="modal modal-signin position-static d-block py-5"
      tabIndex="-1"
      role="dialog"
      id="modalSignin"
    >
      <div className="modal-dialog text-center" role="document">
        <div className="modal-content rounded-4 shadow ">
          <div className="modal-header p-3 ps-lg-5 pe-lg-5 pb-1 text-center">
            <h1 className="fw-bold m-auto fs-2">Welcome to Singles Chat!</h1>
          </div>
          <div className="modal-body">
            <h2>*to continue you need to login*</h2>
          </div>

          <div className="modal-body p-3 ps-md-5 pe-md-5 pt-0 ">
            <Button className="w-100 btn btn-lg btn-info mt-2" type="button">
              <Link
                className="text-decoration-none"
                style={{ color: 'white' }}
                to="/login"
              >
                GO TO LOGIN PAGE
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
