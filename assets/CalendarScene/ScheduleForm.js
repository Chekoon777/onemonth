import { useCallback, useEffect, useRef, useState } from 'react';
import { TouchableOpacity, ScrollView, View, Text, Animated } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Feather from 'react-native-vector-icons/Feather';
import { styles } from './CalendarStyle';
import Schedule from './Schedule';

export default function ScheduleForm({ mode, isDown, navigation }) {
    const fadeanim = useRef(new Animated.Value(0)).current;

    const [schedules, setSchedules] = useState([
        {key: 1, scheduleName: "이산수학", startTime: "18:30", endTime: "22:00"},
        {key: 2, scheduleName: "객체지향 프로그래밍", startTime: "13:00", endTime: "15:00"},
        {key: 3, scheduleName: "컴퓨터 알고리즘", startTime: "18:01", endTime: "23:50"},
        {key: 4, scheduleName: "자료구조", startTime: "18:23", endTime: "22:00"},
        {key: 5, scheduleName: "인공지능기초", startTime: "12:00", endTime: "22:00"},
        {key: 6, scheduleName: "컴퓨터구조", startTime: "18:15", endTime: "22:00"},
        {key: 7, scheduleName: "시스템 프로그래밍", startTime: "11:00", endTime: "13:00"},
        {key: 8, scheduleName: "컴퓨터 네트워크", startTime: "15:00", endTime: "17:30"},
    ]);

    const deleteSchedule = useCallback((key) => {
        setSchedules(schedules.filter(schedule => schedule.key != key));
    }, [schedules]);

    const organize = (scheduleList) => {
        const getTimeval = (time) => {
            const [hour, min] = time.split(":");
            return parseInt(hour, 10)*60 + parseInt(min, 10);
        }
        scheduleList.sort(({startTime: time1}, {startTime: time2}) => (getTimeval(time1)-getTimeval(time2)));
        return scheduleList;
    }

    useEffect(() => {
        if(isDown && !mode) {
            Animated.timing(fadeanim, {toValue: 1, delay: 200, duration: 500, useNativeDriver: false}).start();
        }
        else if(!isDown && !mode) {
            Animated.timing(fadeanim, {toValue: 0, duration: 400, useNativeDriver: false}).start();
        }
    }, [isDown]);

    useEffect(() => {
        if(mode) {
            Animated.timing(fadeanim, {toValue: 0, duration: 400, useNativeDriver: false}).start();
        }
        else if(!mode) {
            Animated.timing(fadeanim, {toValue: 1, duration: 400, useNativeDriver: false}).start();
        }
    }, [mode]);

    return(
        <Animated.View style={{
            opacity: fadeanim,
            position: mode ? 'absolute' : 'relative',
        }}>
            <View style={styles.scheduleheaderform}>
                <Text style={styles.scheduledatetext}>
                    10월 24일    스케줄
                </Text>
                <Feather name='more-horizontal' size={22} color="black" />
            </View>
            <ScrollView
                style={styles.schedulebody}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
            >
                <GestureHandlerRootView>
                    {organize(schedules).map((schedule, index) => {
                        return(
                            <View 
                                key={index}
                            >
                                <Schedule
                                    schedule={schedule}
                                    showhelp={index===0}
                                    deleteSchedule={deleteSchedule}
                                />
                                {index != schedules.length-1 ? <View style={styles.border} /> : <></>}
                            </View>
                        );
                    })}
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('AddEventMain')}}
                        activeOpacity={0.7}
                        style={[styles.addbutton, styles.shadowProp]}
                    >
                        <Feather name='plus' size={20} color='black' />
                    </TouchableOpacity>
                    <Text style={styles.tiptext}>
                        Tip. 스케줄은 밀어서 삭제할 수 있습니다.
                    </Text>
                    <View style={styles.addbutton} />
                </GestureHandlerRootView>
            </ScrollView>
        </Animated.View>
    );
}