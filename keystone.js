import { config } from '@keystone-6/core'
import { User, University, Course, Review, Rating } from './schema'


export default (
    config({
        db: {
            provider: 'sqlite',
            url: 'file:./keystone.db',
        },
        lists: {
            User,
            University,
            Course,
            Review,
            Rating,
        },
    })
)
