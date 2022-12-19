import React from 'react';
import { Box, Stack } from '@mui/system';

import ActionBlock from "./ActionBlock";
import ResultBlock from './ResultBlock';
import InputBlock from './InputBlock';

// eslint-disable-next-line
import './index.css';

const Display = (props) => {
  return (
    <Box
      className="display"
    >
      <Stack
        sx={{ textAlign: 'end', overflowY: 'auto' }}
        flexDirection='column'
        spacing={2}
      >
        {props.history != null ? props.history.map((item, key) => (
          <ActionBlock
            key={key}
            actions={ item.actions }
            result={ item.result }
          />
        )) : null}
        {props.history.length !== 0 ? (
          <ResultBlock
            result={ props.history[props.history.length-1].result }
          />
        ) : null}
      </Stack>
      {props.input.length !== 0 ? (
        <InputBlock
          text={ props.input }
        />
      ) : (
        <InputBlock
          text="0"
        />
      )}
    </Box>
  )
}

export { Display };