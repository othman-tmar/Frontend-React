import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleSlice"
import cartSliceReducer from "../features/cartSlice"
import scaategoriesReducer from "../features/scategorieSlice"

const store = configureStore({
    reducer: {
        storearticles: articlesReducer,
        storescategories: scaategoriesReducer,
        storecart:cartSliceReducer,
    }
})
export default store