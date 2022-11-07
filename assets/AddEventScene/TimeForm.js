import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import { styles } from './AddEventStyle';

export default function TimeForm() {
    const [allday, setAllday] = useState(false);

    return(
        <>
            <View style={styles.timeform}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Feather name="clock" size={18} color="black" style={{position: 'relative'}} />
                    <View style={{marginLeft: 15}}>
                        <Text style={styles.defaulttext}>
                            시간
                        </Text>
                        <Text style={{fontSize: 10, fontWeight: '400', color: '#9D9D9D'}}>
                            GMT +9 한국 표준시
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={[styles.defaultbutton, {
                        width: 75, height: 35,
                        backgroundColor: allday ? "#CCCCCC" : "#FFFFFF"
                    }]}
                    onPress={() => {
                        setAllday(!allday);
                    }}
                >
                    <Text style={[styles.defaultbuttontext, {
                        color: allday ? "#000000" : "#CCCCCC"
                    }]}>
                        하루종일
                    </Text>
                </TouchableOpacity>
            </View>
            {
                !allday ?
                <View style={styles.startendtimeform}>
                    <View style={styles.timepanel}>
                        <Text style={styles.defaulttext}>
                            10월 3일 (월)
                        </Text>
                        <Text style={styles.defaulttext}>
                            오전 10:00
                        </Text>
                    </View>
                    <Feather name="arrow-right" size={20} color="#CCCCCC" />
                    <View style={styles.timepanel}>
                        <Text style={styles.defaulttext}>
                            10월 3일 (월)
                        </Text>
                        <Text style={styles.defaulttext}>
                            오전 10:00
                        </Text>
                    </View>
                </View>
                : null
            }
            <View style={[styles.border, {marginTop: 15}]} />
        </>
    );
}