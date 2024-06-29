import { baseApi } from '../baseApi';
import { tagTypes } from '../tagTypes';

const heroApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getHeroData: build.query({
            query: () => ({
                url: `/heroarea`,
                method: 'GET'
            }),
            providesTags: [tagTypes.hero]
        })
    })
});

export const { useGetHeroDataQuery } = heroApi;
