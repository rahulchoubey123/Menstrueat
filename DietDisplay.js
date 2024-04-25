import React, { useContext } from "react";
import "../App.css";
import { GlobalContext } from "../Actions/GlobalContext";

export default function DietDisplay() {
  const { dietDisplay } = useContext(GlobalContext);

  return (
    dietDisplay.length!==0 && (
      <div className="dietDisplay">
        {dietDisplay.map((item, index) => (
          <p key={index}>{item.FoodItem}</p>
        ))}
      </div>
    )
  );
}
