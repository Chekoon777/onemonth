import { Modal, View, Image, TouchableOpacity, StatusBar } from 'react-native';

import { styles } from './AddEventStyle';

export default function Pallete({ modalVisible, setModalVisible }) {

    return(
        <Modal
            transparent
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
            statusBarTranslucent
        >
            <StatusBar hidden translucent />
            <View style={styles.modalbackground}>
                <TouchableOpacity
                    style={styles.modalback}
                    onPress={() => setModalVisible(!modalVisible)}
                />
                <View style={styles.modalform}>
                    <Image
                        source={require('../Images/pallete.png')}
                        style={[styles.pallete, {position: 'absolute'}]}
                    />
                    <TouchableOpacity style={{
                            position: 'absolute', backgroundColor: 'transparent',
                            borderRadius: 100,
                            width: 50, height: 50, right: 23, top: 10,
                        }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                    />
                </View>
            </View>
        </Modal>
    );
}