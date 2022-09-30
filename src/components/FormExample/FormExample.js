import React from "react";
import ExampleWrapper from "../ExampleWrapper";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import "./FormExample.css"

// NOTE: Only modify code between commented lines below
const FormExample = () => {

  //Could not figure out how to accomplish task without adding useStates above the comment 

  //TO DO 
  //Missing tiny trademark at end of Title
  //Spacing issues in Complexity Requirements
  //Floating Icons in Title and Complexity Requirements
  //Complexity Requirements border
  //Textfields need to be made shorter height
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")
  const [confirmationCode, setConfirmationCode] = useState("")
  return (
    <div className="test">
      <ExampleWrapper src="../form.png" title="Form Example">
        {/* INSERT YOUR CODE BELOW */}
        <Box>
          <Box>
            <div className="title">Welcome to<span style={{ color: 'rgba(57, 125, 114)' }}>
              <img className="resize" src="/apple-touch-icon-lg.png" alt="logo" />
              Spark</span></div>
            <b className="recover">Recover your password</b>
            <div>
              <TextField style={{ width: "20rem", display: 'inline-flex', marginTop: "15px", marginBottom: "15px" }}
                required
                id="email"
                label="Enter Email"
                type="search"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div>
              <TextField style={{ width: "20rem", marginBottom: "15px", fontSize: "x-small" }}
                required
                id="confirmationCode"
                label="Confirmation Code"
                type="search"
                value={confirmationCode}
                onChange={e => setConfirmationCode(e.target.value)}
              />
            </div>
            <div>
              <TextField style={{ width: "20rem", marginBottom: "15px" }}
                required
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div>
              <TextField style={{ width: "20rem", marginBottom: "-20px" }}
                required
                id="confirm"
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
              />
            </div>
          </Box>
          <Box style={{
            display: 'inline-flex',
            justifyContent: 'flex-end',
            alignContent: 'flex-start',
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'flex-start',
            border: '1px solid',
            width: "20rem",
            marginTop: "2rem"
          }}>
            <div style={{ color: "gray", marginLeft: "2px", marginBottom: "5px", fontSize: "small" }}><b>Complexity Requirements:</b></div>

            {password.length >= 8 ? (
              <div className="require" ><CheckIcon color="success" fontSize="small" /> <b>8 Characters</b></div>
            ) : <div className="require" ><ClearIcon color="error" fontSize="small" /> <b>8 Characters</b></div>}

            {/[A-Z]/.test(password) === true ? (
              <div className="require" ><CheckIcon color="success" fontSize="small" /> <b>1 Uppercase letter</b></div>
            ) : <div className="require" ><ClearIcon color="error" fontSize="small" /> <b>1 Uppercase letter</b></div>}

            {/[a-z]/.test(password) === true ? (
              <div className="require" ><CheckIcon color="success" fontSize="small" /> <b>1 Lowercase letter</b></div>
            ) : <div className="require" ><ClearIcon color="error" fontSize="small" /> <b>1 Lowercase letter</b></div>}

            {/[0-9]/.test(password) === true ? (
              <div className="require" ><CheckIcon color="success" fontSize="small" /> <b>1 Number</b></div>
            ) : <div className="require" ><ClearIcon color="error" fontSize="small" /> <b>1 Number</b></div>}

            {/[#?!@$%^&*-]/.test(password) === true ? (
              <div className="require" ><CheckIcon color="success" fontSize="small" /> <b>1 Special Character</b></div>
            ) : <div className="require" ><ClearIcon color="error" fontSize="small" /> <b>1 Special Character</b></div>}

            {password !== "" && confirmPassword !== "" && password === confirmPassword ? (
              <div className="requireLast"><CheckIcon color="success" fontSize="small" /> <b>Confirm matches</b></div>
            ) : <div className="requireLast"><ClearIcon color="error" fontSize="small" /> <b>Confirm matches</b></div>}

          </Box>
          {/[#?!@$%^&*-]/.test(password) === true &&
            /[0-9]/.test(password) === true &&
            /[a-z]/.test(password) === true &&
            /[A-Z]/.test(password) === true &&
            password.length >= 8 &&
            email !== "" &&
            confirmationCode !== "" &&
            password !== "" && confirmPassword !== "" && password === confirmPassword ? (
            <div><Button style={{ marginTop: "5px" }} variant="contained"><b>UPDATE PASSWORD</b></Button></div>
          ) :
            <div><Button style={{ marginTop: "5px" }} variant="contained" disabled><b>UPDATE PASSWORD</b></Button></div>
          }
        </Box>
        {/* INSERT YOUR CODE ABOVE  */}
      </ExampleWrapper>
    </div >
  );
}

export default FormExample