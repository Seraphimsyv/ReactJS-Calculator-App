import React, { useState } from 'react';
import './index.css';

import { Display } from '../Display';
import { Keyboard } from '../Keyboard';

const Calculator = () => {
  const operations = ['%', '/', 'x', '+', '-'];

  const [history, setHistory] = useState([]);
  const handlerUpdateHistory = (item) => {
    setHistory(history.concat([item]));
  }
  const handlerClearHistory = () => {
    setHistory([]);
  }

  const [input, setInput] = useState('');
  const handlerAddToInput = (item) => {
    if (!item.includes('#')) {
      if (item === '.') {
        if(input === '') {
          setInput(`0${item}`);
          return;
        }
        if(input.split(' ')[input.split(' ').length-1] === '') {
          setInput(`${input}0${item}`);
          return;
        } else {
          if( !input.split(' ')[input.split(' ').length-1].includes('.') ) {
            setInput(`${input}${item}`);
          } else {
            return;
          }
        }
      } else {
        setInput(`${input}${item}`);
      }
    } else {
      if (operations.includes(input.slice(' ')[input.slice(' ').length-2])) {
        return;
      }
      if (item.includes('#OPER')) {
        if (input.length > 0) {
          if (
            input.split(' ')[input.split(' ').length-1][input.split(' ')[input.split(' ').length-1].length-1] 
            === '.'
          ) {
            setInput(`${input}0 ${item.split(' ')[1]} `);
          } else {
            setInput(`${input} ${item.split(' ')[1]} `);
          }
        } else {
          setInput(`0 ${input} `);
        }
      }
    }
  }
  const handlerDelFromInput = () => {
    if (input.length > 0) {
      if(input[input.length-1] === ' ') {
        setInput(input.slice(0,-3));
      } else {
        setInput(input.slice(0,-1));
      }
    }
  }
  const handlerClearInput = () => {
    setInput('');
  }
  const handlerMathResult = () => {
    if ( operations.includes(input.slice(' ')[input.slice(' ').length-2]) )
      setInput(input.slice(0,-3))

    const exp = input.split(' ');
    let updatedExp = [];

    for ( let i = 1; i < exp.length; i = i+2 ) {
      if ( ['%', '/', 'x'].includes(exp[i]) ) {
        if ( exp[i] === '/' ) {
          if (i >= 3 && ['%', '/', 'x'].includes(exp[i-2]) ) {
            // eslint-disable-next-line
            let operation = eval(`${updatedExp[updatedExp.length-1]} / ${exp[i+1]}`);
            updatedExp.pop();
            updatedExp.push(operation);
          } else {
            // eslint-disable-next-line
            let operation = eval(`${exp[i-1]} / ${exp[i+1]}`);
            updatedExp.push(operation);
          }
        }
        if ( exp[i] === 'x' ) {
          if (i >= 3 && ['%', '/', 'x'].includes(exp[i-2]) ) {
            // eslint-disable-next-line
            let operation = eval(`${updatedExp[updatedExp.length-1]} * ${exp[i+1]}`);
            updatedExp.pop();
            updatedExp.push(operation);
          } else {
            // eslint-disable-next-line
            let operation = eval(`${exp[i-1]} * ${exp[i+1]}`);
            updatedExp.push(operation);
          }
        }
      } else {
        if ( exp.length-1 < i+2 )
          updatedExp.push(exp[i-1], exp[i], exp[i+1]);
        else
          updatedExp.push(exp[i-1], exp[i]);
      }
    }

    // eslint-disable-next-line
    let result = eval(updatedExp.join(' '));
    
    setHistory([...history, { actions: exp, result: result }]);
    handlerClearInput();
  }

  return (
    <div
      className="calculator"
    >
      <Display
        history={ history }
        input={input}
      />
      <Keyboard
        updateHistory={ handlerUpdateHistory }
        clearHistory={ handlerClearHistory }
        addToInput={ handlerAddToInput }
        deleteFromInput={ handlerDelFromInput }
        clearInput={ handlerClearInput }
        mathResult={ handlerMathResult }
      />
    </div>
  );
}

export default Calculator;
