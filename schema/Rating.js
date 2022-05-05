import { list } from "@keystone-6/core";
import { select, integer } from "@keystone-6/core/fields";

const Rating = list({
    fields: {
        tile: select({ 
            defaultValue: 'Rating Options',
            options: [
                { label: 'Facilities Rating', value: 'FACILITY_RATING' },
                { label: 'Course Rating', value: 'COURSE_RATING' },
                { label: 'Faculty Rating', value: 'FACULTY_RATING' },
                { label: 'Recommendation', value: 'RECOMMEND_RATING' },
            ]}),
        rating: integer(),
        //relationships
    }
})

export default Rating; 
