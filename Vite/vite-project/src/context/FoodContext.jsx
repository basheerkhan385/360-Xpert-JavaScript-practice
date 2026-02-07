import { createContext, useState, useEffect } from "react";

export const FoodContext = createContext();

export function FoodProvider({ children }) {
  const [foods, setFoods] = useState([]);
  const [editFood, setEditFood] = useState(null);

  function addFood(name) {
    setFoods([...foods, { id: Date.now(), name }]);
  }

  function deleteFood(id) {
    setFoods(foods.filter((food) => food.id !== id));
  }

  function updateFood(id, newName) {
    setFoods(
      foods.map((food) => (food.id === id ? { ...food, name: newName } : food))
    );
    setEditFood(null);
  }

  useEffect(() => {
    console.log("Food list updated:", foods);
  }, [foods]);

  return (
    <FoodContext.Provider
      value={{ foods, addFood, deleteFood, updateFood, editFood, setEditFood }}
    >
      {children}
    </FoodContext.Provider>
  );
}
