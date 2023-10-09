/* eslint-disable react/prop-types */

import { BiSolidQuoteRight} from 'react-icons/bi';
const ReviewCard = ({reviews}) => {
    const {image,review,client_name}=reviews;
    
    return (
        <div className="bg-red-100 rounded-lg p-2 " data-aos="fade-up" data-aos-duration="1000">
            <div className='flex gap-3'>
                <img src={image} alt=""  className="w-16 h-16 rounded-full"/>
                <div className='flex gap-5'>
                  <span className='text-[#FF444A] text-3xl'><BiSolidQuoteRight></BiSolidQuoteRight></span>
                  <div>
                    <p className='text-[#666565]'>{review}</p>
                  </div>
                </div>
            </div>
           <div className='flex justify-end text-[#f45659]'> <h4> -{client_name}</h4></div>
            
        </div>
    );
};

export default ReviewCard;