import { list } from "@keystone-6/core";
import { checkbox, relationship, text, } from "@keystone-6/core/fields";

const User = list({
    fields: {
        username: text({ validation: { isRequired: true } }),
        email: text({ 
            isIndexed: 'unique',
            validation: { isRequired: true } 
        }),
        isVerified: checkbox(),
        attendsUniversity: relationship({
            ref: 'University.students',
            many: false,
        }),
        reviewsMade: relationship({
            ref: 'Review.reviewBy',
            many: true,
        }),
    }
})

export default User;
