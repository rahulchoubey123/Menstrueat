import React from "react";
import { GlobalProvider } from "../Actions/GlobalContext";
import StartDateInput from "./StartDateInput";
import StageInput from "./StageInput";
import TimeInput from "./TimeInput";
import CustomButton from "./Button";
import DietDisplay from "./DietDisplay";

function Recommendation() {
  return (
    <div className="recommendation">
      <div className="recommendationHeader">
                <div className="recommendationTitle">
                    <h1>Diet Recommender</h1>
                </div>
            </div>
      <div className="recommendationInput">
        <StartDateInput />
        <StageInput />
        <TimeInput />
        <div className="button">
          <CustomButton />
        </div> 
      </div>
      <div>
        <DietDisplay />
      </div>
    </div>
  );
}

export default function RecommendationWithGlobalProvider(){
  return (
    <GlobalProvider>
      <Recommendation/>
    </GlobalProvider>
  )
};

