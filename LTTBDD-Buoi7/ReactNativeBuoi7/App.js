const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import API_Screen_01 from "./screens/API_Screen_01";
import API_Screen_02 from "./screens/API_Screen_02";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="API_Screen_01"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="API_Screen_01" component={API_Screen_01} />
      <Stack.Screen name="API_Screen_02" component={API_Screen_02} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};
export default App;
