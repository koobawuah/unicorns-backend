import { list } from "@keystone-6/core";
import { checkbox, text, } from "@keystone-6/core/fields";

const User = list({
    fields: {
        username: text({ validation: { isRequired: true } }),
        email: text({ 
            isIndexed: 'unique',
            validation: { isRequired: true } 
        }),
        isVerified: checkbox(),
        //relationships
    }
})

export default User;
