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
import { SwitchVideo } from '@material-ui/icons'

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
  const [ToFunctionality, setToFunctinality] = React.useState({
    Bold: '400',
    Italic: 'initial',
    Underline: 'none',
    Strike: 'none',
    FontStyle: 'Roboto',
    AllFontStyle: 'initial Sans Serif',
    FontSize: '16px',
    FontColor: 'Black',
  })

  const [ToFunctionalityFlag, setToFunctinalityFlag] = React.useState({
    Bold: true,
    Italic: true,
    Underline: false,
    Strike: false,
    TextFeatureOn: false,
  })

  const handleTo = (e) => {
    setToFlag(true)
  }

  const handleClick = (event) => {
    console.log('Event Value : ', event.currentTarget)
    setAnchorEl(event.currentTarget)
  }

  // const SetFontStyle = (key) => {
  //   console.log('Font Style : ', key)
  //   setToFunctinality({ ...ToFunctionality, FontStyle: key })
  // }

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget)
  }

  const handleClickToBold = (e) => {
    console.log('Bold Flag 1 : ', ToFunctionalityFlag.Bold)
    let Value = ''
    setToFunctinalityFlag({
      ...ToFunctionalityFlag,
      Bold: !ToFunctionalityFlag.Bold,
    })
    if (ToFunctionalityFlag.Bold) {
      console.log('Bold true')
      Value = '600'
    } else {
      console.log('Bold false')
      Value = '400'
    }
    setToFunctinality({ ...ToFunctionality, Bold: Value })
    console.log('Set Value : ', ToFunctionality)
  }

  const handleClickToItalic = (e) => {
    console.log('Italic Flag 1 : ', ToFunctionalityFlag.Italic)
    let Value = ''
    setToFunctinalityFlag({
      ...ToFunctionalityFlag,
      Italic: !ToFunctionalityFlag.Italic,
    })
    if (ToFunctionalityFlag.Italic) {
      console.log('Italic true')
      Value = 'italic'
    } else {
      console.log('Italic false')
      Value = 'initial'
    }
    setToFunctinality({ ...ToFunctionality, Italic: Value })
  }

  const handleClickToStrike = (e) => {
    console.log(
      'Strike Flag 1 : ',
      ToFunctionalityFlag.Strike,
      ' Strike Value : ',
      ToFunctionality.Strike,
    )
    let Value = ''
    setToFunctinalityFlag({
      ...ToFunctionalityFlag,
      Strike: !ToFunctionalityFlag.Strike,
    })
    if (ToFunctionalityFlag.Strike) {
      console.log('Strike true')
      Value = 'line-through'
    } else {
      console.log('Strike false')
      Value = 'none'
    }
    setToFunctinality({ ...ToFunctionality, Strike: Value })
  }

  const handleClickToUnderline = (e) => {
    console.log('Underline Flag 1 : ', ToFunctionalityFlag.Underline)
    let Value = ''
    setToFunctinalityFlag({
      ...ToFunctionalityFlag,
      Underline: !ToFunctionalityFlag.Underline,
    })
    if (ToFunctionalityFlag.Underline) {
      console.log('Underline true')
      Value = 'underline'
    } else {
      console.log('Underline false')
      Value = 'none'
    }
    setToFunctinality({ ...ToFunctionality, Underline: Value })
  }

  const handleClickToClear = (e) => {
    console.log('Clear All text Functinality')
    setToFunctinality({ ...ToFunctionality, Underline: 'none' })
    setToFunctinality({ ...ToFunctionality, Strike: 'none' })
    setToFunctinality({ ...ToFunctionality, Italic: 'initial' })
    setToFunctinality({ ...ToFunctionality, Bold: '400' })
    setToFunctinality({ ...ToFunctionality, fontFamily: 'Roboto' })
    setToFunctinalityFlag({
      ...ToFunctionalityFlag,
      Underline: false,
      Strike: false,
      Italic: true,
      Bold: true,
    })
  }

  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget)
  }

  const handleCloseMenu1 = (event) => {
    setAnchorEl(null)
    let Value = ''
    console.log('Value ', event.target.getAttribute('value'))
    if (event.target.getAttribute('value') === null) {
      Value = ToFunctionality.FontStyle
    } else {
      Value = event.target.getAttribute('value')
    }

    setToFunctinality({
      ...ToFunctionality,
      FontStyle: Value,
    })
  }

  const handleCloseMenu2 = (event) => {
    setAnchorE2(null)
    console.log('Value ', event.target.getAttribute('value'))
    setToFunctinality({
      ...ToFunctionality,
      FontSize: event.target.getAttribute('value'),
    })
  }

  const handleCloseMenu3 = (event) => {
    setAnchorE3(null)
  }

  const ChangeBackGColor = (color) => {
    console.log('Selected Color : ', color)
    setToFunctinality({ ...ToFunctionality, FontColor: color })
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

  const handleTextFeatureOn = () => {
    setToFunctinalityFlag({
      ...ToFunctionalityFlag,
      TextFeatureOn: !ToFunctionalityFlag.TextFeatureOn,
    })
  }

  return (
    <div className="Container">
      <div className="SubContainer">
        <div className="Header">Create Email</div>
        <div className="body">
          <div className="Subbody">
            <TextField
              autoFocus
              autoComplete="off"
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
              autoComplete="off"
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
              style={
                // Strike : true && Underline : true
                ToFunctionalityFlag.Strike && ToFunctionalityFlag.Underline
                  ? {
                      fontWeight: ToFunctionality.Bold,
                      fontStyle: ToFunctionality.Italic,
                      fontFamily: ToFunctionality.FontStyle,
                      color: ToFunctionality.FontColor,
                      fontSize: ToFunctionality.FontSize,
                      textDecoration: 'underline line-through',
                    }
                  : // Strike : false && Underline : true
                  !ToFunctionalityFlag.Strike && ToFunctionalityFlag.Underline
                  ? {
                      fontWeight: ToFunctionality.Bold,
                      fontStyle: ToFunctionality.Italic,
                      fontFamily: ToFunctionality.FontStyle,
                      color: ToFunctionality.FontColor,
                      fontSize: ToFunctionality.FontSize,
                      textDecoration: 'underline',
                    }
                  : // Strike : true && Underline : false
                  ToFunctionalityFlag.Strike && !ToFunctionalityFlag.Underline
                  ? {
                      fontWeight: ToFunctionality.Bold,
                      fontStyle: ToFunctionality.Italic,
                      fontFamily: ToFunctionality.FontStyle,
                      color: ToFunctionality.FontColor,
                      fontSize: ToFunctionality.FontSize,
                      textDecoration: 'line-through',
                    }
                  : // Strike : false && Underline : false
                    {
                      fontWeight: ToFunctionality.Bold,
                      fontStyle: ToFunctionality.Italic,
                      fontFamily: ToFunctionality.FontStyle,
                      color: ToFunctionality.FontColor,
                      fontSize: ToFunctionality.FontSize,
                    }
              }
            />
            {ToFunctionalityFlag.TextFeatureOn ? (
              <div className="EditingTool">
                <div className="Sub-Edit">
                  <div className="Font-Style">
                    <Button
                      aria-controls="simple-FontMenu"
                      id="simple-menu"
                      onClick={handleClick}
                    >
                      {ToFunctionality.FontStyle} <ArrowDropDownIcon />
                    </Button>
                    <Menu
                      id="simple-FontMenu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleCloseMenu1}
                    >
                      <MenuItem
                        onClick={handleCloseMenu1}
                        style={{ fontFamily: 'Roboto' }}
                        value="Roboto"
                      >
                        Roboto
                      </MenuItem>
                      <MenuItem
                        onClick={handleCloseMenu1}
                        style={{ fontFamily: 'sans-serif' }}
                        value="Sans Serif"
                      >
                        Sans Serif
                      </MenuItem>
                      <MenuItem
                        onClick={handleCloseMenu1}
                        style={{ fontFamily: 'Comic Sans MS' }}
                        value="Comic Sans MS"
                      >
                        Comic Sans MS
                      </MenuItem>
                    </Menu>
                  </div>
                  <div className="Font-Size">
                    <Button id="simple-menu" onClick={handleClick2}>
                      <TextFieldsIcon /> <ArrowDropDownIcon />
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorE2}
                      keepMounted
                      open={Boolean(anchorE2)}
                      onClose={handleCloseMenu2}
                    >
                      <MenuItem
                        onClick={handleCloseMenu2}
                        style={{ fontSize: '10px' }}
                        value="8px"
                      >
                        Small
                      </MenuItem>
                      <MenuItem
                        onClick={handleCloseMenu2}
                        style={{ fontSize: '15px' }}
                        value="16px"
                      >
                        Normal
                      </MenuItem>
                      <MenuItem
                        onClick={handleCloseMenu2}
                        style={{ fontSize: '20px' }}
                        value="24px"
                      >
                        Large
                      </MenuItem>
                      <MenuItem
                        onClick={handleCloseMenu2}
                        style={{ fontSize: '25px' }}
                        value="32px"
                      >
                        Huge
                      </MenuItem>
                    </Menu>
                  </div>
                  <IconButton
                    className={!ToFunctionalityFlag.Bold ? 'IconButtonOn' : ''}
                    onClick={(e) => {
                      handleClickToBold(e)
                    }}
                  >
                    <FormatBoldIcon />
                  </IconButton>
                  <IconButton
                    className={
                      !ToFunctionalityFlag.Italic ? 'IconButtonOn' : ''
                    }
                    onClick={handleClickToItalic}
                  >
                    <FormatItalicIcon />
                  </IconButton>
                  <IconButton
                    className={
                      ToFunctionalityFlag.Underline ? 'IconButtonOn' : ''
                    }
                    onClick={handleClickToUnderline}
                  >
                    <FormatUnderlinedIcon />
                  </IconButton>
                  <div className="TextColorFormat">
                    <Button id="simple-menu" onClick={handleClick3}>
                      <FormatColorTextIcon /> <ArrowDropDownIcon />
                    </Button>
                    <Menu
                      className="simple-TextColorMenu"
                      anchorEl={anchorE3}
                      keepMounted
                      open={Boolean(anchorE3)}
                      onClose={handleCloseMenu3}
                    >
                      <div
                        style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'column',
                        }}
                      >
                        <div>Text Color</div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            margin: '8px 0 0 0',
                          }}
                        >
                          <div
                            className="A1"
                            onClick={() => {
                              ChangeBackGColor('#ffffff')
                            }}
                            style={{ backgroundColor: '#ffffff' }}
                          ></div>
                          <div
                            className="A1"
                            onClick={() => {
                              ChangeBackGColor('#000000')
                            }}
                            style={{ backgroundColor: '#000000' }}
                          ></div>
                        </div>
                      </div>

                      <MenuItem
                        className="simple-TextColorMenuItem"
                        onClick={handleCloseMenu3}
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
                          onClick={() => {
                            ChangeBackGColor('#ff0000')
                          }}
                          style={{ backgroundColor: '#ff0000' }}
                        ></div>
                        <div
                          className="A1"
                          onClick={() => {
                            ChangeBackGColor('#ff9900')
                          }}
                          style={{ backgroundColor: '#ff9900' }}
                        ></div>
                        <div
                          className="A1"
                          onClick={() => {
                            ChangeBackGColor('#ffff00')
                          }}
                          style={{ backgroundColor: '#ffff00' }}
                        ></div>
                        <div
                          className="A1"
                          onClick={() => {
                            ChangeBackGColor('#00ff00')
                          }}
                          style={{ backgroundColor: '#00ff00' }}
                        ></div>
                        <div
                          className="A1"
                          onClick={() => {
                            ChangeBackGColor('#00ffff')
                          }}
                          style={{ backgroundColor: '#00ffff' }}
                        ></div>
                        <div
                          className="A1"
                          onClick={() => {
                            ChangeBackGColor('#0000ff')
                          }}
                          style={{ backgroundColor: '#0000ff' }}
                        ></div>
                        <div
                          className="A1"
                          onClick={() => {
                            ChangeBackGColor('#9900ff')
                          }}
                          style={{ backgroundColor: '#9900ff' }}
                        ></div>
                        <div
                          className="A1"
                          onClick={() => {
                            ChangeBackGColor('#ff00ff')
                          }}
                          style={{ backgroundColor: '#ff00ff' }}
                        ></div>
                        <div
                          className="A1"
                          onClick={() => {
                            ChangeBackGColor('#C0C0C0')
                          }}
                          style={{ backgroundColor: '#C0C0C0' }}
                        ></div>
                        <div
                          className="A1"
                          onClick={() => {
                            ChangeBackGColor('#808080')
                          }}
                          style={{ backgroundColor: '#808080' }}
                        ></div>
                        <div
                          className="A1"
                          onClick={() => {
                            ChangeBackGColor('#800000')
                          }}
                          style={{ backgroundColor: '#800000' }}
                        ></div>
                        <div
                          className="A1"
                          onClick={() => {
                            ChangeBackGColor('#808000')
                          }}
                          style={{ backgroundColor: '#808000' }}
                        ></div>
                        <div
                          className="A1"
                          onClick={() => {
                            ChangeBackGColor('#008000')
                          }}
                          style={{ backgroundColor: '#008000' }}
                        ></div>
                        <div
                          className="A1"
                          onClick={() => {
                            ChangeBackGColor('#800080')
                          }}
                          style={{ backgroundColor: '#800080' }}
                        ></div>
                        <div
                          className="A1"
                          onClick={() => {
                            ChangeBackGColor('#008080')
                          }}
                          style={{ backgroundColor: '#008080' }}
                        ></div>
                        <div
                          className="A1"
                          onClick={() => {
                            ChangeBackGColor('#000080')
                          }}
                          style={{ backgroundColor: '#000080' }}
                        ></div>
                      </MenuItem>
                    </Menu>
                  </div>
                  <IconButton
                    className={ToFunctionalityFlag.Strike ? 'IconButtonOn' : ''}
                    onClick={handleClickToStrike}
                  >
                    <StrikethroughSIcon />
                  </IconButton>
                  <IconButton onClick={handleClickToClear}>
                    <FormatClearIcon />
                  </IconButton>
                </div>
              </div>
            ) : null}
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
            <IconButton
              className={
                ToFunctionalityFlag.TextFeatureOn ? 'IconButtonOn' : ''
              }
              onClick={handleTextFeatureOn}
            >
              <FormatColorTextIcon />
            </IconButton>
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
            <IconButton color="inherit" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  )
}
export default EmailTemplat
