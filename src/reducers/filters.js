const filtersReducerDefaultState = {
    search_term: "", 
}       

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "EDIT_SEARCH_TERM":
            return {
                ...state,
                search_term: action.search_term,
            }
        case "EDIT_CHARACTER_SORT":
            return {
                ...state,
                sort_by: action.sort_by,
            }
        default:
            return state;
    }
}

export default filtersReducer;