import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUpdateAction } from "../tasks/types";

const API_URL = 'http://localhost:3004/tasks';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await axios.get(API_URL);
    return response.data;
});
  
  export const updateTaskStatus = createAsyncThunk('tasks/updateTask', async (update: IUpdateAction) => {
    await axios.put(`${API_URL}/${update.id}`, { status: update.status });
    return update;
  });
  