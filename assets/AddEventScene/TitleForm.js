import { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, Dimensions } from 'react-native';

import { styles } from './AddEventStyle';

export default function TitleForm({ setModalVisible }) {
    const [isLunar, setIsLunar] = useState(false);
    const buttonanim = useRef(new Animated.Value(3)).current;
    const windowWidth = Dimensions.get("window").width;

    useEffect(() => {
        if(isLunar) {
            Animated.spring(buttonanim, {
                toValue: 3+(windowWidth-50)/2, duration: 1000, useNativeDriver: false,
            }).start();
        }
        else {
            Animated.spring(buttonanim, {
                toValue: 3, duration: 1000, useNativeDriver: false,
            }).start();
        }
    }, [isLunar]);

    return(
        <>
            <View style={styles.titleform}>
                <TextInput
                    style={styles.titleinput}
                    placeholder="제목"
                />
                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true)
                    }}
                    activeOpacity={0.5}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 40,
                    }}
                >
                    <View
                        style={styles.colorindicator}
                    />
                </TouchableOpacity>
            </View>
            <View style={[styles.border, {position: 'relative', top: -5}]} />
            <View style={[styles.toggleform, {justifyContent: 'flex-start'}]}>
                <Animated.View style={[
                    styles.buttonform, styles.shadowProp,
                    {right: buttonanim}
                ]} />
                <View style={styles.buttontextform}>
                    <Text style={styles.buttontext}>
                        음력
                    </Text>
                    <Text style={styles.buttontext}>
                        양력
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        setIsLunar(true);
                    }}
                    style={[styles.buttonform, {left: 3, backgroundColor: 'transparent'}]}
                />
                <TouchableOpacity
                    onPress={() => {
                        setIsLunar(false);
                    }}
                    style={[styles.buttonform, {right: 3, backgroundColor: 'transparent'}]}
                />
            </View>
        </>
    );
}