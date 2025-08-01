// src/features/user/userAPI.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://your-api-url.com/api"; // replace with your actual API

// 1. Get all users
export const fetchUsers = createAsyncThunk("user/fetchUsers", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${API_URL}/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data; // your backend should return array of users
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Fetch users failed");
  }
});

// 2. Add a new user
export const addUser = createAsyncThunk("user/addUser", async (userData: any, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(`${API_URL}/users`, userData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Add user failed");
  }
});

// 3. Delete a user 
export const deleteUser = createAsyncThunk("user/deleteUser", async (userId: string, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    await axios.delete(`${API_URL}/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return userId; // returning ID to remove from state
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Delete user failed");
  }
});
