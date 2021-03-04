import generateID from "../helpers/generateID";

const reorder = (todoList, startIndex, endIndex) => {
  const result = Array.from(todoList);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const store = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            task: action.taskName,
            id: generateID(),
            completed: action.completed,
          },
        ],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((task) => task.id !== action.id),
      };
    case "COMPLETE_TODO":
      return {
        ...state,
        todos: state.todos.map((task) => {
          if (task.id === action.id) {
            return { ...task, completed: !task.completed };
          } else {
            return task;
          }
        }),
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter((task) => (task.completed ? null : task)),
      };
    case "DRAG":
      return {
        ...state,
        todos: reorder(action.todoList, action.startIndex, action.endIndex),
      };

    default:
      return state;
  }
};

export default store;
