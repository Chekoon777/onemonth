import { StatusBar, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoadingScene({ navigation }) {
    setTimeout(() => navigation.replace('CalendarMain'), 2000);

    return(
        <SafeAreaView style={styles.body}>
            <StatusBar hidden />
            <Text style={styles.title}>
                DiamondTree
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 40,
    }
});