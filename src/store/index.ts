import usersExpReducer , {UsersExpApiSlice } from './../components/CRUDComponents/UsersExpSlice';
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import { createAction } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist'

export const resetStore = createAction('resetStore')

const rootReducer = combineReducers({
    users: usersExpReducer,
    [UsersExpApiSlice.reducerPath]: UsersExpApiSlice.reducer
})

const appReducer: typeof rootReducer = (state, action) => {
    if (action.type === resetStore.type) {
        return rootReducer(undefined, action)
    }
    return rootReducer(state, action)
}

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: [UsersExpApiSlice.reducerPath],
}

const persistedReducer = persistReducer(persistConfig, appReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(UsersExpApiSlice.middleware),
})
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>


export type AppDispatch= typeof store.dispatch 