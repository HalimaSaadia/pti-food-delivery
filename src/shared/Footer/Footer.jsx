import footer from "../../assets/footer.png";
import { FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-[#F99F1C] p-2">
      <div className="flex max-w-6xl mx-auto">
        <div className="flex-1 flex flex-col justify-around md:ml-10 lg:ml-20 py-10">
          <div className=" bg-white rounded-lg   md:w-[400px] lg:w-[500px]  flex justify-between items-center ">
            <input
              className="input focus:border-none  focus:outline-none bg-white"
              placeholder="Enter Your Email"
            />
            <button className="hidden  bg-orange-500 hover:bg-orange-500  border-none h-10 rounded-lg text-white px-8 mr-5 md:flex items-center gap-2">
              Subscribe <span className="text-2xl"> &rarr;</span>
            </button>
            <p className="text-orange-500 font-semibold md:hidden flex items-center ">
              Subscribe <span className="text-2xl">&rarr;</span>
            </p>
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between md:items-end space-y-10 md:space-y-0">
            <div className="flex-1 text-center md:text-start mt-5">
              <h1 className="text-4xl  websiteName text-[#221314]">
                pti <span className="text-orange-500">.</span>
              </h1>
              <p className="text-[#221314] mt-5 font-semibold">
                Copyright&copy;Tripe.All Right Reserved{" "}
              </p>
            </div>
            <div className="flex-1 flex justify-center w-full ">
              <div className="flex items-center gap-2">
                <div className="bg-orange-500 text-[#FEDDBA] md:bg-[#FEDDBA] md:text-orange-500 text-lg p-2 rounded-full">
                  <FaGoogle />{" "}
                </div>
                <div className="bg-orange-500 text-[#FEDDBA] md:bg-[#FEDDBA] md:text-orange-500 text-lg p-2 rounded-full">
                  <FaTwitter />{" "}
                </div>
                <div className="bg-orange-500 text-[#FEDDBA] md:bg-[#FEDDBA] md:text-orange-500 text-lg p-2 rounded-full">
                  <FaInstagram />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img className="h-80 " src={footer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
