import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function About() {
	const [user, setUser ] = useState('mario')
	if(!user){
		return <Navigate to='/' replace={true}/>
	}
  return (
   <>
     <header>
		<h1>About Us</h1>
	</header>
	<main>
		<p>We are a small team of developers passionate about creating high-quality software.</p>
		<p>Our mission is to build tools that help people solve problems and make their lives easier.</p>
		<p>Thank you for visiting our website!</p>
	</main>
	<button onClick={()=> setUser(null)}>
		logout♉ 
	</button>
   </>
  )
}
