const initialState = {
  todos: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODOS_SUCCESS":
      return { ...state, todos: action.payload };
    case "ADD_TODO_SUCCESS":
      return { ...state, todos: [...state.todos, action.payload] };
    case "UPDATE_TODO_SUCCESS":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: action.payload.completed }
            : todo
        ),
      };
    case "DELETE_TODO_SUCCESS":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
