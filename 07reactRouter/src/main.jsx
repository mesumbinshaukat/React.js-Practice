import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home, About, Contact, User, Github} from './components/index.jsx'
import { githubLoader } from './components/Github/Github.jsx'

// 1st Way To Configure Router
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: 'about',
//         element: <About/>
//       },
//       {
//         path: 'contact-us',
//         element: <Contact/>
//       }
//     ]
//   },
// ])

// 2nd Way To Configure Router
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact-us' element={<Contact/>}/>
    <Route path='user/:username' element={<User/>} />
    <Route 
    loader={githubLoader}
    path='github' element={<Github/>} />
  </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
