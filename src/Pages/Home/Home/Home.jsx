import { useContext } from "react";
import Banner from "../Banner/Banner";
import { FoodContext } from "../../../Provider/FoodProvider";
import FoodCarousel from "../FoodCarousel/FoodCarousel";
import { Toaster } from "react-hot-toast";


const Home = () => {
    const {popular, recommended} = useContext(FoodContext)
    return (
        <div className="max-w-6xl p-2 md:p-5">
            <Banner />
            <div className="md:my-40">
            <FoodCarousel category="Popular" food={popular} />
            <FoodCarousel category="Recommended" food={recommended} />
            </div>
            <Toaster />
        </div>
    );
};

export default Home;