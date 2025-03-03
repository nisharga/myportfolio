import { baseApi } from './baseApi';
import countReducer from './reducer/countSlice';

export const reducer = {
    [baseApi.reducerPath]: baseApi.reducer,
    count: countReducer
};
