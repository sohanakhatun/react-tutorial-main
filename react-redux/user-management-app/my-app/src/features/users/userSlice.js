import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      name: "Sample User",
      email: "dummy@gmail.com",
      phone: "9999999999",
    },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },

    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },

    editUser: (state, action) => {
      const { id, name, email, phone } = action.payload;
      const existingUser = state.users.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
        existingUser.phone = phone;
      }
    },
  },
});

export const { addUser, removeUser, editUser } = userSlice.actions;
export default userSlice.reducer;
