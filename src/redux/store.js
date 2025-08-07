import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import postReducer from "./postSLice";

export default configureStore({
	reducer: {
		user: userReducer,
		post: postReducer,
	},
});
