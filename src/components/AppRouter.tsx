import React, { useContext } from 'react'
import {Route,Routes} from "react-router-dom";
import App from '../App'
import Basket from './pages/Basket'
import Home from './pages/Home';
import Item from './pages/Item'
import Order from './pages/Order'
import Shop from './pages/Shop'

 const publicRoutes=[
  {
    path:'/Shop',
    Component:Shop
  },
  {
    path:'/Basket',
    Component:Basket
  },
  {
    path:'/Order',
    Component:Order
  },
  {
    path:'/Item'+'/:id',
    Component:Item
  },
  {
    path:'/',
    Component:Home
  },
];
const AppRouter=()=> {
  return (
    <Routes>
      {publicRoutes.map(({path, Component}) =>
      <Route key={path} path={path} element={<Component/>}/>
      )}
      <Route path='*' element={<Home/>} />
    </Routes>
  )
}

export default AppRouter;