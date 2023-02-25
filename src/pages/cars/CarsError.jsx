import React from 'react'
import { useRouteError } from 'react-router'
import { Link } from 'react-router-dom';

export default function CarsError() {
    const error = useRouteError();
  return (
    <div className='cars-E'>
        <h3>{error.message}</h3>
        <Link to='/'>Back to the home page</Link>
    </div>
  )
}
