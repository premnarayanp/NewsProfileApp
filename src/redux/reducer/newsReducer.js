import { ADD_TOP_HEADING_NEWS_LIST, ADD_ALL_NEWS_LIST } from "../action/actionType"


const initialAuthState = {
    topHeadLineNews: { articles: [] },
    allNews: { articles: [] },
};

export default function newsReducer(state = initialAuthState, action) {

    switch (action.type) {
        case ADD_TOP_HEADING_NEWS_LIST:
            return {
                ...state,
                topHeadLineNews: action.data.topHeadLineNews,
            }

        case ADD_ALL_NEWS_LIST:
            return {
                ...state,
                allNews: action.data.allNews,
            }

        default:
            return state;
    }

}