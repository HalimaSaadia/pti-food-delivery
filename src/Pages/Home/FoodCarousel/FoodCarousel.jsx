import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./fooCarousel.css";
import { useState } from "react";
import AddFoodForm from "../AddFoodForm/AddFoodForm";
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
};

const FoodCarousel = ({ category, food }) => {
  

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }

  const modalFunctions = {modalIsOpen,openModal, closeModal}
  return (
    <div className="overflow-x-clip my-10">
      <div className="border w-[98%] flex justify-between">
        <h2 className="text-2xl text-[#202E3C] font-semibold"> {category}  </h2>
        <button onClick={openModal} className="text-orange-500 font-semibold">Add More</button>
      </div>
      <Slider {...settings} >
        {food?.map((item) => (
          <div key={item?.Id} className="mt-10">
            <div className="mr-3">
            <img src={item?.ImageUrl} alt="" className="h-40 md:h-64 lg:h-80 w-full rounded-lg " />
            
            </div>
            <p className="text-center font-semibold text-[#7B8692]">{item?.Name}</p>
          </div>
        ))}
      </Slider>
      <AddFoodForm modalFunctions={modalFunctions} />
    </div>
  );
};

export default FoodCarousel;
