import React from 'react'
import { AppProvider } from '../context/AppProvider'
import AppLayout from './AppLayout'


const Provider = ({children}) => {
  return (
    <>
    <AppLayout>
    <AppProvider>
        {children}
    </AppProvider>
    </AppLayout>
   
    </>
  )
}

export default Provider