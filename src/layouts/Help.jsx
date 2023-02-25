import { Outlet, NavLink } from "react-router-dom";


export default function Help() {
  return (
    <div className="help-L">
        <h1>
            Need help?
        </h1>
        <nav>
            <ul>
                <li>
                <NavLink  to="faq">FAQ</NavLink>
                </li>
                <li>
                <NavLink  to="contact">Contact</NavLink>
                </li>
            </ul>
            </nav>
        <Outlet />
    </div>
  )
}
