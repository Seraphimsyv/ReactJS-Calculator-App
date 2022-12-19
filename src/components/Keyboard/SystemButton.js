import React from 'react';
import Button from '@mui/material/Button';

const SystemButton = (props) => {
  return (
    <Button
    sx={{ margin: '.25em'}}
      variant="outlined"
      onClick={() => props.handler(props.code)}
      size="large"
    >
      {props.text}
    </Button>
  )
}

export default SystemButton;