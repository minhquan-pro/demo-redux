import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slices/userSlice";
import postReducer from "./Slices/postSLice";

export default configureStore({
	reducer: {
		user: userReducer,
		post: postReducer,
	},
});
