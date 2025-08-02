import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userGrowth: [
    { name: "Jan", users: 30, sales: 400 },
    { name: "Feb", users: 50, sales: 700 },
    { name: "Mar", users: 40, sales: 500 },
    { name: "Apr", users: 60, sales: 900 },
    { name: "May", users: 80, sales: 1100 },
  ],
  userRoles: [
    { name: "Admin", value: 6 },
    { name: "Editors", value: 10 },
    { name: "Viewers", value: 18 },
  ],
};

const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {},
});

export default analyticsSlice.reducer;
