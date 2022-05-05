import { list } from '@keystone-6/core'
import { checkbox, text, timestamp, integer } from '@keystone-6/core/fields'

const Review = list({
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
        //relationships
    }
})

export default Review
