import { useContext } from "react";
import { AuthContext } from "../route/AuthProvider";
import { Link } from "react-router-dom";
import profile from '../assets/images/boy.png';
import shopLogo from '../assets/images/ShopLogo.png'
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then((result) => {

            })
            .catch((error) => {

            })
    }

    return (
        <div className="navbar bg-rose-400 px-32">
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
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                        <img src={shopLogo} />
                    </div>
                </div>
                <a className="btn btn-ghost text-xl font-bold gap-0">Super<span className="text-white">Shop</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul> */}
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex space-x-4">
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                <img src={profile} />
                            </div>
                        </div>
                        <button onClick={handleLogOut} className="btn">Sign Out</button>
                    </div> : <Link to={`/login`} className="btn">Sign In</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;