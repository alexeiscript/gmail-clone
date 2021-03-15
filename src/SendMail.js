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
        <input placeholder="To" type="text"/>
        <input placeholder="Subject" type="text"/>
        <input placeholder="Message..." type="text" className="sendMail_message" />

        <div className="sendMail_options">
          <Button 
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >Send</Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
