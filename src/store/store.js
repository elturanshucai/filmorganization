import { configureStore } from "@reduxjs/toolkit"
import moviesReducer from "./reducer/moviesReducer"

const store = configureStore({
    reducer: {moviesReducer}
})

export default store;