import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  FirstScreen,
  sc1_a,
  sc1_b,
  sc1_c,
  sc1_d,
  sc1_e,
  sc2_a,
  XMEye,
} from './screens';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="sc1_a" component={sc1_a} />
        <Stack.Screen name="sc1_b" component={sc1_b} />
        <Stack.Screen name="sc1_c" component={sc1_c} />
        <Stack.Screen name="sc1_d" component={sc1_d} />
        <Stack.Screen name="sc1_e" component={sc1_e} />
        <Stack.Screen name="sc2_a" component={sc2_a} />
        <Stack.Screen name="XMEye" component={XMEye} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
