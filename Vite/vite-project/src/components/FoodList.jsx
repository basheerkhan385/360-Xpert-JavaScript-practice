import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";
import FoodItem from "./FoodItem";

export default function FoodList() {
  const { foods } = useContext(FoodContext);

  return (
    <ul>
      {foods.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </ul>
  );
}
