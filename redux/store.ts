import { configureStore } from '@reduxjs/toolkit';

import userReducer from './ducks/user';

import type { ReduxStore } from '../types/reduxTypes';

export const store = configureStore<ReduxStore>({
    reducer: {
        user: userReducer,
    }
});
