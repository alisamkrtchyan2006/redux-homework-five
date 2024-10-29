import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState, ITask, IUpdateAction } from "./types";
import { fetchTasks, updateTaskStatus } from "../lib/api";

const initialState: IState = {
    tasks: [],
  };

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<ITask[]>) => {
          state.tasks = action.payload;
        })
        .addCase(updateTaskStatus.fulfilled, (state, action: PayloadAction<IUpdateAction>) => {
          const task = state.tasks.find(task => task.id === action.payload.id);
          if (task) {
            task.status = action.payload.status;
          }
        });
    },
  });
  
  export const reducer = taskSlice.reducer;