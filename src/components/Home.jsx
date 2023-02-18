import React from 'react'
import LoginModal from './LoginModal'

function Home() {
  const getUsername = sessionStorage.getItem('username')

  if (getUsername) {
    return <Chat />
  } else {
    return <LoginModal />
  }
}

export default Home
