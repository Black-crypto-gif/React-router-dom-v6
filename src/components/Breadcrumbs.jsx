import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Breadcrumbs() {
    const Location = useLocation()
    let currentLink = ''

    const crumbs = Location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
        currentLink=+ `/${crumb}`

        return (
            <div className='crumb' key={crumb}>
                <Link  to={currentLink}>{crumb}</Link>
            </div>
        )
    })
  return (
    <div className='breadcrumbs'>
        {crumbs}
    </div>
  )
}
