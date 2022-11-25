import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//page
import Weather from './screens/weather/Weather';
import Statistic from './screens/statistic/Statistic';
import News from './screens/news/News';
import Localization from './screens/localization/Localization';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-cloudy-night'
                : 'ios-cloudy-night-outline';
            } else if (route.name === 'Statistic') {
              iconName = focused ? 'analytics' : 'analytics-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-newspaper' : 'ios-newspaper-outline';
            } else if (route.name === 'Localization') {
              iconName = focused ? 'ios-Localization' : 'ios-Localization-outline';
            }

            // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Weather}/>
        <Tab.Screen name="Statistic" component={Statistic} />
        <Tab.Screen name="Settings" component={News} />
        <Tab.Screen name="Localization" component={Localization} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}




