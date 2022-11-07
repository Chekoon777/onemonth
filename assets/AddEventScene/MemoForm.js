import { useState } from 'react';
import { View, TextInput } from 'react-native';

import MaterialIcons2 from 'react-native-vector-icons/MaterialIcons';

import { styles } from './AddEventStyle';

export default function MemoForm() {
    const [formheight, setFormheight] = useState(40);

    const updateSize = (height) => {
        setFormheight(height);
    }

    return(
        <>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons2 name="event-note" size={22} color="black" style={{position: 'relative', top: -3}} />
                <TextInput
                    multiline
                    style={[styles.textinputform, styles.defaulttext, {height: formheight}]}
                    placeholder="메모"
                    onContentSizeChange={(e) => updateSize(e.nativeEvent.contentSize.height)}
                />
            </View>
            <View style={styles.border} />
        </>
    );
}