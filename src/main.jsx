import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contacts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/Skills",
    element: <Skills />,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
  {
    path: "/Contacts",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
