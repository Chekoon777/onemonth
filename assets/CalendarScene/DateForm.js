import { useState } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';

import { styles } from './CalendarStyle';
import { useSetMonthContext } from './CalendarContext';

const mode0marked = {
    '2022-10-05': {marked: true, dotColor: '#FFCA7B'},
    '2022-10-08': {marked: true, dotColor: '#96A0FF'},
    '2022-10-09': {marked: true, dotColor: '#FFCA7B'},
    '2022-10-10': {marked: true, dotColor: '#FFCA7B'},
    '2022-10-11': {marked: true, dotColor: '#96A0FF'},
    '2022-10-27': {marked: true, dotColor: '#96A0FF'},
    '2022-10-28': {marked: true, dotColor: '#96A0FF'},
    '2022-11-16': {marked: true, dotColor: '#96A0FF'},
    '2022-11-25': {marked: true, dotColor: '#FFCA7B'},
    '2022-11-26': {marked: true, dotColor: '#96A0FF'},
    '2022-12-15': {marked: true, dotColor: '#FFCA7B'},
    '2022-12-17': {marked: true, dotColor: '#96A0FF'},
}

const mode1marked = {
    '2022-10-11': {startingDay: true, color: '#ff4f4f', textColor: 'white'},
    '2022-10-12': {color: '#ff4f4f', textColor: 'white'},
    '2022-10-13': {color: '#ff4f4f', textColor: 'white'},
    '2022-10-14': {color: '#ff4f4f', textColor: 'white'},
    '2022-10-15': {endingDay: true, color: '#ff4f4f', textColor: 'white'},
    '2022-10-21': {startingDay: true, color: '#b577f7', textColor: 'white'},
    '2022-10-22': {color: '#b577f7', textColor: 'white'},
    '2022-10-23': {color: '#b577f7', textColor: 'white'},
    '2022-10-24': {color: '#b577f7', textColor: 'white'},
    '2022-10-25': {endingDay: true, color: '#b577f7', textColor: 'white'},
    '2022-11-21': {startingDay: true, color: '#ff4f4f', textColor: 'white'},
    '2022-11-22': {color: '#ff4f4f', textColor: 'white'},
    '2022-11-23': {color: '#ff4f4f', textColor: 'white'},
    '2022-11-24': {color: '#ff4f4f', textColor: 'white'},
    '2022-11-25': {endingDay: true, color: '#ff4f4f', textColor: 'white'},
    '2022-12-11': {startingDay: true, color: '#ff4f4f', textColor: 'white'},
    '2022-12-12': {color: '#ff4f4f', textColor: 'white'},
    '2022-12-13': {color: '#ff4f4f', textColor: 'white'},
    '2022-12-14': {color: '#ff4f4f', textColor: 'white'},
    '2022-12-15': {endingDay: true, color: '#ff4f4f', textColor: 'white'}
}

export default function DateForm({changemode1}) {
    const setMonth = useSetMonthContext();
    const [mode, setMode] = useState(false);

    const getCurrMonth = (monthdata) => {
        setMonth(monthdata.getMonth()+1);
    }

    const changemode2 = () => {
        changemode1();
        setMode(!mode);
    }

    return(
        <View style={styles.datebody}>
            <Calendar
                getCurrMonth={getCurrMonth}
                changemode={changemode2}
                monthFormat={'yyyy년 MM월'}
                markingType={'period'}
                markedDates={
                    mode ? mode0marked : mode1marked
                }
            />
        </View>
    );
}