import bannerImg from "../../assets/Banner.webp"
const Banner = () => {
  return (
    <div>
      <div className="hero min-h-[500px]" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md" >
            <div data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
            <h1 className="mb-5 text-5xl font-bold" >Your Dream Events, Our Expert Touch</h1>
            <p className="mb-5">Our mission is to transform your special moments into unforgettable memories, meticulously planning and managing every detail to ensure your events are as unique and exceptional as you envisioned.</p>
            </div>
            <div  data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
            <button className="btn bg-white text-[#e1595b] capitalize text-lg">About Us</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
