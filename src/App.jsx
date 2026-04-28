import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Provider from './layout/Provider'

import route from './routes/route'
import Home from './pages/Home'

const App = () => {
  return (
    <>
  
<Provider>

<Routes>
        <Route path="/" element={<Home />} />
       {
        route.map((route)=>{
       return <Route path={route.path} element={route.element} />
        })
       }
</Routes>


</Provider>

    </>
  )
}

export default App