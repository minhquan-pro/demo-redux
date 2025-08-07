import { createSlice } from "@reduxjs/toolkit";

const useSlice = createSlice({
	name: "user",
	initialState: {
		name: "Minh Quan",
		age: 20,
		about: "HELLO MY NAME IS QUAN",
		avaUrl: "https://images.pexels.com/photos/33209986/pexels-photo-33209986.jpeg",
		theme: "#ff9051",
	},
	reducers: {
		update: (state, action) => {
			state.name = action.payload.name;
			state.age = action.payload.age;
			state.about = action.payload.about;
			state.avaUrl = action.payload.avaUrl;
			state.theme = action.payload.theme;
		},
	},
});

export const { update } = useSlice.actions;
export default useSlice.reducer;
