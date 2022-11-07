import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoadingScene from './LoadingScene';
import CalendarMain from './CalendarScene/CalendarMain';
import AddEventMain from './AddEventScene/AddEventMain';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="LoadingScene"
                    component={LoadingScene}
                    options={{
                        header: () => null
                    }}
                />
                <Stack.Screen
                    name="CalendarMain"
                    component={CalendarMain}
                    options={{
                        header: () => null
                    }}
                    />
                <Stack.Screen
                    name="AddEventMain"
                    component={AddEventMain}
                    options={{
                        animation: 'fade_from_bottom',
                        header: () => null
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}