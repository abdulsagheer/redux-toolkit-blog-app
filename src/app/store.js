import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "../features/blogs/blogSlice";
import usersSlice from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    blogs: blogSlice,
    users: usersSlice,
  },
});
