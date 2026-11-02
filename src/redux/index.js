import { configureStore } from "@reduxjs/toolkit";
import addOrderSlice from "./features/addOrder/addOrderSlice";

export default configureStore({
  reducer: {
    counter: addOrderSlice,
  },
});
