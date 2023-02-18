import React from 'react'
import { useState, useEffect } from 'react'
import { Dexie } from 'dexie'
import 'bootstrap/dist/css/bootstrap.min.css'

const db = new Dexie('chatApp')
db.version(1).stores({
  chat: `++id, message, author`,
})
const { chat } = db
const getUsername = sessionStorage.getItem('username')

function SendMessage() {
  useEffect(() => {
    chat
      .where('author')
      .equals(getUsername)
      .toArray()
      .then((messages) => {
        const authorsArray = []

        messages.forEach((message) => {
          if (!authorsArray.includes(message.author)) {
            authorsArray.push(message.author)
          }
        })
      })
  }, [])

  const addMessage = async (event) => {
    event.preventDefault()
    const messageField = document.querySelector('#messageInput')

    await chat.add({
      message: messageField.value,
      author: getUsername,
    })
    messageField.value = ''
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
    <div className="d-flex w-100 align-items-center mt-2 mb-2">
      <div className="m-2 w-100">
        <form className="input-group mb-0 mw-100 text" onSubmit={addMessage}>
          <input
            id="messageInput"
            type="text"
            className="form-control bg-white"
            placeholder="Write your message"
            rows="4"
            required
          />
          {screenWidth > 768 ? (
            <button type="submit" className="btn btn-info">
              Send
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-info d-flex"
              style={{ padding: '0.35rem' }}
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          )}
        </form>
      </div>
    </div>
  )
}

export default SendMessage
