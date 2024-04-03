import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decrement, increment, reset } from '../redux/slices/CounterSLice';

const Counter = () => {
  
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
    <div className='counter'>
        <button className='inc' onClick={()=> dispatch(increment())}>Increment</button> <br/> <br/>
        <div>{count}</div>
        <button className='inc' onClick={()=> dispatch(decrement())}>Decrement</button> <br/> <br/>
        <button className='inc' onClick={()=> dispatch(reset())}>Reset</button> <br/> <br/>
    </div>
  )
}

export default Counter