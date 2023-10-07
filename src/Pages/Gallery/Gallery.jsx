import gallery1 from"../../assets/gallery1.webp"
import gallery2 from"../../assets/gallery2.webp"
import gallery3 from"../../assets/gallery3.webp"
import gallery4 from"../../assets/gallery4.webp"
import gallery5 from"../../assets/gallery5.webp"
import gallery6 from"../../assets/gallery6.webp"
import gallery7 from"../../assets/gallery7.webp"

const Gallery = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-3 mb-4">
                <div>
                    <img src={gallery1} alt="" className="rounded-md w-full" />
                </div>
                <div>
                    <img src={gallery2} alt="" className="rounded-md w-full" />
                </div>
                <div className="row-span-2">
                    <img src={gallery3} alt=""  className="rounded-md w-full h-full" />
                </div>
                <div className="col-span-2">
                    <img src={gallery4} alt="" className="rounded-md w-full object-cover" />
                </div>
                <div>
                    <img src={gallery5} alt="" className="rounded-md" />
                </div>
                <div >
                    <img src={gallery6} alt=""  className="rounded-md " />
                </div>
                <div>
                    <img src={gallery7} alt="" className="rounded-md" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;