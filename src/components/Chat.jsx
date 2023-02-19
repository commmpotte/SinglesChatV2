import React from 'react'
import ChatWindow from './ChatWindow'
import 'bootstrap/dist/css/bootstrap.min.css'
import SendMessage from './SendMessage'

function Chat() {
  return (
    <section className="container wrapper vh-100 ps-md-5 pe-md-5 pt-1">
      <div className="main bg-white mt-4 p-0 ps-md-5 pe-md-5 m-auto vh-100">
        <div
          className="p-4 border rounded-5 m-auto "
          style={{ minWidth: '300px' }}
        >
          <div className="row">
            <ChatWindow />
          </div>
          <SendMessage />
        </div>
      </div>
    </section>
  )
}

export default Chat
