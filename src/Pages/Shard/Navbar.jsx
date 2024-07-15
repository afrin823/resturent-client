import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch(error => console.log(error))
    }
    
    //----- menu link start
    const navItems = <>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Contact</Link></li>
        {user?.email ? <>
            <li><Link to="bookings">My Bookings</Link></li>
            <li><button onClick={handleLogOut}>LogOut</button></li>
        </> :
            <li><Link to="login">LogIn</Link></li>
        }
    </>
    //----- menu link end
    //----- menu link end
    return (
        <div>
            <div className="navbar bg-base-100 h-28 mb-4 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl"><img src="https://foodking.windstripedesign.ro/images/logo/logo.svg" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
        {
          user ? <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-24 rounded-full">
                <img src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <button className="btn btn-sm btn-ghost">{user?.displayName || "user name not found"}</button>
              </li>
              <li>
                <button onClick={logOut}
                  className="btn btn-warning text-white">logout</button>
              </li>
            </ul>
          </div>
            :
            <Link to={'/login'}><button className="btn btn-warning text-white">LogIn</button></Link>
        };
      </div>
            </div>
        </div>
    );
};

export default Navbar;