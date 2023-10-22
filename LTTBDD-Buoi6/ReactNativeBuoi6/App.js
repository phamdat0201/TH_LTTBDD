import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Screen_1} />
        <Tab.Screen name="Settings" component={Screen_2} />
        <Tab.Screen name="Screen3" component={Screen_3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
