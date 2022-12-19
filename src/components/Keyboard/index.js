import React from "react";
import { Box } from "@mui/system";

// eslint-disable-next-line
import NumberButton from "./NumberButton";
// eslint-disable-next-line
import OperationButton from "./OperationButton";
// eslint-disable-next-line
import SystemButton from "./SystemButton";

import './index.css';

const Keyboard = (props) => {
  return (
    <Box className="keyboard">
      <SystemButton code="#AC" text="AC" handler={props.clearInput} />
      <SystemButton code="#DEL" text="DEL" handler={props.deleteFromInput} />
      <OperationButton code="%" text="%" handler={props.addToInput} />
      <OperationButton code="/" text="/" handler={props.addToInput} />
      <NumberButton code="#7" text="7" handler={props.addToInput} />
      <NumberButton code="#8" text="8" handler={props.addToInput} />
      <NumberButton code="#9" text="9" handler={props.addToInput} />
      <OperationButton code="x" text="x" handler={props.addToInput} />
      <NumberButton code="#6" text="6" handler={props.addToInput} />
      <NumberButton code="#5" text="5" handler={props.addToInput} />
      <NumberButton code="#4" text="4" handler={props.addToInput} />
      <OperationButton code="-" text="-" handler={props.addToInput} />
      <NumberButton code="#3" text="3" handler={props.addToInput} />
      <NumberButton code="#2" text="2" handler={props.addToInput} />
      <NumberButton code="#1" text="1" handler={props.addToInput} />
      <OperationButton code="+" text="+" handler={props.addToInput} />
      <NumberButton code="#00" text="00" handler={props.addToInput} />
      <NumberButton code="#0" text="0" handler={props.addToInput} />
      <NumberButton code="." text="." handler={props.addToInput} />
      <OperationButton primary code="=" text="=" handler={props.mathResult} />
    </Box>
  )
}

export { Keyboard }