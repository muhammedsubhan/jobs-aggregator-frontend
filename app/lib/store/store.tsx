import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../store/features/JobsSlice";
import { jobsApi } from "@/app/utils/JobsAPI/jobsApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      Jobs: jobsReducer,
      [jobsApi.reducerPath]: jobsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(jobsApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
