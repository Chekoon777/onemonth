import { useState, createContext, useContext } from "react";

const MonthContext = createContext();
const setMonthContext = createContext();

export default function CalendarContext({ children }) {
    const [currMonth, setCurrMonth] = useState();
    
    return(
        <MonthContext.Provider value={currMonth}>
            <setMonthContext.Provider value={setCurrMonth}>
                {children}
            </setMonthContext.Provider>
        </MonthContext.Provider>
    );
}

export function useMonthContext() {
    const configuring = useContext(MonthContext);
    if(!configuring) {
        Error("configuring context not existing");
        return;
    }
    return configuring;
}

export function useSetMonthContext() {
    const setConfiguring = useContext(setMonthContext);
    if(!setConfiguring) {
        Error("setConfiguring context not existing");
        return;
    }
    return setConfiguring;
}