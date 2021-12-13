import { createSlice } from '@reduxjs/toolkit';
import domain from "./domain";

const initialState = {
  value: [
    { id: crypto.randomUUID(), content: '투두 리스트', completed: false },
  ],
}

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const {todoId, content} = action.payload;
      const newTodo = { id: todoId, content, completed: false };

      state.value = domain.addTodo(newTodo)(state.value);
    },
    deleteTodo: (state, action) => {
      state.value = domain.deleteTodo(action.payload.targetId)(state.value);
    },
    completeTodo: (state, action) => {
      state.value = domain.completeTodo(action.payload.targetId)(state.value);
    },
    clearCompleted: (state) => {
      state.value = domain.clearCompleted(state.value);
    }
  },
})

export const { addTodo, deleteTodo, completeTodo, clearCompleted } = todoListSlice.actions

export default todoListSlice.reducer