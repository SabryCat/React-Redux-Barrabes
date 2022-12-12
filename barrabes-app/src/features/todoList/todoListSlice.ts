import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4} from 'uuid';

export interface Todo {
  id: string;
  description: string;
  completed: boolean;
}
const initialState = [{id:uuidv4() , description:'Task 1', completed:true}] as Todo[];

export const todoListSlice = createSlice({
  name: 'todolist',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      },
      prepare: (description: string) => ({
        payload: {
          id: uuidv4(),
          description,
          completed: false,
        } as Todo,
      }),
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    setTodoStatus(
      state,
      action: PayloadAction<{ completed: boolean; id: string }>
    ) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});

export const { setTodoStatus, addTodo, removeTodo } = todoListSlice.actions;

export default todoListSlice.reducer;
