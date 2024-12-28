
// import React from 'react'
// import "./index.css"
// import Homepage from './pages/Homepage'
// import CustomCoincontext from './context/Coincontext'
// import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// import Navbar from './components/navbar/Navbar'
// import Text from './components/Text/Text'
// import Coin from './components/Coin/Coin'



// const App = () => {
//   const rt = createBrowserRouter([
//     {path:"/",element:<Navbar/>,
//       children:[
//       {index:true,element:<Text/>},
//       {path:"/coin/:id",element:<Coin/>}

//     ]}]
//   )
//   return (
//     <CustomCoincontext>
//       <div className='app'>
//         <RouterProvider router={rt}></RouterProvider>
//       </div>
//     </CustomCoincontext>
//   )
// }

// export default App

// because git not supporting above createBrowser 
import React from 'react';
import "./index.css";
import Homepage from './pages/Homepage';
import CustomCoincontext from './context/Coincontext';
import { HashRouter, Route, Routes } from 'react-router-dom';  // Changed to HashRouter
import Navbar from './components/navbar/Navbar';
import Text from './components/Text/Text';
import Coin from './components/Coin/Coin';

const App = () => {
  return (
    <CustomCoincontext>
      <HashRouter> {/* Use HashRouter */}
        <div className='app'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Text />} />
            <Route path="/coin/:id" element={<Coin />} />
          </Routes>
        </div>
      </HashRouter>
    </CustomCoincontext>
  );
}

export default App;
