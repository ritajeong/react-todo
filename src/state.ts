import { atom, useAtom } from 'jotai';
import { produce } from 'immer';

const initialValue = [
  { id: crypto.randomUUID(), content: '투두 리스트', completed: false },
];

const todoListAtom = atom(initialValue);

function useTodoListAtom() {
  const [todoList, setTodoList] = useAtom(todoListAtom); //private

  function addTodo(content) {
    const newTodo = { id: crypto.randomUUID(), content, completed: false };
    setTodoList((old) => [...old, newTodo]);
  }

  function deleteTodo(targetId) {
    setTodoList((old) => old.filter((todo) => todo.id !== targetId));
  }

  function completeTodo(targetId) {
    setTodoList(
      produce((old) => {
        const target = old.find((todo) => todo.id === targetId);
        target.completed = !target.completed;
      })
    );
  }

  return { todoList, addTodo, deleteTodo, completeTodo }; // 객체로 만들어서 리턴;
}

export default useTodoListAtom; // 내보내기
