import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";
import { fetchTodos, updateTodo, deleteTodo } from "../actions";

const TodoList = ({ todos, fetchTodos, updateTodo, deleteTodo }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <View>
      {todos.map((todo) => (
        <View key={todo.id}>
          <Text>{todo.text}</Text>
          <Text>{todo.completed ? "Completed" : "Not Completed"}</Text>
          <Button
            title="Toggle Complete"
            onPress={() => updateTodo(todo.id, !todo.completed)}
          />
          <Button title="Delete" onPress={() => deleteTodo(todo.id)} />
        </View>
      ))}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { fetchTodos, updateTodo, deleteTodo })(
  TodoList
);
