import { baseApi } from '../baseApi';
import { tagTypes } from '../tagTypes';

const skillsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getSkillsData: build.query({
            query: () => ({
                url: `/skills`,
                method: 'GET'
            }),
            providesTags: [tagTypes.skills]
        })
    })
});

export const { useGetSkillsDataQuery } = skillsApi;
