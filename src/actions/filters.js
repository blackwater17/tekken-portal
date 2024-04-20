export const setSearchTerm = (search_term = "") => ({
    type: "EDIT_SEARCH_TERM",
    search_term
})

export const setCharacterSort = (sort_by) => ({
    type: "EDIT_CHARACTER_SORT",
    sort_by,
})