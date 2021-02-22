import generateID from "../helpers/generateID";

const initialState = {
  todos: [
    {
      task: "Complete online JavaScript course",
      id: generateID(),
      completed: true,
    },
    {
      task: "Jog around the park 3x",
      id: generateID(),
      completed: false,
    },
    {
      task: "10 minutes meditation",
      id: generateID(),
      completed: false,
    },
    {
      task: "Read for 1 hour",
      id: generateID(),
      completed: false,
    },
    {
      task: "Pick up groceries",
      id: generateID(),
      completed: false,
    },
    {
      task: "Complete Todo App on Frontend Mentor",
      id: generateID(),
      completed: false,
    },
  ],
};

export default initialState;
