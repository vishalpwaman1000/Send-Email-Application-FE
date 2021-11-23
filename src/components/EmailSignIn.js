import React, { Component } from 'react'
import "./EmailSignIn.scss";
import TextField from '@material-ui/core/TextField';

export class EmailSignIn extends Component {
    render() {
        return (
            <div className="EmailSignIn_Container">
                <div className="SubContainer">
                    <div className="Header">Admin Login</div>
                    <div className="TextFields">
                    <TextField 
                        type="text" 
                        label="Email" 
                        variant="outlined" 
                        size="small" 
                        className="Email"
                        fullWidth
                        />
                    <TextField 
                        type="password" 
                        label="Password" 
                        variant="outlined" 
                        size="small" 
                        className="Password"
                        fullWidth
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default EmailSignIn
