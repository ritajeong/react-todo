import domain from './domain';

const TEST_TODO = { id: "test", content: "테스트 할일", completed: false };
const TEST_TODO_COMPLETED = { id: "test2", content: "테스트 할일2", completed: true };

describe('todoList domain', () => {
  it('addTodo', () => {
    // (newTodo) => (old) => [...old, newTodo]
    const result = domain.addTodo(TEST_TODO)([]);

    expect(result).toEqual([TEST_TODO]);
  });

  it('deleteTodo', () => {
    const result = domain.deleteTodo(TEST_TODO.id)([TEST_TODO]);

    expect(result).toEqual([]);
  });

  it('completeTodo', () => {
    const result = domain.completeTodo(TEST_TODO.id)([TEST_TODO]);

    expect(result).toEqual([{...TEST_TODO, completed: true}]);
  });

  it('clearCompleted', () => {
    const result = domain.clearCompleted([TEST_TODO, TEST_TODO_COMPLETED]);

    expect(result).toEqual([TEST_TODO]);
  });
});
