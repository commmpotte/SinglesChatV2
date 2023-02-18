import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import NotFound from './components/NotFound'
import LoginMain from './components/LoginMain'
import Chat from './components/Chat'

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Chat />} />
              <Route path="*" element={<NotFound />} />
              <Route path="login" element={<LoginMain />} />
            </Route>
          </Routes>
        </Router>
      </div>
  )
}

export default App
