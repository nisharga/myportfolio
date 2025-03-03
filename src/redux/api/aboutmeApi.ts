import { baseApi } from '../baseApi';
import { tagTypes } from '../tagTypes';

const aboutMeApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAboutMeData: build.query({
            query: () => ({
                url: `/aboutme`,
                method: 'GET'
            }),
            providesTags: [tagTypes.resume]
        })
    })
});

export const { useGetAboutMeDataQuery } = aboutMeApi;
