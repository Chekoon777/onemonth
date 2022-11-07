import { View, Text, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './CalendarStyle';

export default function Schedule({schedule, showhelp, deleteSchedule}) {
    const {key, scheduleName, startTime, endTime} = schedule;
    const timeconvert = (time) => {
        const [hour, min] = time.split(":");
        const hourint = parseInt(hour);
        if(hourint >= 12) return "오후 "+(hourint-12).toString(10)+":"+min;
        else return "오전 "+time;
    };

    const RightActions = () => {
        return(
            <TouchableOpacity
                onPress={() => {
                    deleteSchedule(key);
                }}
                activeOpacity={0.5}
                style={styles.deletebutton}
            >
                <Icon name='delete' size={20} color='white' />
            </TouchableOpacity>
        );
    }

    return(
        <Swipeable
            renderRightActions={RightActions}
        >
            <TouchableOpacity
                activeOpacity={0.7}
                style={[styles.schedule, {justifyContent: 'space-between'}]}
            >
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
                    <Text style={[styles.scheduelboldtext, {alignSelf: 'flex-start', marginRight: 17}]}>
                        {startTime}
                    </Text>
                    <View style={styles.dot} />
                    <View>
                        <Text style={styles.scheduelboldtext}>
                            {scheduleName}
                        </Text>
                        <Text style={styles.scheduelthintext}>
                            {timeconvert(startTime)} ~ {timeconvert(endTime)}
                        </Text>
                    </View>
                </View>
                {showhelp &&
                    <Text style={[styles.scheduelthintext, {color: '#FF0000', alignSelf: 'flex-end'}]}>
                        옆으로 밀어서 삭제
                    </Text>
                }
            </TouchableOpacity>
        </Swipeable>
    );
}

Schedule.defaultProps = {
    scheduleName: "My Schedule",
    startTime: "11:00",
    endTime: "13:00",
    showhelp: false,
};