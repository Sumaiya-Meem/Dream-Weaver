import { Link, NavLink } from "react-router-dom";
const Navbar = () => {

    const navLinks = <>
        < NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#5082e6] underline" : ""
        }
        > Home </NavLink >
        < NavLink to="/gallery" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#5082e6] underline" : ""
        }
        > Gallery</NavLink >
        < NavLink to="/contact" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#5082e6] underline" : ""
        }
        > Contact Us</NavLink >

    </>



    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-44 flex gap-5 text-base font-medium">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="capitalize text-2xl font-semibold"><span className="text-[#FF444A] text-3xl">D</span>ream<span className="text-[#FF444A] text-3xl">W</span>eaver</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-5 text-[20px] font-medium">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login"><button className="btn  btn-outline btn-info text-base ">Login</button></Link>
                    <Link to="/register"><button className="btn  btn-outline btn-info text-base ml-3">Register</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;