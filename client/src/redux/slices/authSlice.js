import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setOpenSidebar: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setOpenSidebar } = authSlice.actions;

export default authSlice.reducer;