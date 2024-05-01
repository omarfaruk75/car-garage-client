import img1 from "../../../assets/banner/1.jpg"
import img2 from "../../../assets/banner/2.jpg"
import img3 from "../../../assets/banner/3.jpg"
import img4 from "../../../assets/banner/4.jpg"


const Slide = () => {
    return (
        <div className="carousel w-full h-screen">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex rounded-xl left-0 top-0 h-full  items-center bg-gradient-to-r from-[#151515] to-[#15151500] ">
                    <div className="text-white w-5/12 space-y-7 pl-16 ">
                        <h2 className="text-6xl text-white font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-8 text-white">
                            <button className="btn btn-outline bg-red-600  text-white">Discover More</button>
                            <button className="btn btn-outline  text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute flex rounded-xl left-0 top-0 h-full  items-center bg-gradient-to-r from-[#151515] to-[#15151500] ">
                    <div className="text-white w-5/12 space-y-7 pl-16 ">
                        <h2 className="text-6xl text-white font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-8 text-white">
                            <button className="btn btn-outline bg-red-600  text-white">Discover More</button>
                            <button className="btn btn-outline  text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute flex rounded-xl left-0 top-0 h-full  items-center bg-gradient-to-r from-[#151515] to-[#15151500] ">
                    <div className="text-white w-5/12 space-y-7 pl-16 ">
                        <h2 className="text-6xl text-white font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-8 text-white">
                            <button className="btn btn-outline bg-red-600  text-white">Discover More</button>
                            <button className="btn btn-outline  text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl " />
                <div className="absolute flex rounded-xl  left-0 top-0 h-full  items-center bg-gradient-to-r from-[#151515] to-[#15151500] ">
                    <div className="text-white w-5/12 space-y-7 pl-16 ">
                        <h2 className="text-6xl text-white font-bold">Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="space-x-8 text-white">
                            <button className="btn btn-outline bg-red-600  text-white">Discover More</button>
                            <button className="btn btn-outline  text-white">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slide;