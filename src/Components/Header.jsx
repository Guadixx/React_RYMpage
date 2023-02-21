import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/userContext";
import "./Header.css"

const Header = () => {
   const { user, logout } = useContext(UserContext);
    return (
        <header className="header1">
            <nav>
               <ul>
                 <li>
                    <NavLink to= " ">Home</NavLink>
                 </li>
                 <li>
                    {user && <NavLink to= "Characters">Characters</NavLink>}
                 </li>
                 <li>
                     {!user && <NavLink to="/login">Login</NavLink>}
                 </li>
                 <li>
                     {user && <NavLink to="/shop">Shop</NavLink>}
                 </li>
                 <li>
                     <img src="https://res.cloudinary.com/dpidlverd/image/upload/v1676743435/61fc01203cf0e7000422206d_jfclbe.png" alt="adult swim logo" /> 
                 </li>
               </ul>
               {user && <button className="button-54" onClick={() => logout()}>Logout</button>}
            </nav>
        </header>
    )
}

export default Header;