import _ from 'lodash';

export const filterStories = (stories, user) => {
    let sortedStories = _.sortBy(stories, ["groupName", "sequence"]);
    let filterStories = [];
    sortedStories.map(data => {
        //show the item only if user is in the same company and team as the item(story and challenge)
        if ((!data._company || (data._company && user._teams.find(team => {
                if (team._company) {
                    team._company.find(company => company === data._company)
                }

            })))
            && (!data._teams || (data._teams && user._teams.find(team => team._id === data._teams)))) {
            if (data.taskGroup) {
                if (data.taskGroup && data.taskGroup.sequence == 1) {
                    filterStories.push(data); //part of a taskgroup and is the first one
                }
            }
            else {
                filterStories.push(data); //This is a standalone story with no grouping so need to add
            }

        }
    });
    return filterStories;
};