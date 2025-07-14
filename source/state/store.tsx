import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, persistStore, REGISTER, REHYDRATE } from "redux-persist";
import rootReducer from "./rootReducer";
import reduxStorage from "./storage";
import { configureStore } from "@reduxjs/toolkit";


const persistConfig = {
    key: 'root',
    storage: reduxStorage,
    blackList: [],
    whiteList: ['user', 'cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE]
            }
        })
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
