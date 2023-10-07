import aboutImg from "../../assets/aboutImg.webp"
import { FaLocationDot} from 'react-icons/fa6';

import { AiFillPhone,AiOutlineMail} from 'react-icons/ai';
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-2 mx-4 mt-14 mb-4"> 
                <div className="w-full md:w-2/4" data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                    <img src={aboutImg} alt="" />
                </div>
                <div className="w-full md:w-2/4" data-aos="fade-left" data-aos-delay="700" data-aos-duration="1000">
                    <h1 className="text-3xl font-semibold mb-2"><p><span className="text-[#FF444A] text-3xl">F</span>ind Out A Little <span className="text-[#FF444A] text-3xl">M</span>ore</p>
                    <span className="text-[#FF444A] text-3xl">A</span>bout <span className="text-[#FF444A] text-3xl">U</span>s</h1>
                    <p className="text-[#a1a0a0] mb-2"> From weddings that dance with romance to birthday parties filled with joy, and engagements that sparkle with love, our mission is to transform your special moments into unforgettable memories, meticulously planning and managing every detail to ensure your events are as unique and exceptional as you envisioned.</p>
                    <div className="space-y-3">
                      <p className="flex gap-2 items-center"><span className="text-[#FF444A]">< AiFillPhone></AiFillPhone></span> Phone: 0123186549</p>
                      <p className="flex gap-2 items-center"><span className="text-[#FF444A]"><AiOutlineMail></AiOutlineMail></span> Email: wavedreamers@gmail.com</p>
                      <p className="flex gap-2 items-center"><span className="text-[#FF444A]"><FaLocationDot></FaLocationDot></span> Location: Dhanmondi,Bangldesh</p>
                                          
                    </div>
                    
                    
                    <Link to='/contact'><button className="btn btn-outline btn-info text-lg capitalize mt-4">Start Booking</button></Link>
                </div>

            </div>
        </div>
    );
};

export default About;