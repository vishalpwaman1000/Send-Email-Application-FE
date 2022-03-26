import React, { useState } from 'react'
import './EmailTemplat.scss'
import UserServices from '../services/UserServices'
import { CloseIcon } from '@material-ui/icons/Close'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import TextFieldsIcon from '@material-ui/icons/TextFields'
import FormatBoldIcon from '@material-ui/icons/FormatBold'
import FormatItalicIcon from '@material-ui/icons/FormatItalic'
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined'
import FormatColorTextIcon from '@material-ui/icons/FormatColorText'
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS'
import FormatClearIcon from '@material-ui/icons/FormatClear'
import {
  IconButton,
  Snackbar,
  Button,
  TextField,
  InputBase,
  Backdrop,
  CircularProgress,
  makeStyles,
  Menu,
  MenuItem,
} from '@material-ui/core'

const userService = new UserServices()
export const validEmail = new RegExp(
  '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
)

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

export function EmailTemplat() {
  const classes = useStyles()

  const [To, setTo] = useState('')
  const [ToFlag, setToFlag] = useState(false)
  const [Subject, setSubject] = useState('')
  const [Body, setBody] = useState('')
  const [open, setopen] = useState(false)
  const [messageInfo, setmessageInfo] = useState('')
  const [BackDrop, setBackDrop] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [anchorE2, setAnchorE2] = React.useState(null)
  const [anchorE3, setAnchorE3] = React.useState(null)

  const handleTo = (e) => {
    setToFlag(true)
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget)
  }

  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
    setAnchorE2(null)
    setAnchorE3(null)
  }

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
              placeholder={!ToFlag ? 'Recipients' : 'To'}
              size="small"
              name="To"
              value={To}
              onChange={(e) => {
                handleChanges(e)
              }}
              onClick={(e) => {
                handleTo(e)
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
            <div className="EditingTool">
              <div className="Sub-Edit">
                <div className="Font-Style">
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    id="simple-menu"
                    onClick={handleClick}
                  >
                    Sans Serif <ArrowDropDownIcon />
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                  >
                    <MenuItem
                      onClick={handleCloseMenu}
                      style={{ fontFamily: 'sans-serif' }}
                    >
                      Sans Serif
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseMenu}
                      style={{ fontFamily: 'sarif' }}
                    >
                      Serif
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseMenu}
                      style={{ fontFamily: 'Comic Sans MS' }}
                    >
                      Comic Sans MS
                    </MenuItem>
                  </Menu>
                </div>
                <div className="Font-Size">
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    id="simple-menu"
                    onClick={handleClick2}
                  >
                    <TextFieldsIcon /> <ArrowDropDownIcon />
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorE2}
                    keepMounted
                    open={Boolean(anchorE2)}
                    onClose={handleCloseMenu}
                  >
                    <MenuItem
                      onClick={handleCloseMenu}
                      style={{ fontSize: '10px' }}
                    >
                      Small
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseMenu}
                      style={{ fontSize: '15px' }}
                    >
                      Normal
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseMenu}
                      style={{ fontSize: '20px' }}
                    >
                      Large
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseMenu}
                      style={{ fontSize: '25px' }}
                    >
                      Huge
                    </MenuItem>
                  </Menu>
                </div>
                <IconButton
                  aria-label="upload picture"
                  component="span"
                  // onClick={handleClickBold}
                >
                  <FormatBoldIcon />
                </IconButton>
                <IconButton
                  aria-label="upload picture"
                  component="span"
                  // onClick={handleClickBold}
                >
                  <FormatItalicIcon />
                </IconButton>
                <IconButton
                  aria-label="upload picture"
                  component="span"
                  // onClick={handleClickBold}
                >
                  <FormatUnderlinedIcon />
                </IconButton>
                <div className="TextColorFormat">
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    id="simple-menu"
                    onClick={handleClick3}
                  >
                    <FormatColorTextIcon /> <ArrowDropDownIcon />
                  </Button>
                  <Menu
                    className="simple-TextColorMenu"
                    anchorEl={anchorE3}
                    keepMounted
                    open={Boolean(anchorE3)}
                    onClose={handleCloseMenu}
                  >
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight:'600',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <div>Text Color</div>
                      <div style={{ display: 'flex', flexDirection: 'row', margin:'8px 0 0 0' }}>
                        <div
                          className="A1"
                          style={{ backgroundColor: '#ffffff' }}
                        ></div>
                        <div
                          className="A1"
                          style={{ backgroundColor: '#000000' }}
                        ></div>
                      </div>
                    </div>

                    <MenuItem
                      className="simple-TextColorMenuItem"
                      onClick={handleCloseMenu}
                      style={{
                        height: '120px',
                        width: '120px',
                        padding: '12px',
                        display: 'flex',
                        flexWrap: 'wrap',
                      }}
                    >
                      <div
                        className="A1"
                        style={{ backgroundColor: '#ff0000' }}
                      ></div>
                      <div
                        className="A1"
                        style={{ backgroundColor: '#ff9900' }}
                      ></div>
                      <div
                        className="A1"
                        style={{ backgroundColor: '#ffff00' }}
                      ></div>
                      <div
                        className="A1"
                        style={{ backgroundColor: '#00ff00' }}
                      ></div>
                      <div
                        className="A1"
                        style={{ backgroundColor: '#00ffff' }}
                      ></div>
                      <div
                        className="A1"
                        style={{ backgroundColor: '#0000ff' }}
                      ></div>
                      <div
                        className="A1"
                        style={{ backgroundColor: '#9900ff' }}
                      ></div>
                      <div
                        className="A1"
                        style={{ backgroundColor: '#ff00ff' }}
                      ></div>
                      <div
                        className="A1"
                        style={{ backgroundColor: '#C0C0C0' }}
                      ></div>
                      <div
                        className="A1"
                        style={{ backgroundColor: '#808080' }}
                      ></div>
                      <div
                        className="A1"
                        style={{ backgroundColor: '#800000' }}
                      ></div>
                      <div
                        className="A1"
                        style={{ backgroundColor: '#808000' }}
                      ></div>
                      <div
                        className="A1"
                        style={{ backgroundColor: '#008000' }}
                      ></div>
                      <div
                        className="A1"
                        style={{ backgroundColor: '#800080' }}
                      ></div>
                      <div
                        className="A1"
                        style={{ backgroundColor: '#008080' }}
                      ></div>
                      <div
                        className="A1"
                        style={{ backgroundColor: '#000080' }}
                      ></div>
                    </MenuItem>
                  </Menu>
                </div>
                <IconButton
                  aria-label="upload picture"
                  component="span"
                  onClick={handleClick3}
                >
                  <StrikethroughSIcon />
                </IconButton>
                <IconButton
                  aria-label="upload picture"
                  component="span"
                  onClick={handleClick3}
                >
                  <FormatClearIcon />
                </IconButton>
              </div>
            </div>
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
