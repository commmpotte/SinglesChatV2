import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LoginMain() {
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
   <div className="d-flex align-items-center" style={{ height: '100vh' }}>
     <div className="w-100 m-auto">
       <div className=" text-center">
         <h3 className="display-5 fw-bold ">Welcome to Singles Chat!</h3>
         <h4 className="display-6 m-3">*put your username here*</h4>
       </div>
       <main className="form-signin">
         <form
           action=""
           className="form text-center"
           style={{ maxWidth: '260px', margin: 'auto' }}
         >
           <div className="form-floating">
             <input
               onChange={handleNameChange}
               value={username}
               className="form-control mb-2"
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
           <p className="mt-2 mb-3 text-muted">©2023</p>
         </form>
       </main>
     </div>
   </div>
 )
}

export default LoginMain
