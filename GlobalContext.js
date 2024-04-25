import React, {createContext,useState} from "react";
import dayjs from "dayjs";

export const GlobalContext = createContext();
export function GlobalProvider(props) {
    const [stage,setStage]=useState("Select Stage");
    const [time,setTime]=useState("Select Time");
    const [dietDisplay,setDietDisplay]=useState([]);
    const [startDate, setStartDate] = useState(dayjs());

    return(
        <GlobalContext.Provider
        value={{
            stage,
            setStage,
            time,
            setTime,
            dietDisplay,
            setDietDisplay,
            startDate, 
            setStartDate
        }}>
        {props.children}
    </GlobalContext.Provider>
);
}