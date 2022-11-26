import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react';
import NavBar from './pages/assets/navbar';
import Login from './pages/external_pages/login';
import FrontPage from './pages/external_pages/front-page';
import ControlPanel from './pages/internal_pages/controlPanel';
import Profile from './pages/internal_pages/pages/profile/profile'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  redirect
} from "react-router-dom";

export async function loginToControlPanel(loginResults){
  console.log("Hello")
  
  // if(loginResults.outcome){
  //   return redirect('/controlPanel')
  // }else{
  //   return redirect('/login')
  // }
  
}

const controlPanelChildrenRoute = [
  {
    path: '/controlpanel/profile',
    element: <Profile/>
  }
]

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/",
    element: <FrontPage/>
  },
  {
    path: "/controlpanel",
    element: <ControlPanel/>,
    
  },
  {
    path: "/profile",
    element: <Profile/>,
  }
]);



function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
