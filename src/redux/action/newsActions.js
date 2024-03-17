import { ADD_TOP_HEADING_NEWS_LIST, ADD_ALL_NEWS_LIST } from './actionType';
//action creator News
export function addTopHeadingNewsList(dataItems) {
    return {
        type: ADD_TOP_HEADING_NEWS_LIST,
        data: dataItems
    }
}

export function addAllNewsList(dataItems) {
    return {
        type: ADD_ALL_NEWS_LIST,
        data: dataItems
    }
}

