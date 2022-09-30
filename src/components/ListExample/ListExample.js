import React from "react";
import ExampleWrapper from '../ExampleWrapper'
import MOCK_LIST from './mock_list' // use this mocked API data
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import formatDate from "../../utils/formatDate";
import formatNumber from "../../utils/formateNumber";
import formatString from "../../utils/formatString";
import "./ListExample.css"
// NOTE: Only modify code between commented lines below
const ListExample = () => {

  //TO DO
  //Alignment between horizontal cells
  //Top and bottom tails of dashed border need to be trimmed
  //Overall tweaking of font size
  return (
    <div className="test">
      <ExampleWrapper src="../list.png" title="List Example">
        {/* INSERT YOUR CODE BELOW */}
        <TableContainer>
          <Table style={{ marginLeft: "3rem" }}>
            <TableBody >
              {MOCK_LIST.map((entry, entryIndex) =>
                <TableRow key={entryIndex}>
                  <TableCell className="Entry" style={{ fontSize: "small", paddingBottom: "8px", borderBottom: "none" }}><span className="Gray">{formatDate(entry.eventCreatedAt)}</span></TableCell>

                  {entry.eventCreatedBy !== "ADMIN ADMIN" ? (
                    <TableCell style={{ fontSize: "medium", paddingBottom: "8px", borderBottom: "none" }}><span className="Gray">By {entry.eventCreatedBy}</span></TableCell>
                  ) : <TableCell style={{ fontSize: "medium", paddingBottom: "8px", borderBottom: "none" }}></TableCell>}

                  {entry.eventTypeCode === "offer_change" && entry.eventNote !== null && entry.currentOfferAmount - entry.currentOfferAmountPrevious > 0 ? (
                    <TableCell style={{ fontSize: "large", paddingBottom: "8px", borderBottom: "none" }}>
                      {formatString(entry.ballControlCode)} ({entry.ballControlUser}) countered with ${formatNumber(entry.currentOfferAmount)}
                      <span className="HigherOffer">(+${formatNumber(entry.currentOfferAmount - entry.currentOfferAmountPrevious)})</span>
                      <div>Note: {formatString(entry.eventNote)}</div>
                    </TableCell>

                  ) : entry.eventTypeCode === "offer_change" && entry.eventNote !== null && entry.currentOfferAmount - entry.currentOfferAmountPrevious < 0 ? (
                    <TableCell style={{ fontSize: "large", paddingBottom: "8px", borderBottom: "none" }}>
                      {formatString(entry.ballControlCode)} ({entry.ballControlUser}) countered with ${formatNumber(entry.currentOfferAmount)}
                      <span className="LowerOffer">(-${formatNumber(Math.abs(entry.currentOfferAmount - entry.currentOfferAmountPrevious))})</span>
                      <div>Note: {formatString(entry.eventNote)}</div>
                    </TableCell>

                  ) : entry.eventNote !== null ? (
                    <TableCell style={{ fontSize: "large", paddingBottom: "8px", borderBottom: "none" }}>
                      Note: {formatString(entry.eventNote)}
                    </TableCell>

                  ) : entry.eventTypeCode === "start" && entry.ballControlCode === "missing" ? (
                    <TableCell style={{ fontSize: "large", paddingBottom: "8px", borderBottom: "none" }}>
                      Buyer ({entry.ballControlUser}) offered ${formatNumber(entry.currentOfferAmount)}
                    </TableCell>

                  ) : null}

                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {/* INSERT YOUR CODE ABOVE  */}
      </ExampleWrapper>
    </div>
  );
}

export default ListExample