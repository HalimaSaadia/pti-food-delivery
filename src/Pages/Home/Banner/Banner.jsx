import banner from "../../../assets/banner.png"

const Banner = () => {
    return (
        <div>
            <div>
                <h1 className="text-4xl">Deliver Food To Your Door Step |</h1>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;