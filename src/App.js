



import React from 'react'
import "./index.css"
import Homepage from './pages/Homepage'
import CustomCoincontext from './context/Coincontext'
import { createHashRouter,RouterProvider } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Text from './components/Text/Text'
import Coin from './components/Coin/Coin'



const App = () => {
  const rt = createHashRouter([
    {path:"/",element:<Navbar/>,
      children:[
      {index:true,element:<Text/>},
      {path:"/coin/:id",element:<Coin/>}

    ]}]
  )
  return (
    <CustomCoincontext>
      <div className='app'>
        <RouterProvider router={rt}></RouterProvider>
      </div>
    </CustomCoincontext>
  )
}

export default App

