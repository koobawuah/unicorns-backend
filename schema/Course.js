import { list } from "@keystone-6/core";
import { text, checkbox, relationship } from "@keystone-6/core/fields";


const Course = list({
    ui: { labelField: 'courseTitle' },
    fields: {
        courseCode: text({ isIndexed: 'unique', validation: {isRequired: true } }),
        courseTitle: text(),
        description: text({ ui: { displayMode: "textarea" } }),
        isPopular: checkbox(),
        isApproved: checkbox(),
        courseAt: relationship({
            ref: 'University.hasCourses',
            many: false,
        }),
        courseRating: relationship({
            ref: 'Rating.ratingForCourse',
            many: true,
        }),
        reviews: relationship({
            ref: 'Review.reviewsOfCourse',
            many: true,
        }),
    }
})

export default Course
