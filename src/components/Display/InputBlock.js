import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const InputBlock = (props) => {
  return (
    <Box
      sx={{
        marginLeft: 'auto!important',
        width: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'end'
        }}
    >
      <Typography
        sx={{
            width: 'fit-content',
            marginLeft: 'auto',
            fontFamily: 'none'
          }}
          variant='h4'
        >
          {props.text}
        </Typography>
    </Box>
  )
}

export default InputBlock;