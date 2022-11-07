import { useEffect, useRef, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Animated, StatusBar } from 'react-native';

import { styles } from './CalendarStyle';
import ScrollForm from './ScrollForm';
import { useMonthContext } from './CalendarContext';

const BACK_COLORS = [
    "#1D1E2399",
    "#37C4CABB",
    "#959EA2BB",
    "#72C6A5BB",
    "#CE5A9EBB",
    "#B3A7CDBB",
    "#006494BB",
    "#9A6B31BB",
    "#D184AEBB",
    "#B82647BB",
    "#DDE7E7BB",
    "#89236ABB",
];

export default function CalendarBackground({ navigation }) {
    const month = useMonthContext();
    const [colorval, setColorval] = useState({
        prevcolor: month ? BACK_COLORS[month-1] : "#FFFFFF",
        nextcolor: month ? BACK_COLORS[month-1] : "#FFFFFF",
    });
    const coloranim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if(month) {
            setColorval({
                prevcolor: colorval.nextcolor,
                nextcolor: BACK_COLORS[month-1]
            });
            // console.log(colorval.prevcolor, colorval.nextcolor);
            handleAnimation();
        }
    }, [month]);

    const handleAnimation = () => {
        coloranim.setValue(0);
        Animated.timing(coloranim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }

    const boxInterpolation = coloranim.interpolate({
        inputRange: [0, 1],
        outputRange:[colorval.prevcolor, colorval.nextcolor]
    });

    return(
        <Animated.View style={[styles.body, {backgroundColor: boxInterpolation}]}>
            <StatusBar hidden />
            <LinearGradient
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                locations={[0, 0.10, 0.20, 0.80, 0.90, 1]}
                colors={['#00000050', '#00000030', '#00000020', '#00000020', '#00000030', '#00000050']}
                style={styles.gradientbackground}
            >
                <ScrollForm
                    navigation={navigation}
                />
            </LinearGradient>
        </Animated.View>
    );
}