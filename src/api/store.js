import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "../features/car/carSlice";
export const store = configureStore({
  reducer: {
    car: carsReducer,
  },
});
