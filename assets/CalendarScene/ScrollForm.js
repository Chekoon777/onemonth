import { useState } from "react";
import { ScrollView, View } from "react-native";

import LinearGradient from 'react-native-linear-gradient';

import { styles } from "./CalendarStyle";
import { useMonthContext } from "./CalendarContext";
import ImageForm from "./ImageForm";
import DateForm from './DateForm';
import ScheduleForm from './ScheduleForm';
import TodoForm from "./TodoForm";

export default function ScrollForm({ navigation }) {
    const month = useMonthContext();
    const [isDown, setIsDown] = useState(false);
    const [mode, setMode] = useState(false);

    const onScrollChanged = (scrollamount) => {
        if(scrollamount > 70) {
            setIsDown(true);
        }
        else {
            setIsDown(false);
        }
    }

    const changemode1 = () => {
        setMode(!mode);
    }

    return(
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scrollform}
            snapToInterval={700}
            pagingEnabled
            scrollEventThrottle={400}
            onScroll={({nativeEvent}) => {
                onScrollChanged(nativeEvent.contentOffset.y);
            }}
        >
            <ImageForm month={month} />
            <View style={[styles.calendarbody, styles.shadowProp]}>
                <DateForm changemode1={changemode1} />
                <LinearGradient
                    start={{x: 0, y: 0}} end={{x: 0, y: 1}}
                    locations={[0, 0.10, 1]}
                    colors={['#0000000C', '#00000000', '#00000000']}
                    style={styles.gradientbackground}
                >
                    <ScheduleForm
                        mode={mode}
                        isDown={isDown}
                        navigation={navigation}
                    />
                    <TodoForm
                        mode={mode}
                        isDown={isDown}
                        navigation={navigation}
                    />
                </LinearGradient>
            </View>
        </ScrollView>
    );
}