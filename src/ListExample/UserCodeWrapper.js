import React from 'react'
import { Typography, Paper } from '@material-ui/core'

// NOTE: ONLY MODIFY CODE BETWEEN COMMENTED LINES BELOW
function UserCodeWrapper({ children }) {
  return (
    <div className="user">
      <Typography variant="h4">Your Component Below</Typography>
      <Paper elevation={2} style={{ height: 400, padding: 20 }}>
        {children}
      </Paper>
    </div >
  )
}

export default UserCodeWrapper
