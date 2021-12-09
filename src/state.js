import { atom, useAtom } from 'jotai';
import domain from './domain';

const initialValue = [
  { id: crypto.randomUUID(), content: '투두 리스트', completed: false },
];

const todoListAtom = atom(initialValue);

function useTodoListAtom() {
  const [todoList, setTodoList] = useAtom(todoListAtom); //private

  function addTodo(content) {
    const newTodo = { id: crypto.randomUUID(), content, completed: false };
    setTodoList(domain.addTodo(newTodo));
  }

  function deleteTodo(targetId) {
    setTodoList(domain.deleteTodo(targetId));
  }

  function completeTodo(targetId) {
    setTodoList(domain.completeTodo(targetId));
  }

  function clearCompleted() {
    setTodoList(domain.clearCompleted);
  }

  return { todoList, addTodo, deleteTodo, completeTodo, clearCompleted }; // 객체로 만들어서 리턴;
}

export default useTodoListAtom; // 내보내기
