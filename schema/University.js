import { list } from "@keystone-6/core";
import { text, integer, checkbox } from "@keystone-6/core/fields"

const University = list({
    fields: {
        name: text({ validation: { isRequired: true } }),
        slug: text(),
        description: text({ ui: { displayMode: "textarea" } }),
        location: text(),
        population: integer(),
        isApproved: checkbox(),

    }
})

export default University;
