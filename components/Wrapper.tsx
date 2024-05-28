//voor de render method 
//die neemt enkel en alleen children als props en rendert die naar een div
import React, { ReactNode } from 'react'

export default function Wrapper({children}:any) {
  return (
    <div >
        {children}
    </div>
  )
}