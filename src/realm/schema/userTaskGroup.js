'use strict';

import Realm from 'realm';
import {TEAM_LIST_SCHEMA, TEAM_SCHEMA} from "./team";
import {USER_PROFILE_LIST_SCHEMA, USER_PROFILE_SCHEMA} from "./userProfile";
import {TASK_GROUP_SCHEMA} from "./taskGroup";
export const USER_TASK_GROUP_SCHEMA = 'UserTaskGroup';

class UserTaskGroup extends Realm.Object {}
UserTaskGroup.schema = {
    name: USER_TASK_GROUP_SCHEMA,
    properties: {
        _id: {
            type: 'string',
            optional: true
        },
        _user: {
            type: USER_PROFILE_SCHEMA,
            default: {}
        },
        type: {
            type: 'string',
            optional: true
        },
        _team: {
            type: TEAM_SCHEMA,
            default: {}
        },
        leftBonusSparks: {
            type: 'int',
            optional: true
        },
        lastBonusSparksRefreshed: {
            type: 'date',
            optional: true
        },
        isPrivate: {
            type: 'bool',
            optional: true
        },
        secretCode: {
            type: 'string',
            optional: true
        },
        taskCounter: {
            type: 'int',
            optional: true
        },
        currentTask: {
            type: TASK_GROUP_SCHEMA,
            optional: true
        }
    }

};

export default UserTaskGroup;