import generateID from "../helpers/generateID";

const todos = [
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
    task: "Complete Todo App on Frontend",
    id: generateID(),
    completed: false,
  },
];

const initialState = {
  todos:
    localStorage.getItem("todos") == null
      ? todos
      : JSON.parse(localStorage.getItem("todos")),
};

export default initialState;
