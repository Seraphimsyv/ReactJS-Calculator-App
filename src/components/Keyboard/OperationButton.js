import React from 'react';
import Button from '@mui/material/Button';

const OperationButton = (props) => {
  return (
    <Button
      sx={{ margin: '.25em'}}
      variant={props.primary ? "contained" : "outlined"}
      onClick={() => props.handler(`#OPER ${props.code}`)}
      size="large"
    >
      {props.text}
    </Button>
  )
}

export default OperationButton;