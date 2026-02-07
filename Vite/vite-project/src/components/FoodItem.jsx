import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

export default function FoodItem({ food }) {
  const { deleteFood, setEditFood } = useContext(FoodContext);

  return (
    <li>
      {food.name}
      <button onClick={() => setEditFood(food)}>Edit</button>
      <button onClick={() => deleteFood(food.id)}>Delete</button>
    </li>
  );
}
