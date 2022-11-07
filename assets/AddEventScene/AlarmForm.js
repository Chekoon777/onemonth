import { View, Text, TouchableOpacity } from 'react-native';

import Feater from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './AddEventStyle';

export default function AlarmForm() {
    return(
        <>
            <View style={styles.defaultform}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons name="bell-outline" size={22} color="black" style={{position: 'relative', top: -2}}/>
                    <Text style={[styles.defaulttext, {marginLeft: 15}]}>
                        알림
                    </Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.showalarm}
                >
                    <Text style={styles.defaulttext}>
                        3개의 알림
                    </Text>
                    <Feater name="chevron-right" size={22} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.border} />
        </>
    );
}