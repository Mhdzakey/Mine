
import {configureStore} from '@reduxjs/toolkit'
import  CounterSlice  from './slices/CounterSLice'



export const store = configureStore({
    reducer:{
        counter: CounterSlice
    },
})
