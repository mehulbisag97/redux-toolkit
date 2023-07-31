import { combineReducers } from "redux";

// Import your individual reducers here

import UserSlice from "../slices/UserSlice";
// Add more reducers as needed...

// Combine all the reducers into the rootReducer
const rootReducer = combineReducers({
  users: UserSlice,
  // Add more reducer slices as needed...
});

export default rootReducer;
