import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Chat from './Chat'
import LoginMain from './LoginMain'
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
