import { NavLink, Outlet } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs"

function RootLayout() {
  return (
     <div className="root-L">
        <header>
          <nav>
            <h1>Yes to Router</h1>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='help'>Help</NavLink>
            <NavLink to='cars'>cars</NavLink>
          </nav>
          <Breadcrumbs />
        </header>
        <main>
          <Outlet/>
        </main>  
     </div>
  )
}

export default RootLayout