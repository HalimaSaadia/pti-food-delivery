import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const FoodContext = createContext("");
const FoodProvider = ({ children }) => {
  const [popular, setPopular] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [totalFood, setTotalFood] = useState([]);

  const {
    data: foods,
    isPending: foodPending,
    refetch,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const result = await axios.get(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      );
      const allFood = result.data.Items;
        setTotalFood(allFood);
      return allFood;
    },
  });
  useEffect(() => {
    if (foods) {
    
      const popularFoods = totalFood.filter((food) => food?.IsPopular);
      const recommendedFoods = totalFood.filter((food) => food?.IsRecommended);
      setPopular(popularFoods);
      setRecommended(recommendedFoods);
    }
  }, [totalFood,foods]);
  // console.log("popular", popular);
  // console.log("recommended", recommended)
  console.log("all",totalFood);
  const foodInfo = { popular, setPopular, recommended, setRecommended, setTotalFood, totalFood };

  return (
    <FoodContext.Provider value={foodInfo}>{children}</FoodContext.Provider>
  );
};

export default FoodProvider;
