import {  configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../feature/counter/Todolist/counterslice';
import {countriesApi} from '../services/countries';
import { setupListeners } from '@reduxjs/toolkit/query'
import { productApi } from '../services/products';
export const store=configureStore({
    reducer:{
        c:counterReducer,
        
        t:todoReducer,
        [countriesApi.reducerPath]: countriesApi.reducer,
        [productApi.reducerpath]:productApi.reducer
    },
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(countriesApi.middleware,productApi,middleware),
})
setupListeners(store.dispatch)