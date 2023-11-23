import axios from "axios";

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/todos");
      dispatch({ type: "FETCH_TODOS_SUCCESS", payload: response.data });
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
};

export const addTodo = (text) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/todos", {
        text,
        completed: false,
      });
      dispatch({ type: "ADD_TODO_SUCCESS", payload: response.data });
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };
};

export const updateTodo = (id, completed) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(`http://localhost:3001/todos/${id}`, {
        completed,
      });
      dispatch({ type: "UPDATE_TODO_SUCCESS", payload: response.data });
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/todos/${id}`);
      dispatch({ type: "DELETE_TODO_SUCCESS", payload: id });
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
};
