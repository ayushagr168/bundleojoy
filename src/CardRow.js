import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "./Card";

export default function BasicGrid(props) {
  return (
    <div style={{ display: "flex" }}>
      {props.data.map((item) => (
        <Card name={item.itemName} key={item.key} color={item.itemColor} />
      ))}
    </div>
  );
}
