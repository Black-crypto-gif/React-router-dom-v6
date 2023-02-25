import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div class="container">
		<h1>404 Error - Page Not Found</h1>
		<NavLink to='/'>GO BACK TO HOME PAGE</NavLink>
	</div>
  )
}

export default NotFound