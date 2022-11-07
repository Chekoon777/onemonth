import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from './AddEventStyle';
import MaterialIcons2 from 'react-native-vector-icons/MaterialIcons';
import Daysofweekselect from './Daysofweekselect';

export default function Daysofweek() {
    const daysofweek = ["월", "화", "수", "목", "금", "토", "일"];
    const [dayselected, setDayselected] = useState([0, 1, 3]);
    const [repeatoption, setRepeatoption] = useState(0);
    const [holiday, setHoliday] = useState(true);

    return(
        <>
            <View style={[styles.defaultform, {marginBottom: 0}]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons2 name="repeat" size={22} color="black" style={{position: 'relative', top: -2}}/>
                    {dayselected.length ?
                        (dayselected.length != 7 ?
                            <Text style={[styles.defaulttext, {marginLeft: 15}]}>
                                {
                                    dayselected.reduce((acc, val, idx) => {
                                        return(
                                            acc + daysofweek[val] + (idx != dayselected.length-1 ? ", " : "")
                                        );
                                    }, "")
                                    + (holiday ? " (공휴일 제외)" : "")
                                }
                            </Text>
                            : 
                            <Text style={[styles.defaulttext, {marginLeft: 15}]}>
                                {"매일" + (holiday ? " (공휴일 제외)" : "")}
                            </Text>)
                        :
                        <Text style={[styles.defaulttext, {marginLeft: 15}]}>
                            반복할 요일을 선택하세요!
                        </Text>
                    }                    
                </View>
            </View>
            <View style={styles.optionform}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={[styles.defaultbutton, {
                            marginLeft: 35,
                            width: 47, height: 27,
                            backgroundColor: repeatoption == 0 ? "#CCCCCC" : "#FFFFFF"
                        }]}
                        onPress={() => {
                            setRepeatoption(0);
                        }}
                    >
                        <Text style={[styles.defaultbuttontext, {
                            color: repeatoption == 0 ? "#000000" : "#CCCCCC"
                        }]}>
                            기본
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={[styles.defaultbutton, {
                            marginLeft: 10,
                            width: 47, height: 27,
                            backgroundColor: repeatoption == 1 ? "#CCCCCC" : "#FFFFFF"
                        }]}
                        onPress={() => {
                            setRepeatoption(1);
                        }}
                    >
                        <Text style={[styles.defaultbuttontext, {
                            color: repeatoption == 1 ? "#000000" : "#CCCCCC"
                        }]}>
                            매달
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={[styles.defaultbutton, {
                            marginLeft: 10,
                            width: 47, height: 27,
                            backgroundColor: repeatoption == 2 ? "#CCCCCC" : "#FFFFFF"
                        }]}
                        onPress={() => {
                            setRepeatoption(2);
                        }}
                    >
                        <Text style={[styles.defaultbuttontext, {
                            color: repeatoption == 2 ? "#000000" : "#CCCCCC"
                        }]}>
                            매년
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.holidaybutton}
                    onPress={() => {
                        setHoliday(!holiday);
                    }}
                >
                    <View style={styles.checkbox}>
                        {
                            holiday && <View style={styles.check} />
                        }
                    </View>
                    <Text style={{fontSize: 13, fontWeight: '400', color: 'black'}}>
                        공휴일 제외
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.daysofweek}>
                {daysofweek.map((value, index) => (
                    <Daysofweekselect
                        key={index}
                        index={index}
                        value={value}
                        dayselected={dayselected}
                        setDayselected={setDayselected}
                    />
                ))}
            </View>
            <View style={styles.border} />
        </>
    );
}