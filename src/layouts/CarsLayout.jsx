import React from 'react'
import { Outlet } from 'react-router'

export default function () {
  return (
    <div className='cars-L'>
        <h2>
            Cars
        </h2>
        <h6>
            Nothing can stope me from buying 
            this car you sure about that
        </h6>
        <Outlet />
    </div>
  )
}
