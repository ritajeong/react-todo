import { produce } from 'immer';

const domain = {
  addTodo: (newTodo) => (old) => [...old, newTodo],
  deleteTodo: (targetId) => (old) => old.filter((todo) => todo.id !== targetId),
  completeTodo: (targetId) => produce((old) => {
    const target = old.find((todo) => todo.id === targetId);
    target.completed = !target.completed;
  }),
}

export default domain;