import { list } from "@keystone-6/core";
import { select, float, relationship } from "@keystone-6/core/fields";

const Rating = list({
    ui: { labelField: 'rating' },
    fields: {
        ratingType: select({ 
            defaultValue: 'Rating Options',
            options: [
                { label: 'Overall Rating', value: 'OVERALL_RATING' },
                { label: 'Facilities Rating', value: 'FACILITY_RATING' },
                { label: 'Course Rating', value: 'COURSE_RATING' },
                { label: 'Faculty Rating', value: 'FACULTY_RATING' },
                { label: 'Recommendation', value: 'RECOMMEND_RATING' },
            ]}),
            rating: float(),
            reviewRating: relationship({
                ref: 'Review.rating',
                many: false,
            }),
            ratingForUni: relationship({
                ref: 'University.overallRating',
                many: false,
            }),
            ratingForCourse: relationship({
                ref: 'Course.courseRating',
                many: false,
            }),
    }
})

export default Rating; 
