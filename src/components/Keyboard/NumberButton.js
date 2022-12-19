import React from 'react';
import Button from '@mui/material/Button';

const NumberButton = (props) => {
  return (
    <Button
    sx={{ margin: '.25em'}}
      variant="outlined"
      onClick={() => props.handler(props.text)}
      size="large"
    >
      {props.text}
    </Button>
  )
}

export default NumberButton;