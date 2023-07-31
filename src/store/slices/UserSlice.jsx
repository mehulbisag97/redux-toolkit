import { createSlice } from "@reduxjs/toolkit";
import { deleteUsers } from "../actions/actions";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      // console.log("action.payload:", action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
      // console.log("removeUser", action.payload);
    },
    editUsers(state, action) {
      state.splice(action.payload.id, 1, action.payload.user);
      console.log("editUsers:", action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(deleteUsers, () => {
      return [];
    });
  },
});
// console.log(userSlice.actions.addUser(), "slice");

export default userSlice.reducer;
export const { addUser, removeUser, editUsers } = userSlice.actions;
