import { useContext } from "react";
import banner from "../../../assets/banner.png";
import { FoodContext } from "../../../Provider/FoodProvider";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const food = useContext(FoodContext);

  return (
    <div className="lg:bg-[#F99F1C] flex flex-col lg:flex-row rounded-3xl items-center my-20  md:space-y-10 lg:space-y-0 lg:py-10">
      <div className=" lg:ml-20 flex-1 md:py-5">
        <h1 className="text-2xl md:px-5 lg:px-0 lg:text-start md:text-5xl text-[#11263C] font-semibold lg:text-white text-center">
          <Typewriter words={["Deliver Food To Your Door Step"]} loop={true} typeSpeed={150}/>
          |
        </h1>
        <p className="text-sm text-center lg:text-start md:text-xl md:text-[#EECA96] mt-5">
          Authentic Food, Quick Service, Fast Delivery
        </p>
      </div>
      <div className="md:flex-1 relative h-60 md:h-96 lg:h-auto w-full lg:bg-transparent rounded-3xl md:bg-[#FD9460] ">
        <div className=" bg-[#EEEFF0] absolute md:static  h-[25%] bottom-0 w-full "></div>
        <div className=" bg-[#FD9460] absolute md:static h-[75%] rounded-2xl bottom-0 w-full "></div>
        <img className="absolute md:static bottom-0 h-full mx-auto"  src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
