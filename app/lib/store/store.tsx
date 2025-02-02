import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../store/features/JobsSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      Jobs: jobsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
