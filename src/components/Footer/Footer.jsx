import {  NavLink } from "react-router-dom";
import { AiFillYoutube,AiFillFacebook,AiFillTwitterCircle} from 'react-icons/ai';
const Footer = () => {
    
    const navLinks = <>
        < NavLink to="/" 
        > Home </NavLink >
        < NavLink to="/gallery" 
        > Gallery</NavLink >
        < NavLink to="/contact" 
        > Contact Us</NavLink >

    </>
    return (
        <div>
            <footer className="flex flex-col md:flex-row items-center justify-around footer p-10 bg-[#424242] ">
                <aside>
                <a className="capitalize text-2xl font-semibold text-white"><span className="text-[#FF444A] text-3xl">D</span>ream<span className="text-[#FF444A] text-3xl">W</span>eaver</a>
                </aside>
                <nav>
                <header className="text-xl text-white">Quick Links</header>
                    <div className="grid grid-flow-col gap-6">
                    <ul className="flex gap-4 text-base text-gray-400">
                        {navLinks}
                    </ul> 
                       
                    </div>
                    <header className="text-xl text-white">Follow Us</header>
                    <div className="grid grid-flow-col gap-4 text-white text-3xl">
                        <a ><AiFillFacebook></AiFillFacebook></a>
                        <a><AiFillTwitterCircle></AiFillTwitterCircle></a>
                        <a><AiFillYoutube></AiFillYoutube></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;