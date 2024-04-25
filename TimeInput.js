import React, {useContext} from "react";
import "../App.css";
import { GlobalContext } from "../Actions/GlobalContext";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function TimeInput() {
    const {time,setTime}=useContext(GlobalContext);

    return (
        <div className="timeInput">

            <FormControl className="timeInputField">
                <label>Time</label>
                    <Select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    sx={{
                        backgroundColor: "white",
                        borderColor: "blue",
                        borderRadius: "20px",
                        padding: "5px",
                        width: "300px", 
                    }}
                    >
                    <MenuItem value="Select Time">Select Time</MenuItem>
                    <MenuItem value="Breakfast">Breakfast</MenuItem>
                    <MenuItem value="Lunch">Lunch</MenuItem>
                    <MenuItem value="Dinner">Dinner</MenuItem>
                    <MenuItem value="Fruits">Fruits</MenuItem>
                    </Select>
                

            </FormControl>

        </div>
    );

};
