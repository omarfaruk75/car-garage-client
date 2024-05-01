import img1 from "../../../assets/about_us/person.jpg"
import img2 from "../../../assets/about_us/parts.jpg"


const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:flex-1 relative">
                    <img src={img1} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={img2} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>

                <div className="lg:flex-1 space-y-8">
                    <h3 className="text-3xl font-bold text-orange-500">About</h3>
                    <h1 className="text-5xl font-bold w-4/5">We are qualified & of experience in this field</h1>
                    <div className="text-[#737373]">
                        <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                        <p >the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    </div>
                    <button className="btn bg-orange-700 text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;