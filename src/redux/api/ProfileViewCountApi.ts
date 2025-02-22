import { baseApi } from '../baseApi';
import { tagTypes } from '../tagTypes';

const siteVisitApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getSiteVisitData: build.query({
            query: () => ({
                url: `/resume/view-count`,
                method: 'POST'
            })
        })
    })
});

export const { useGetSiteVisitDataQuery } = siteVisitApi;
