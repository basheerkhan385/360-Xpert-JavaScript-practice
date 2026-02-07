import { useRef, useEffect, useContext } from "react";
import { FoodContext } from "../context/FoodContext";

export default function FoodInput() {
  const inputRef = useRef();
  const { addFood, editFood, updateFood } = useContext(FoodContext);

  useEffect(() => {
    if (editFood) {
      inputRef.current.value = editFood.name;
      inputRef.current.focus();
    }
  }, [editFood]);

  function handleSubmit() {
    const value = inputRef.current.value;
    if (!value) return;

    if (editFood) updateFood(editFood.id, value);
    else addFood(value);

    inputRef.current.value = "";
  }

  return (
    <div>
      <input ref={inputRef} placeholder="Enter food name" />
      <button onClick={handleSubmit}>{editFood ? "Update" : "Add"}</button>
    </div>
  );
}
