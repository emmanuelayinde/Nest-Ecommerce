import { createSlice } from "@reduxjs/toolkit";


export interface appState {

}

const initialState: appState = {

};

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {

    },
});

export const { } = appSlice.actions;
export default appSlice.reducer;