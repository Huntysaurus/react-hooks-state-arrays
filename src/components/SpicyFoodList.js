import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

const foodList = foods.map((food) => (
  <li key={food.id}>
    {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  </li>
));

return (
  <div>
    <button onClick={handleAddFood}>Add New Food</button>
    <ul>{foodList}</ul>
  </div>
);

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{/* list of spicy foods */}</ul>
    </div>
  );
}

export default SpicyFoodList;
