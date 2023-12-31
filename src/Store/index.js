import { configureStore, combineReducers } from '@reduxjs/toolkit';

import menuReducer from './Slices/menuSlice';
import mangaReducer from './Slices/mangaSlice';
import suggestReducer from './Slices/suggestSlice';
import titleReducer from './Slices/titlesSlice';
import userReducer from './Slices/userSlice';
import themeReducer from './Slices/themeSlice';

const rootReducer = combineReducers({
    menu: menuReducer, 
    manga: mangaReducer,
    suggest: suggestReducer,
    title: titleReducer,
    user: userReducer,
    theme: themeReducer,
})

export default configureStore({
    reducer: rootReducer
})