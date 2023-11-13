import * as React from "react";
import { createStore } from 'redux'

import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { useState } from "react";
import { store } from "./actions/store";
import { Provider } from 'react-redux'

store.subscribe(() => console.log(store.getState()))



const App = () => {
  
  const [count, setCount] = useState(0)
  return (
    <>
    <Provider store={store}>
      <Pressable>
        <Text onPress={()=> {setCount(store.dispatch({ type: 'incremented'}))}} style={{fontSize: 30}}>Incremented</Text>
        <Text onPress={()=> {setCount(store.dispatch({ type: 'decremented' }))}} style={{fontSize: 30}}>Decremented</Text>
    
        <Text style={{fontSize: 30}}>{store.getState().count}</Text>
    
    </Pressable>
    </Provider>
    </>
  );
};
export default App;
