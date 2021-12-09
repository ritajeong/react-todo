import domain from './domain';

const TEST_TODO = { id: "test", content: "테스트 할일", completed: false };
const TEST_TODO_COMPLETED = { id: "test2", content: "테스트 할일2", completed: true };

describe('todoList domain', () => {
  it('addTodo', () => {
    // (newTodo) => (old) => [...old, newTodo]
    const result = domain.addTodo(TEST_TODO)([]);

    expect(result).toEqual([TEST_TODO]);
  });

  // (old) => old.filter((todo) => todo.id !== targetId)

  it('deleteTodo', () => {
    // (newTodo) => (old) => [...old, newTodo]
    const result = domain.deleteTodo(TEST_TODO.id)([TEST_TODO]);

    expect(result).toEqual([]);
  });

  it('completeTodo', () => {
    // (newTodo) => (old) => [...old, newTodo]
    const result = domain.completeTodo(TEST_TODO.id)([TEST_TODO]);

    expect(result).toEqual([{...TEST_TODO, completed: true}]);
  });

});
