// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import store from "./src/store";
import MessageListScreen from "./src/components/messageListScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="MessageList" component={MessageListScreen} />
            {/* Thêm các màn hình khác nếu cần thiết */}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
