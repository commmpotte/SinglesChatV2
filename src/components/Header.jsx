import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Nav, Navbar, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Header() {
  const getUsername = sessionStorage.getItem('username')
  const handleClick = () => {
    sessionStorage.clear()
    window.location.reload()
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="p-1 text-bg-dark mb-5 text-center">
      <Navbar className="navbar p-2 text-bg-dark ps-md-5 pe-md-5 fixed-top m-auto">
        <Container className="d-flex flex-wrap align-items-center ">
          <Navbar.Brand href="/" className="navbar-brand">
            <h3 className="" style={{ color: 'white' }}>
              SinglesChat
            </h3>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="justify-content-end" id="responsive-navbar-nav">
            <Nav className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-end mb-md-0">
              {!getUsername &&
                (screenWidth > 768 ? (
                  <>
                    <Button className="btn btn-info me-2">
                      <Link
                        className="text-decoration-none"
                        to="/login"
                        style={{ color: 'white' }}
                      >
                        Login
                      </Link>
                    </Button>
                    <Button className="btn btn-info">
                      <Link
                        className="text-decoration-none"
                        to="/login"
                        style={{ color: 'white' }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        New Tab
                      </Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn btn-info d-flex align-items-center p-1 me-2">
                      <Link to="/login" style={{ color: 'white' }}>
                        <i
                          className="material-symbols-outlined align-items-center"
                          style={{ paddingTop: '0.35rem', color: 'white' }}
                        >
                          login
                        </i>
                      </Link>
                    </Button>
                    <Button className="btn btn-info p-1">
                      <Link
                        to="/login"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="material-symbols-outlined align-items-center "
                          style={{ paddingTop: '0.35rem', color: 'white' }}
                        >
                          open_in_new
                        </i>
                      </Link>
                    </Button>
                  </>
                ))}

              {getUsername &&
                (screenWidth > 768 ? (
                  <>
                    <Button className="btn btn-info me-2" onClick={handleClick}>
                      <Link
                        className="text-decoration-none"
                        to="/login"
                        style={{ color: 'white' }}
                      >
                        Logout
                      </Link>
                    </Button>

                    <Button className="btn btn-info">
                      <Link
                        className="text-decoration-none"
                        to="/login"
                        style={{ color: 'white' }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        New Tab
                      </Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className="btn btn-info d-flex align-items-center p-1 me-2"
                      onClick={handleClick}
                    >
                      <Link to="/login">
                        <i
                          className="material-symbols-outlined align-items-center"
                          style={{ paddingTop: '0.35rem', color: 'white' }}
                        >
                          logout
                        </i>
                      </Link>
                    </Button>

                    <Button className="btn btn-info p-1">
                      <Link
                        to="/login"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="material-symbols-outlined align-items-center "
                          style={{ paddingTop: '0.35rem', color: 'white' }}
                        >
                          open_in_new
                        </i>
                      </Link>
                    </Button>
                  </>
                ))}
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
