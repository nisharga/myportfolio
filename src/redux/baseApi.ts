import { createApi } from '@reduxjs/toolkit/query/react';
import { tagTypesList } from './tagTypes';
import { axiosBaseQuery } from '@/utlis/axiosBaseQuery';
import { getBaseUrl } from '@/configs/env';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
    endpoints: (builder) => ({
        //end points..
    }),
    tagTypes: tagTypesList
});
