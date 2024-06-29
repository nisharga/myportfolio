import { baseApi } from '../baseApi';
import { tagTypes } from '../tagTypes';

const resumeApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getResumeData: build.query({
            query: () => ({
                url: `/resume`,
                method: 'GET'
            }),
            providesTags: [tagTypes.resume]
        })
    })
});

export const { useGetResumeDataQuery } = resumeApi;
