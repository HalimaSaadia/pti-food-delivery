import { useContext } from "react";
import Banner from "../Banner/Banner";
import { FoodContext } from "../../../Provider/FoodProvider";
import FoodCarousel from "../FoodCarousel/FoodCarousel";


const Home = () => {
    const {popular, recommended} = useContext(FoodContext)
    return (
        <div className="max-w-6xl">
            <Banner />
            <FoodCarousel category="Popular" food={popular} />
            <FoodCarousel category="Recommended" food={recommended} />
        </div>
    );
};

export default Home;