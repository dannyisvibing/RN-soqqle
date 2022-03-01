'use strict';

import Realm from 'realm';
export const TASK_GROUP_SCHEMA = 'TaskGroup';
export const TASK_GROUP_LIST_SCHEMA = 'TaskGroup[]';

class TaskGroup extends Realm.Object {}
TaskGroup.schema = {
    name: TASK_GROUP_SCHEMA,
    properties: {
        _id: {
            type: 'string',
            optional: true
        },
        name: {
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
        unlockdate: {
            type: 'date',
            optional: true
        },
        unlocktime: {
            type: 'date',
            optional: true
        },
        groupname: {
            type: 'string',
            optional: true
        },
        sequence: {
            type: 'string',
            optional: true
        },
        skillname: {
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
        type: {
            type: 'int',
            optional: true
        },
        typename: {
            type: 'string',
            optional: true
        },

    }

};

export default TaskGroup;