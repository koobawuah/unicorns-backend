import { list } from "@keystone-6/core";
import { text, integer, checkbox, relationship, image } from "@keystone-6/core/fields"

const University = list({
    fields: {
        name: text({ validation: { isRequired: true } }),
        slug: text(),
        campusImage: image(),
        description: text({ ui: { displayMode: "textarea" } }),
        location: text(),
        country: text(),
        population: integer(),
        isApproved: checkbox(),
        students: relationship({
            ref: 'User.attendsUniversity',
            many: true,
        }),
        hasCourses: relationship({
            ref: 'Course.courseAt',
            many: true,
        }),
        overallRating: relationship({
            ref: 'Rating.ratingForUni',
            many: true,
        }),
        reviews: relationship({
            ref: 'Review.reviewsOfUni',
            many: true,
        }),
    }
})

export default University;
