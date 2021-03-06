import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close'
import Button from '@material-ui/core/Button'

function SendMail() {
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail_close" />
      </div>
      <form action="">
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>

        <div className="sendMail_options">
          <Button>Send</Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
