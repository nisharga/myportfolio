import { baseApi } from '../baseApi';
import { tagTypes } from '../tagTypes';

const testimonialApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getTestimonialData: build.query({
            query: () => ({
                url: `/testimonial`,
                method: 'GET'
            }),
            providesTags: [tagTypes.testimonial]
        })
    })
});

export const { useGetTestimonialDataQuery } = testimonialApi;
