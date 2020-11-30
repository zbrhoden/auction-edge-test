import { Typography, Paper } from "@material-ui/core";
import React from "react";
import UserCodeWrapper from "./UserCodeWrapper";

const ExampleWrapper = ({src, title, children}) => {
  return (
    <>
    <div className="example">
      <Typography variant="h4">{title}</Typography>
      <Paper>
        <img style={{ width: '90%', padding: 20 }} src={src} alt="example" />
      </Paper>
      
    </div>
    <UserCodeWrapper>
        {children}
    </UserCodeWrapper>
    </>
  );
};

export default ExampleWrapper;
