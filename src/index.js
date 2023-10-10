import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './app/store'

import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Countries from './feature/countries/Countries';
import Products from './feature/products/Products';
import Counter from './feature/counter/Counter';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:'/countries',
        element:<Countries></Countries>,
        children:[
          {
            path:"/countries/countryDetails/:cname",
            element:<countryDetails></countryDetails>
          }
        ]
      },
      {
        path:'/counter',
        element:<Counter></Counter>
      },
      {
        path:'/products',
        element:<Products></Products>
      },
      {
        path:'/todolist',
        element:<Todolist></Todolist>
      },
      {
        path:'/',
        element:<counter></counter>
      }
    ]
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

   
   
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
