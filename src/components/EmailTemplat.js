import React, { useState } from 'react'
import './EmailTemplat.scss'
import UserServices from '../services/UserServices'
import CloseIcon from '@material-ui/icons/Close'
import {
  IconButton,
  Snackbar,
  Button,
  TextField,
  InputBase,
  Backdrop,
  CircularProgress,
  makeStyles,
} from '@material-ui/core'

const userService = new UserServices()

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

export function EmailTemplat() {
  const classes = useStyles()

  const [To, setTo] = useState('')
  const [Subject, setSubject] = useState('')
  const [Body, setBody] = useState('')
  const [open, setopen] = useState(false)
  const [messageInfo, setmessageInfo] = useState('')
  const [BackDrop, setBackDrop] = useState(false)

  const handleChanges = (event) => {
    const { name, value } = event.target

    console.log('name : ' + name + ' value : ' + value)

    switch (name) {
      case 'To':
        setTo(value)
        break
      case 'Subject':
        setSubject(value)
        break
      case 'Body':
        setBody(value)
        break
      default:
        break
    }
    console.log('To : ' + To + ' Subject : ' + Subject + ' Body : ' + Body)
  }

  const handleSubmit = () => {
    console.log('handle Submit Calling')
    if (To.length > 0) {
      console.log('To : ' + To)
      if (Subject.length > 0) {
        console.log('Subject : ' + Subject)
        setBackDrop(true)
        const data = {
          emailId: To.trim(),
          subject: Subject.trim(),
          body: Body,
        }
        userService
          .SendEmail(data)
          .then((data) => {
            console.log(data.data)
            setBackDrop(false)
            setopen(true)
            setmessageInfo(data.data.message)
          })
          .catch((error) => {
            console.log(error)
            setBackDrop(false)
            setopen(true)
            // setmessageInfo(error.data.message)
          })
      } else {
        console.log('Empty Subject')
      }
    } else {
      console.log('Empty To Field')
    }
  }

  const handleClose = () => {
    setBackDrop(false)
    setopen(false)
  }

  return (
    <div className="Container">
      <div className="SubContainer">
        <div className="Header">Create Email</div>
        <div className="body">
          <div className="Subbody">
            <TextField
              autoFocus
              className="text"
              placeholder="To"
              size="small"
              name="To"
              value={To}
              onChange={(e) => {
                handleChanges(e)
              }}
            />
            <TextField
              className="text"
              placeholder="Subject"
              size="small"
              name="Subject"
              value={Subject}
              onChange={(e) => {
                handleChanges(e)
              }}
            />
            <InputBase
              multiline
              rows={18}
              variant="outlined"
              className="multiText"
              name="Body"
              value={Body}
              onChange={(e) => {
                handleChanges(e)
              }}
            />
          </div>
          <div className="Buttons">
            <Button
              className="Send"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Send
            </Button>
          </div>
          <Backdrop
            className={classes.backdrop}
            open={BackDrop}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      </div>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={messageInfo ? messageInfo : undefined}
        action={
          <React.Fragment>
            <IconButton
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  )
}
export default EmailTemplat
