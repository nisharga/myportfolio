import { baseApi } from '../baseApi';
import { tagTypes } from '../tagTypes';

const experienceApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getExperinceData: build.query({
            query: () => ({
                url: `/experience`,
                method: 'GET'
            }),
            providesTags: [tagTypes.experience]
        })
    })
});

export const { useGetExperinceDataQuery } = experienceApi;
