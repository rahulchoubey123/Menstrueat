import React, { useContext, useEffect } from "react";
import "../App.css";
import { GlobalContext } from "../Actions/GlobalContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function StartDateInput() {
  const { startDate, setStartDate, stage,setStage } = useContext(GlobalContext);

  const handleStartDateSelect = async () => {
    if (1 <= dayjs().diff(dayjs(startDate), "days") && dayjs().diff(dayjs(startDate), "days") <= 6) {
      await setStage("Menstruation");
      console.log(stage);
    }
  };

  useEffect(() => {
    handleStartDateSelect();
  }, [startDate]);

  return (
    <div className="stageInput">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="dateFilterContainer">
          <label>Periods Start</label>
          <div>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                defaultValue={dayjs()}
                value={startDate}
                onChange={async (newDate) => await setStartDate(newDate)}
                sx={{
                  backgroundColor: "white",
                  border: "1px solid black",
                  height: "55px",
                  width: "200px" 
                }}
              />
            </DemoContainer>
          </div>
        </div>
      </LocalizationProvider>
    </div>
  );
}
