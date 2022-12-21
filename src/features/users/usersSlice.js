import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: "0", name: "John Doe" }];

const usersSlice = createSlice(initialState, {
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
