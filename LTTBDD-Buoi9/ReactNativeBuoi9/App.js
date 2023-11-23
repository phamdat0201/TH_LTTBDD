import React from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import TodoList from "./src/components/TodoList";
import TodoForm from "./src/components/TodoForm";

const App = () => {
  return (
    <Provider store={store}>
      <TodoForm />
      <TodoList />
    </Provider>
  );
};

export default App;
