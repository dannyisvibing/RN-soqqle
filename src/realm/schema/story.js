'use strict';

import Realm from 'realm';
import {TASK_GROUP_SCHEMA} from "./taskGroup";
export const STORY_SCHEMA = 'Story';

class Story extends Realm.Object {}
Story.schema = {
    name: STORY_SCHEMA,
    properties: {
        _id: {
            type: 'string',
            optional: true
        },
        name: {
            type: 'string',
            optional: true
        },
        skill: {
            type: 'string',
            optional: true
        },
        description: {
            type: 'string',
            optional: true
        },
        category: {
            type: 'string',
            optional: true
        },
        subCategory: {
            type: 'string',
            optional: true
        },
        success: {
            type: 'string',
            optional: true
        },
        validation: {
            type: 'string',
            optional: true
        },
        type: {
            type: 'string',
            optional: true
        },
        //relatedTopics: [],
        objectiveValue: {
            type: 'string',
            optional: true
        },
        /*reward: {
            type: 'string',
            value: 'int'
        },*/
        quota: {
            type: 'int',
            optional: true
        },
        expiry: {
            type: 'int',
            optional: true
        },
        refresh: {
            type: 'string',
            optional: true
        },
        insdt: {
            type: 'date',
            optional: true
        },
        bonusSparks: {
            type: 'int',
            optional: true
        },
        reducePerRefresh: {
            type: 'int',
            optional: true
        },
        maxnum: {
            type: 'int',
            optional: true
        },
        public: {
            type: 'bool',
            optional: true
        },
        abstract: {
            type: 'string',
            optional: true
        },
        nextteaser: {
            type: 'string',
            optional: true
        },
        requirement: {
            type: 'string',
            optional: true
        },
        requirementValue: {
            type: 'string',
            optional: true
        },
        taskGroup: {
            type: TASK_GROUP_SCHEMA,
            default: {}
        }
    }

};

export default Story;