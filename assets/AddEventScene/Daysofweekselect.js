import { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./AddEventStyle";

export default function Daysofweekselect({value, index, dayselected, setDayselected}) {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        for(let i = 0; i < dayselected.length; i++) {
            if(dayselected[i] == index) {
                setSelected(true);
                break;
            }
        }
    }, []);

    return(
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
                if(selected) {
                    setSelected(false);
                    setDayselected(dayselected.filter((val) => val != index).sort());
                }
                else {
                    setSelected(true);
                    setDayselected(dayselected.concat(index).sort());
                }
            }}
            style={[styles.dayselected, {
                backgroundColor: (selected) ? '#CCCCCC77' : '#FFFFFF'
            }]}
        >
            <Text style={styles.defaulttext}>{value}</Text>
        </TouchableOpacity>
    );
}