import { Link } from "react-router-dom";


const Navbar = () => {
    //----- menu link start
    const navItems = <>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Contact</Link></li>
    </>
    //----- menu link end
    return (
        <div>
            <div className="navbar bg-base-100">
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
                <button className="btn btn-outline btn-error">Appoinment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;