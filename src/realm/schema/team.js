'use strict';

import Realm from 'realm';
import {USER_PROFILE_LIST_SCHEMA} from "./userProfile";
export const TEAM_SCHEMA = 'Team';
export const TEAM_LIST_SCHEMA = 'Team[]';

class Team extends Realm.Object {}
Team.schema = {
    name: TEAM_SCHEMA,
    properties: {
        _id: {
            type: 'string',
            optional: true
        },
        name: {
            type: 'string',
            optional: true
        },
        date: {
            type: 'string',
            optional: true
        },
        quickJoinLink: {
            type: 'string',
            optional: true
        },
        users: {
            type: USER_PROFILE_LIST_SCHEMA,
            default: []
        },

    }

};

export default Team;