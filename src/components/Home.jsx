import React from 'react'
import Chat from './Chat'
import LoginMain from './LoginMain'

function Home() {
  const getUsername = sessionStorage.getItem('username')

  if (getUsername) {
    return <Chat />
  } else {
    return <LoginMain />
  }
}

export default Home
