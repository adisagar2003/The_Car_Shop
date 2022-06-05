import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../reducer/reducer";

const store = configureStore({reducer: cartReducer})


export default store;