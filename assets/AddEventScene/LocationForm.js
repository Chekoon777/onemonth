import { View, TextInput } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { styles } from './AddEventStyle';

export default function LoactionForm() {
    return(
        <>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="location-outline" size={22} color="black" style={{position: 'relative', top: -3}} />
                <TextInput
                    style={[styles.textinputform, styles.defaulttext]}
                    placeholder="장소"
                />
            </View>
            <View style={styles.border} />
        </>
    );
}