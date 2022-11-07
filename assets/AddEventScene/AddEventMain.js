import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StatusBar } from 'react-native';

import { styles } from './AddEventStyle';
import Daysofweek from './Daysofweek';
import TimeForm from './TimeForm';
import AlarmForm from './AlarmForm';
import LoactionForm from './LocationForm';
import TitleForm from './TitleForm';
import MemoForm from './MemoForm';
import Pallete from './Pallete';

export default function AddEventMain({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <SafeAreaView style={styles.body}>
            <StatusBar hidden />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.body}
                contentContainerStyle={{alignItems: 'center', height: 800}}
            >
                <TitleForm setModalVisible={setModalVisible}/>
                <TimeForm />
                <LoactionForm />
                <AlarmForm />
                <Daysofweek />
                <MemoForm />
            </ScrollView>
            <Pallete
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />
        </SafeAreaView>
    );
}