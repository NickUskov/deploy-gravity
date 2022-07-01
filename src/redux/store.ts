import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./slices/modeSlice";
import roadReducer from "./slices/roadSlice";

export const store = configureStore({
    reducer: {
        mode: modeReducer,
        road: roadReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;