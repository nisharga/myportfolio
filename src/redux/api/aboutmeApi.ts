import { baseApi } from '../baseApi';
import { tagTypes } from '../tagTypes';

const aboutmeApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAboutData: build.query({
            query: () => ({
                url: `/aboutme`,
                method: 'GET'
            }),
            providesTags: [tagTypes.about]
        })
    })
});

export const { useGetAboutDataQuery } = aboutmeApi;
