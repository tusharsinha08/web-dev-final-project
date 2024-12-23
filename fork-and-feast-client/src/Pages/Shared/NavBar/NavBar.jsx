import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
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
                            className="menu menu-compact bg-black bg-opacity-30 dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/menu'>Menu</Link></li>
                            <li><Link to='/order/salad'>Order</Link></li>
                        </ul>
                    </div>
                    <div>
                        <a className="btn btn-ghost text-xl">
                            <div className="text-center inline-block">
                                <h1 className="text-white font-serif text-xl font-bold">FORK & FEAST</h1>
                                <p className="text-white font-serif text-lg tracking-widest">RESTAURANT</p>
                            </div>
                        </a>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/order/salad'>Order</Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                            </> :
                            <>
                                <button className="btn btn-neutral bg-yellow-700"><Link to='/login'>Login</Link></button>
                            </>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;