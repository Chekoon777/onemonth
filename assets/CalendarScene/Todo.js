import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import { styles } from './CalendarStyle';

export default function Todo({ contents }) {
    const [done, setDone] = useState(false);

    return(
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {setDone(!done)}}
            style={styles.todoform}
        >
            <View style={{flexDirection: 'row'}}>
                <View style={[styles.checkbox, {backgroundColor: done ? "#000000" : "#FFFFFF"}]}>
                    {
                        done && <Feather name='check' size={15} color='white' />
                    }
                </View>
                <Text style={styles.todotext}>
                    {contents}
                </Text>
            </View>
        </TouchableOpacity>
    );
}