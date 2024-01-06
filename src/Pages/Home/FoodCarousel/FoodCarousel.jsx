import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./fooCarousel.css";
import { useState } from "react";
import AddFoodForm from "../AddFoodForm/AddFoodForm";
import { GrNext, GrPrevious } from "react-icons/gr";





const FoodCarousel = ({ category, food }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const modalFunctions = { modalIsOpen, openModal, closeModal };
  var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  prevArrow: (
    <GrPrevious    
    />
  ),
  nextArrow: <GrNext />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};
  return (
    <>
    <div className="my-10 relative">
      <div className="border  md:w-[90%] lg:w-[93%] flex justify-between z-50 absolute mt-1 ml-2">
        <h2 className="text-2xl text-[#202E3C] font-semibold"> {category} </h2>
        <button onClick={openModal} className="text-orange-500 font-semibold hidden md:block">
          Add More
        </button>
      </div>
      <Slider {...settings} className="border ">
        {food?.map((item) => (
          <div key={item?.Id} className="mt-20">
            <div className="mx-2">
              <img
                src={item?.ImageUrl}
                alt=""
                className="h-40 md:h-64 lg:h-80 w-full rounded-lg "
              />
            </div>
            <p className="text-center font-semibold text-[#7B8692]">
              {item?.Name}
            </p>
          </div>
        ))}
      </Slider>
      
    </div>
    <AddFoodForm modalFunctions={modalFunctions} />
    </>
  );
};

export default FoodCarousel;
