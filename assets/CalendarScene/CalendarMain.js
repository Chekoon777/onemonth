import CalendarBackground from "./CalendarBackground";
import CalendarContext from "./CalendarContext";

export default function CalendarMain({ navigation }) {
    return(
        <CalendarContext>
            <CalendarBackground navigation={navigation}/>
        </CalendarContext>
    );
}