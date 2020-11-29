import React from "react";
import { Typography, Paper } from "@material-ui/core";
import UserCodeWrapper from "../UserCodeWrapper";

import MOCK_LIST from './mock_list' // use this mocked API data

// NOTE: Only modify code between commented lines below
export default function ListExample() {
  return (
    <div className="test">
      <Typography variant="h4">List Example</Typography>
      <Paper elevation={2} className="example">
        <img src="../spark_list_offer_events.png" alt="example" />
      </Paper>
      <UserCodeWrapper>
        {/* INSERT YOUR CODE BELOW */}
        <div>REPLACE THIS LINE</div>
        {/* INSERT YOUR CODE ABOVE  */}
      </UserCodeWrapper>
    </div>
  );
}
