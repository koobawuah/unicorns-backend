import { list } from "@keystone-6/core";
import { text, checkbox } from "@keystone-6/core/fields";


const Course = list({
    fields: {
        courseCode: text({ isIndexed: 'unique', validation: {isRequired: true } }),
        courseTitle: text(),
        description: text({ ui: { displayMode: "textarea" } }),
        isPopular: checkbox(),
        isApproved: checkbox(),
        //relationships
    }
})

export default Course
