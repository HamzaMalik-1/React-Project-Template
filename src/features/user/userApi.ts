import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api"; // ✅ use the Axios instance

// ✅ Get all users
export const fetchUsers = createAsyncThunk("user/fetchUsers", async (_, thunkAPI) => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to fetch users");
  }
});

// ✅ Add a new user
export const addUser = createAsyncThunk("user/addUser", async (userData: any, thunkAPI) => {
  try {
    const response = await api.post("/users", userData);
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to add user");
  }
});

// ✅ Delete user by ID
export const deleteUser = createAsyncThunk("user/deleteUser", async (userId: string, thunkAPI) => {
  try {
    await api.delete(`/users/${userId}`);
    return userId; // used to remove user from state
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to delete user");
  }
});
