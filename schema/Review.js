import { list } from '@keystone-6/core'
import { checkbox, text, timestamp, integer, relationship } from '@keystone-6/core/fields'

const Review = list({
    ui: { labelField: 'reviewSummary' },
    fields: {
        reviewSummary: text({ ui: { displayMode: 'textarea' }}),
        pros: text(),
        cons: text(),
        suggestions: text(),
        isApproved: checkbox(),
        datePosted: timestamp({ defaultValue: { kind : 'now' } }),
        alumniYear: integer(),
        isAnon: checkbox(),
        inAppropriateCount: integer(),
        reviewBy: relationship({
            ref: 'User.reviewsMade',
            many: true,
        }),
        rating: relationship({
            ref: 'Rating.reviewRating',
            many: true,
        }),
        reviewsOfUni: relationship({
            ref: 'University.reviews',
            many: false,
        }),
        reviewsOfCourse: relationship({
            ref: 'Course.reviews',
            many: false,
        }),
    }
})

export default Review
