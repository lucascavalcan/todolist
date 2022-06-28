import {createSlice} from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "theme",
    initialState: {
        status: "Dark",
        color: "Light"
    },
    reducers: {
        setThemeStatus: (state, action) => {
            state.status = action.payload;
        },
        setThemeColor: (state, action) => {
            state.color = action.payload;
        }
    }
});

export const {setThemeColor, setThemeStatus} = slice.actions;
export default slice.reducer

