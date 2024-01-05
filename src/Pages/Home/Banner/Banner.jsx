import banner from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div className="lg:bg-[#F99F1C] flex flex-col lg:flex-row rounded-3xl items-center px-5 my-20 space-y-10 lg:space-y-0">
      <div className="md:ml-10 lg:ml-20 flex-1 py-5">
        <h1 className="text-xl lg:text-start md:text-5xl text-[#11263C] font-semibold lg:text-white text-center">
          Deliver Food To Your Door Step|
        </h1>
        <p className="text-sm text-center lg:text-start md:text-xl md:text-[#EECA96] mt-5">
          Authentic Food, Quick Service, Fast Delivery
        </p>
      </div>
      <div className="flex-1 box-border  bg-[#FD9460]  lg:bg-transparent rounded-3xl ">
        <img className="" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
