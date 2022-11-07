import { useEffect, useRef } from "react";
import { TouchableOpacity, ScrollView, View, Text, Animated } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Feather from 'react-native-vector-icons/Feather';
import { styles } from './CalendarStyle';
import Category from "./Category";

export default function TodoForm({ mode, isDown, navigation }) {
    const fadeanim = useRef(new Animated.Value(0)).current;

    const todolistobj = [
        {
            categoryname: "공부",
            todos: [
                "일반생물학 2",
                "일반화학 2",
                "유기화학"
            ],
            themecolor: "#96A0FF",
        },
        {
            categoryname: "미팅",
            todos: [
                "공모전 회의",
                "동아리 회의",
            ],
            themecolor: "#FFD596",
        }
    ];

    useEffect(() => {
        if(isDown && mode) {
            Animated.timing(fadeanim, {toValue: 1, delay: 200, duration: 500, useNativeDriver: false}).start();
        }
        else if(!isDown && mode) {
            Animated.timing(fadeanim, {toValue: 0, duration: 400, useNativeDriver: false}).start();
        }
    }, [isDown]);

    useEffect(() => {
        if(!mode) {
            Animated.timing(fadeanim, {toValue: 0, duration: 400, useNativeDriver: false}).start();
        }
        else if(mode) {
            Animated.timing(fadeanim, {toValue: 1, duration: 400, useNativeDriver: false}).start();
        }
    }, [mode]);

    return(
        <Animated.View style={{
            opacity: fadeanim,
            // position: !mode ? 'absolute' : 'relative',
        }}>
            <View style={styles.scheduleheaderform}>
                <Text style={styles.scheduledatetext}>
                    체크리스트
                </Text>
                <Feather name='more-horizontal' size={22} color="black" />
            </View>
            <ScrollView
                style={styles.schedulebody}
                showsVerticalScrollIndicator={false}
                nestedScrollEnabled={true}
            >
                <GestureHandlerRootView>
                    {
                        todolistobj.map((category, idx) => (
                            <Category
                                key={idx}
                                categoryname={category.categoryname}
                                todos={category.todos}
                                themecolor={category.themecolor}
                            />
                        ))
                    }
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('AddEventMain')}}
                        activeOpacity={0.7}
                        style={[styles.addbutton, styles.shadowProp]}
                    >
                        <Feather name='plus' size={20} color='black' />
                    </TouchableOpacity>
                    <Text style={styles.tiptext}>
                        Tip. 체크리스트는 밀어서 삭제할 수 있습니다.
                    </Text>
                    <View style={styles.addbutton} />
                </GestureHandlerRootView>
            </ScrollView>
        </Animated.View>
    );
}