import React, { useContext} from "react";
import { GlobalContext } from "../Actions/GlobalContext";
import { fetchDiet } from "../Actions/utils";
import Button from "@mui/material/Button";
import "../App.css";

function CustomButton() {

    const{
        stage,
        time,
        dietDisplay,
        setDietDisplay}=useContext(GlobalContext);

        const handleDietFetch = async () => {
            try {
                const dietData = await fetchDiet(stage,time);
                if (dietData) {
                    setDietDisplay(dietData)
                } else {
                    console.log("Data not in proper format");
                }
            } catch (error) {
                console.log("Error fetching the data");
            }
        };

    
    return (
        <div className="regsiterButton">
            <Button variant="contained" onClick={handleDietFetch}>Recommend</Button>
        </div>
    );
};

export default CustomButton;
