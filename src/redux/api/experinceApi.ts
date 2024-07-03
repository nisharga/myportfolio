import { baseApi } from '../baseApi';
import { tagTypes } from '../tagTypes';

const experienceApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getExperinceData: build.query({
            query: () => ({
                url: `/experince`,
                method: 'GET'
            }),
            providesTags: [tagTypes.experience]
        })
    })
});

export const { useGetExperinceDataQuery } = experienceApi;
