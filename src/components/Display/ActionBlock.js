import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const ActionBlock = (props) => {
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
          marginLeft: 'auto'
        }}
        variant='subtitle1'
      >
        {props.actions}
      </Typography>
      <Typography
        sx={{
          width: 'fit-content',
          marginLeft: 'auto'
        }}
        variant='h6'
      >
        {props.result}
      </Typography>
    </Box>
  )
}

export default ActionBlock;