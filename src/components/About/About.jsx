import aboutImg from "../../assets/aboutImg.webp"
import { FaLocationDot} from 'react-icons/fa6';

import { AiFillPhone,AiOutlineMail} from 'react-icons/ai';
const About = () => {
    return (
        <div>
            <div className="flex mx-4 mt-14 mb-4">
                <div className="w-2/4">
                    <img src={aboutImg} alt="" />
                </div>
                <div className="w-2/4">
                    <h1 className="text-3xl font-semibold mb-2">About Us</h1>
                    <p className="text-[#a1a0a0] mb-2"> From weddings that dance with romance to birthday parties filled with joy, and engagements that sparkle with love, our mission is to transform your special moments into unforgettable memories, meticulously planning and managing every detail to ensure your events are as unique and exceptional as you envisioned.</p>
                    <div className="space-y-3">
                      <p className="flex gap-2 items-center"><span>< AiFillPhone></AiFillPhone></span> Phone: 0123186549</p>
                      <p className="flex gap-2 items-center"><span><AiOutlineMail></AiOutlineMail></span> Email: wavedreamers@gmail.com</p>
                      <p className="flex gap-2 items-center"><span><FaLocationDot></FaLocationDot></span> Location: Dhanmondi,Bangldesh</p>
                                          
                    </div>
                    
                    <button className="btn btn-outline btn-info text-lg capitalize mt-4">Start Booking</button>
                </div>

            </div>
        </div>
    );
};

export default About;