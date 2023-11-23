import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter todo..."
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
      <Button title="Add Todo" onPress={handleSubmit} />
    </View>
  );
};

export default connect(null, { addTodo })(TodoForm);
