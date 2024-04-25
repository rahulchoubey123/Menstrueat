import React, {useContext} from "react";
import "../App.css";
import { GlobalContext } from "../Actions/GlobalContext";
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function StageInput() {
    const {stage,setStage}=useContext(GlobalContext)

    return (
        <div className="stageInput">

            <FormControl className="stageInputField">
                <label>Menstrual Stage</label>
                    <Select
                    value={stage}
                    onChange={(e) => setStage(e.target.value)}
                    sx={{
                        backgroundColor: "white",
                        borderColor: "blue",
                        borderRadius: "20px",
                        padding: "5px",
                        width: "300px", 
                    }}
                    >
                    <MenuItem value="Select Stage">Select Stage</MenuItem>
                    <MenuItem value="Menstruation">Menstruation</MenuItem>
                    <MenuItem value="Late Follicular">Late Follicular</MenuItem>
                    <MenuItem value="Ovulation">Ovulation</MenuItem>
                    <MenuItem value="Mid Luteal">Mid Luteal</MenuItem>
                    <MenuItem value="Late Luteal/PMS">Late Luteal/PMS</MenuItem>
                    </Select>
                

            </FormControl>

        </div>
    );

};
