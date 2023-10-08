
const Contact = () => {
  return (
    <div>
      <div className="card max-w-[600px] min-h-[400px] mx-3 mb-6 md:mx-auto  card-side flex flex-col md:flex-row-reverse bg-gray-100 shadow-xl">

        <div className="card-body">
          <h2 className="text-3xl text-center">Contact Us</h2>
          <form className="">
            <div className="">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="name" placeholder="name" className="input input-bordered w-3/4" required />
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input type="number" placeholder="phone number" className="input input-bordered w-3/4" required />
              <label className="label">
                <span className="label-text">Event Type</span>
              </label>
              <input type="text" placeholder="event" className="input input-bordered w-3/4" required />
              <label className="label">
                <span className="label-text">Event Date</span>
              </label>
              <input type="date" placeholder="your event date" className="input input-bordered w-3/4" required />


            </div>
            <textarea className="mt-4 p-2" placeholder="Your Message" rows="5" cols="40"></textarea>
            <div className="text-center">
              <button className="btn bg-gradient-to-r from-[#8d318a] to-[#19c7c7] text-white">Booking</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;