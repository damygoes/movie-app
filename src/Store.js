import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import userReducer from "./features/userDetails/userDetailsSlice";

const persistConfig = {
	key: "root",
	storage,
};
const user = persistReducer(persistConfig, userReducer);

export const store = configureStore({
	reducer: {
		user,
		middleware: [thunk],
	},
});

export const persistor = persistStore(store);
