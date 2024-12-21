import React from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux.hook';
import { changeCounter } from './store/reducers/counterReducer';

function App() {
  const counter = useAppSelector(state => state.counterReducer.value)
  const dispatch = useAppDispatch()
  return (
    <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      <div>
        <h1 style={{textAlign: 'center'}} >{counter}</h1> 
        <div style={{display: 'flex', justifyContent: 'space-between', width: '100px'}}>
          <button style={{padding: '5px'}} onClick={() => dispatch(changeCounter(1))}>Inc</button>
          <button style={{padding: '5px'}} onClick={() => dispatch(changeCounter(-1))}>Dec</button>
        </div>
      </div>
    </div>
  );
}

export default App;
