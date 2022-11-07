import { Text, View } from "react-native";

import Feather from 'react-native-vector-icons/Feather';

import { styles } from './CalendarStyle';
import Todo from "./Todo";

export default function Category({ categoryname, todos, themecolor }) {
    return(
        <View style={styles.category}>
            <View style={styles.categoryheader}>
                <View style={{flexDirection: 'row'}}>
                    <View style={[
                        styles.categorycolor, styles.shadowProp,
                        {backgroundColor: themecolor}
                    ]} />
                    <Text style={styles.categorytext}>
                        {categoryname}
                    </Text>
                </View>
                <Feather name='plus-square' size={20} color='#BBBBBB' />
            </View>
            {
                todos.map((todo, idx) => (
                    <Todo key={idx} contents={todo} />
                ))
            }
        </View>
    );
}