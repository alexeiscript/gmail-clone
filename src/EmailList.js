import React from 'react'
import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropdownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import EmailRow from './EmailRow'

import './EmailList.css'

import Section from './Section'

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList_settings">
        <div className="emailList_settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropdownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="emailList_settingsRight">
          <Checkbox />
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList_sections">
        <Section Icon={InboxIcon} title="Primary" color="red" required selected />
        <Section Icon={PeopleIcon} title="Social" color="blue" required />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" required />
      </div>

      <div className="emailList_list">
        <EmailRow 
          title="Twitch"
          subject="Hey fellow streamer"
          description="This is a test description"
          time="10pm"
        />
      </div>
    </div>
  )
}

export default EmailList
